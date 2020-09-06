import React, { useEffect, useState } from "react";
import { DisclosureAndDirectionsComp } from "../../components/DisclosureAndDirectionsComp";
import { MainPageComp } from "../../components/MainPageComp";
import { SurveyPageComp } from "../../components/SurveyPageComp";
import _, { shuffle } from "lodash";
import "./homepage.css";
import api from "../../api";
import { ThankYouComp } from "../../components/ThankYouComp";
import { InformedConsentComp } from "../../components/InformedConsentComp";

export interface Recipe {
    id: number;
    type: string;
    recipe: string;
    title: string;
    most_similar: [number];
    ratings: number;
    stars: number;
    image: string;
    ingredients: [string];
    directions: [string];
}

const breakfast_recipes = require("./../../data/breakfast_recipes.json");
const dessert_recipes = require("./../../data/dessert_recipes.json");
const dinner_recipes = require("./../../data/dinner_recipes.json");
const drink_recipes = require("./../../data/drink_recipes.json");
const gluten_free_recipes = require("./../../data/gluten_free_recipes.json");
const side_recipes = require("./../../data/side_recipes.json");

export const HomePage: React.FC = () => {
    const [allRecipes, setRecipes] = useState<Recipe[]>([]);
    const [mainRecipes, setMainRecipes] = useState<Recipe[]>([]);
    let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
    let [tempCurrentRecipe, setTempCurrentRecipe] = useState<Recipe>();
    let [groupId, setGroupId] = useState(0);
    let [index, setIndex] = useState(-2); // TOOD: SET TO -1
    let [directionsAccepted, setDirectionsAccepted] = useState(false);
    let [data] = useState([{}]);
    let [, setDisplayNum] = useState(0);
    let [displayRound, setDisplayRound] = useState(0);

    let [similar_recipes, setSimilarRecipes] = useState<Recipe[]>([]);
    let [certain_recipes, setCertainRecipes] = useState<Recipe[]>([]);
    let [uncertain_recipes, setUncertainRecipes] = useState<Recipe[]>([]);

    const scenarios = [
        "You are preparing breakfast for your family one morning. Of the options presented, choose the recipe that you are most likely to make.",
        "You have been invited to a work party and asked to bring a dessert. Of the options presented, chose the recipe that you are most likely to bring.",
        "You have been invited to a neighborhood block party and asked to bring a main dish for dinner. Of the options presented, choose the recipe that you are most likely to bring.",
        "You are looking for a drink recipe to make for a treat one day. Of the options presented, choose the recipe that you are most likely to make.",
        "You are hosting a get-together with your friends, one of whom is gluten-free. Of the options presented, choose the recipe that you are most likely to make.",
        "You are attending a New Year's Eve party and are asked to bring a side dish. Of the options presented, choose the recipe that you are most likely to bring.",
    ];

    const displayRounds = [
        [0, 1, 2],
        [1, 2, 0],
        [2, 0, 1],
    ];
    interface Recipe {
        id: number;
        type: string;
        recipe: string;
        title: string;
        most_similar: [number];
        ratings: number;
        stars: number;
        image: string;
        ingredients: [string];
        directions: [string];
    }

    window.onbeforeunload = function () {
        if (index !== 2)
            return "Data will be lost if you leave the page and you will have to restart, are you sure?";
    };

    const handleClick = (recipe: Recipe) => {
        if (index === 1) setTempCurrentRecipe(recipe);
        else if (index === 0) {
            let r = recipe;
            setCurrentRecipe(r);
            if (recipe.type === "main") {
                let similar = recipe.most_similar;
                let similarR = allRecipes.filter((x) => similar.includes(x.id));
                setSimilarRecipes(similarR);

                let certain = similarR.filter((x) => x.type === "certain");
                let uncertain = similarR.filter((x) => x.type === "uncertain");
                setCertainRecipes(certain);
                setUncertainRecipes(uncertain);
            }
        }
    };

    const handleSubmit = (event: any) => {
        if (index === -2) {
            setIndex(-1);
            setDirectionsAccepted(false);
        } else setIndex(0);
    };

    const selectRecipeClick = () => {
        let temp = ++index;
        if (temp === 1) setTempCurrentRecipe(currentRecipe);
        if (temp > 1) {
            temp = 0;
            setGroupId(++groupId);
            if (groupId === 6) temp = 2;
        }
        setIndex(temp);
    };

    const directionsCheckboxChange = (event: any) => {
        setDirectionsAccepted(event.target.checked);
    };

    const submitSurvey = (json: any) => {
        data.push(json);
        selectRecipeClick();
    };

    const refresh = () => {
        let recipes: Recipe[] = [];
        if (groupId === 0 && index === 0) {
            // setDisplayRound(displayRounds[Math.floor(Math.random() * 3)]);
            let num: number = Math.floor(Math.random() * 3);
            setDisplayRound(num);
        }

        if (groupId === 0) recipes = breakfast_recipes;
        else if (groupId === 1) recipes = shuffle(dessert_recipes);
        else if (groupId === 2) recipes = shuffle(dinner_recipes);
        else if (groupId === 3) recipes = shuffle(drink_recipes);
        else if (groupId === 4) recipes = shuffle(gluten_free_recipes);
        else if (groupId === 5) recipes = shuffle(side_recipes);

        setDisplayNum(displayRounds[displayRound][Math.floor(groupId / 2)]);
        // recipes = shuffle(recipes);
        setRecipes(recipes);

        let mainRecipes = _.filter(recipes, (recipe: Recipe) => {
            return recipe.type === "main";
        });

        setMainRecipes(mainRecipes);
        if (index === 0) setCurrentRecipe(mainRecipes[0]);

        if (currentRecipe && currentRecipe.most_similar.length > 0) {
            let similar = currentRecipe.most_similar;
            let similarR = recipes.filter((x) => similar.includes(x.id));
            setSimilarRecipes(similarR);
            let certain = similarR.filter((x) => x.type === "certain");
            let uncertain = similarR.filter((x) => x.type === "uncertain");
            setCertainRecipes(certain);
            setUncertainRecipes(uncertain);
        }

        if (index === 2) {
            try {
                api.post("postdata", data)
                    .catch((error) => {
                        console.log("error");
                        console.log(error);
                    })
                    .then((data) => {
                        console.log("then");
                        console.log(data);
                    });
            } catch (error) {
                console.log("shouldn't be here :(");
            }
        }
    };

    useEffect(() => {
        refresh();
    }, []);

    useEffect(() => {
        refresh();
    }, [directionsAccepted, index]);

    return index === -2 ? (
        <InformedConsentComp
            directionsAccepted={directionsAccepted}
            directionsCheckboxChange={directionsCheckboxChange}
            handleSubmit={handleSubmit}
            refresh={refresh}
        />
    ) : index === -1 ? (
        <DisclosureAndDirectionsComp
            directionsAccepted={directionsAccepted}
            directionsCheckboxChange={directionsCheckboxChange}
            handleSubmit={handleSubmit}
            refresh={refresh}
        />
    ) : currentRecipe ? (
        index === 0 ? (
            <MainPageComp
                currentRecipe={currentRecipe}
                handleClick={handleClick}
                mainRecipes={mainRecipes}
                selectRecipeClick={selectRecipeClick}
                scenario={scenarios[groupId]}
            />
        ) : index === 1 ? (
            <SurveyPageComp
                allRecipes={allRecipes}
                currentRecipe={currentRecipe}
                handleClick={handleClick}
                similarRecipes={similar_recipes}
                certainRecipes={certain_recipes}
                uncertainRecipes={uncertain_recipes}
                submitSurvey={submitSurvey}
                tempCurrentRecipe={
                    tempCurrentRecipe ? tempCurrentRecipe : currentRecipe
                }
                groupdId={groupId}
                displayNum={
                    displayRounds[displayRound][Math.floor(groupId / 2)]
                }
            />
        ) : index > 1 ? (
            <ThankYouComp />
        ) : (
            <div>
                Current Recipe isn't set. Please contact Carson (385) 244-6611
            </div>
        )
    ) : index > 1 ? (
        <ThankYouComp />
    ) : (
        <div>Index doesn't equal -1. Please contact Carson (385) 244-6611</div>
    );
};

export default HomePage;

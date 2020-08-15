import React, { useEffect, useState } from "react";
import _ from "lodash";
import { View, Button } from "react-native";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  CardImg,
  Row,
} from "reactstrap";
import { RecipeComp } from "./../../components/RecipeComp";
import { SurveyComp } from "../../components/SurveyComp";
import "./homepage.css";
import { DisclosureAndDirectionsComp } from "../../components/DisclosureAndDirectionsComp";
import { MainPageComp } from "../../components/MainPageComp";
import { SurveyPageComp } from "../../components/SurveyPageComp";

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
const gluten_free_recipes = require("./../../data/gluten_free_recipes.json");
const side_recipes = require("./../../data/side_recipes.json");

export const HomePage: React.FC = () => {
  const [allRecipes, setRecipes] = useState<Recipe[]>([]);
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>([]);
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
  let [tempCurrentRecipe, setTempCurrentRecipe] = useState<Recipe>();
  let [groupId, setGroupId] = useState(0);
  let [index, setIndex] = useState(-1);
  let [directionsAccepted, setDirectionsAccepted] = useState(false);

  let [similar_recipes, setSimilarRecipes] = useState<Recipe[]>([]);
  let [certain_recipes, setCertainRecipes] = useState<Recipe[]>([]);
  let [uncertain_recipes, setUncertainRecipes] = useState<Recipe[]>([]);

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

  const handleClick = (rcp: Recipe) => {
    if (index === 1) setTempCurrentRecipe(rcp);
    else if (index === 0) setCurrentRecipe(rcp);
    if (rcp.most_similar.length > 0) {
      setSimilarRecipes(
        _.filter(allRecipes, (rcp: Recipe) => {
          return currentRecipe
            ? currentRecipe.most_similar.includes(rcp.id)
            : false;
        })
      );
      setCertainRecipes(
        _.filter(similar_recipes, (rcp: Recipe) => {
          return rcp.type === "certain";
        })
      );
      setUncertainRecipes(
        _.filter(similar_recipes, (rcp: Recipe) => {
          return rcp.type === "uncertain";
        })
      );
    }
  };

  const handleSubmit = (event: any) => {
    setIndex(0);
  };

  const selectRecipeClick = () => {
    let temp = ++index;
    if (temp === 1) setTempCurrentRecipe(currentRecipe);
    if (temp > 1) {
      temp = 0;
      setGroupId(++groupId);
      if (groupId === 5) temp = 2;
    }
    setIndex(temp);
  };

  const directionsCheckboxChange = (event: any) => {
    setDirectionsAccepted(event.target.checked);
  };

  const submitSurvey = (event: any) => {
    selectRecipeClick();
  };

  const refresh = () => {
    let recipes: Recipe[] = [];

    if (groupId === 0) recipes = breakfast_recipes;
    else if (groupId === 1) recipes = dessert_recipes;
    else if (groupId === 2) recipes = dinner_recipes;
    else if (groupId === 3) recipes = gluten_free_recipes;
    else if (groupId === 4) recipes = side_recipes;

    setRecipes(recipes);

    let mainRecipes = _.filter(recipes, (recipe: Recipe) => {
      return recipe.type === "main";
    });

    setMainRecipes(mainRecipes);
    setCurrentRecipe(mainRecipes[0]);

    if (currentRecipe && currentRecipe.most_similar.length > 0) {
      setSimilarRecipes(
        _.filter(recipes, (rcp: Recipe) => {
          console.log(rcp.id);
          console.log(
            currentRecipe ? currentRecipe.most_similar.includes(rcp.id) : false
          );
          return currentRecipe
            ? currentRecipe.most_similar.includes(rcp.id)
            : false;
        })
      );
      setCertainRecipes(
        _.filter(similar_recipes, (rcp: Recipe) => {
          return rcp.type === "certain";
        })
      );
      setUncertainRecipes(
        _.filter(similar_recipes, (rcp: Recipe) => {
          return rcp.type === "uncertain";
        })
      );
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    refresh();
  }, [directionsAccepted, index]);

  return index === -1 ? (
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
      />
    ) : index === 1 ? (
      <SurveyPageComp
        allRecipes={allRecipes}
        currentRecipe={currentRecipe}
        handleClick={handleClick}
        similarRecipes={similar_recipes}
        submitSurvey={submitSurvey}
        tempCurrentRecipe={
          tempCurrentRecipe ? tempCurrentRecipe : currentRecipe
        }
      />
    ) : index === 2 ? (
      <View>
        <span>Thank you for participating!</span>
      </View>
    ) : (
      <div>Current Recipe isn't set. Please contact Carson (385) 244-6611</div>
    )
  ) : (
    <div>Index doesn't equal -1. Please contact Carson (385) 244-6611</div>
  );
};

export default HomePage;

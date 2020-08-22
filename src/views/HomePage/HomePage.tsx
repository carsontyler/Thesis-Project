import "reflect-metadata";
import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import { DisclosureAndDirectionsComp } from "../../components/DisclosureAndDirectionsComp";
import { MainPageComp } from "../../components/MainPageComp";
import { SurveyPageComp } from "../../components/SurveyPageComp";
import {createConnection} from "typeorm";
import {Data} from "./../../entity/Data";
import {Compensation} from "./../../entity/Compensation";
import _ from "lodash";
import "./homepage.css";
import api from '../../api'
var mysql = require('mysql')

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
  let [index, setIndex] = useState(-1); ///// TODO: CHANGE THIS TO -1
  let [directionsAccepted, setDirectionsAccepted] = useState(false);
  let [data, setData] = useState([{}])

  let [similar_recipes, setSimilarRecipes] = useState<Recipe[]>([]);
  let [certain_recipes, setCertainRecipes] = useState<Recipe[]>([]);
  let [uncertain_recipes, setUncertainRecipes] = useState<Recipe[]>([]);
  var con = mysql.createConnection({
    host: "http://sql3.freemysqlhosting.ne:3306/",
    data: "sql3361360",
    password: "kd2SpXjI24",
    database: "sql3361360",
  });

  const scenarios = ["You are preparing breakfast for your family one morning. Of the options presented, choose the recipe that you are most likely to make.",
                     "You have been invited to a work party and asked to bring a dessert. Of the options presented, chose the recipe that you are most likely to bring.",
                     "You have been invited to a neighborhood block party and asked to bring a main dish for dinner. Of the options presented, choose the recipe that you are most likely to bring.",
                     "You are hosting a get-together with your friends, one of whom is gluten-free. Of the options presented, choose the recipe that you are most likely to make.",
                     "You are attending a New Year's Eve party and are asked to bring a side dish. Of the options presented, choose the recipe that you are most likely to bring."]

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
    if (groupId === 5) setIndex(2);
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

  const submitSurvey = (event: any, json: any) => {
    data.push(json);
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

    if (index === 2) { 
      api.post('postdata', data).then((data) => {
        //const json = JSON.parse(data.data);
        console.log(data.data); 
      })     
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
        scenario={scenarios[groupId]}
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
        groupdId={groupId}
      />
    ) : index > 1 ? (
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

import React, { Fragment, useEffect, useState } from "react"
import { View, Button } from "react-native"
import {Card, CardHeader, CardTitle, CardBody, Col, CardImg, Row} from "reactstrap"
import { RecipeComp } from "./RecipeComp";
import _ from 'lodash'
import "./homepage.css"

const breakfast_recipes = require('./../../data/breakfast_recipes.json')
const dessert_recipes = require('./../../data/dessert_recipes.json')
const dinner_recipes = require('./../../data/dinner_recipes.json')
const gluten_free_recipes = require('./../../data/gluten_free_recipes.json')
const side_recipes = require('./../../data/side_recipes.json') 

interface RecipeRaterCompProps {
    selectRecipeClick: any;
}

export const RecipeRaterComp: React.FC<RecipeRaterCompProps> = (props) => {
  //const ingredients = props.recipe ? props.recipe.ingredients.substr(2, props.recipe.ingredients.length - 4).split("', '") : null;
  //const directions = props.recipe ? props.recipe.directions.substr(2, props.recipe.directions.length - 4).split("', '") : null;
    
  interface Recipe {
    id: number,
    type: string, 
    recipe: string,
    title: string,
    most_similar: [number],
    ratings: number,
    stars: number,
    image: string,
    ingredients: [string],
    directions: [string],
  }

  const varToString = (varObj: {}) => Object.keys(varObj)[0]
  const [childRecipes, setChildRecipes] = useState<Recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>();
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
  let [groupId, setGroupRecipe] = useState("");
  let [index, setIndex] = useState(0);
  let [displayId, setDisplayId] = useState(0);
  const handleClick = (rcp: any) => {
    setCurrentRecipe(rcp);
  }

  useEffect(() => {
    setChildRecipes(dinner_recipes);
    let mainRecipes = _.filter(dinner_recipes, (recipe: Recipe) => {
        return recipe.type === "main";
    });
    setGroupRecipe(varToString(dinner_recipes));
    setMainRecipes(mainRecipes);
    setCurrentRecipe(mainRecipes[0]);
    let childIds = currentRecipe?.most_similar ?? [] as number[];
    setChildRecipes(_.filter(dinner_recipes, (recipe: Recipe) => {
        return childIds.includes(recipe.id);
    }))
  }, []);
  
  return currentRecipe ? (
    <Fragment>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <RecipeComp recipe={currentRecipe} />
        </View>
        
      </View>
    </Fragment>
  ) : (<div></div>);   
}
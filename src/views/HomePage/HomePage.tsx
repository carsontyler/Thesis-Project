import React, { Fragment, useEffect, useState } from "react"
import _ from 'lodash'
// import { HomePageComp } from "../../components/HomePageComp"
import { View, Button } from "react-native"
import {Card, CardHeader, CardTitle, CardBody, Col, CardImg, Row} from "reactstrap"
import { RecipeComp } from "./../../components/RecipeComp";
import { RecipeRaterComp } from "./../../components/RecipeRaterComp"
import { SurveyComp } from "../../components/SurveyComp"
import "./homepage.css"

export interface Recipe {
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

const breakfast_recipes = require('./../../data/breakfast_recipes.json')
const dessert_recipes = require('./../../data/dessert_recipes.json')
const dinner_recipes = require('./../../data/dinner_recipes.json')
const gluten_free_recipes = require('./../../data/gluten_free_recipes.json')
const side_recipes = require('./../../data/side_recipes.json') 

export const HomePage: React.FC = () => {  
  
  const varToString = (varObj: {}) => Object.keys(varObj)[0]
  const [allRecipes, setRecipes] = useState<Recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>();
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
  let [groupId, setGroupId] = useState(0);
  let [index, setIndex] = useState(-1);
    
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
  
  const handleClick = (rcp: any) => {
    setCurrentRecipe(rcp);
  }
 
  let selectRecipeClick = () => {
    let temp = ++index;
    if (temp > 1){
      temp = 0;
      setGroupId(++groupId);
    }
    setIndex(temp);
  }

  useEffect(() => {
    let recipes:Recipe[] = [];

    if (groupId === 0)
      recipes = breakfast_recipes;
    else if (groupId === 1)
      recipes = dessert_recipes;
    else if (groupId === 2)
      recipes = dinner_recipes;
    else if (groupId === 3)
      recipes = gluten_free_recipes;
    else if (groupId === 4)
      recipes = side_recipes;

    setRecipes(recipes);

    let mainRecipes = _.filter(dinner_recipes, (recipe: Recipe) => {
        return recipe.type === "main";
    });
    setMainRecipes(mainRecipes);
    setCurrentRecipe(mainRecipes[0]);
  }, []);

  useEffect(() => {
    let recipes:Recipe[] = [];

    if (groupId === 0)
      recipes = breakfast_recipes;
    else if (groupId === 1)
      recipes = dessert_recipes;
    else if (groupId === 2)
      recipes = dinner_recipes;
    else if (groupId === 3)
      recipes = gluten_free_recipes;
    else if (groupId === 4)
      recipes = side_recipes;

    setRecipes(recipes);
    let mainRecipes = _.filter(recipes, (recipe: Recipe) => {
        return recipe.type === "main";
    });
    setMainRecipes(mainRecipes);
    setCurrentRecipe(mainRecipes[0]);
  }, [index])
  
  return index === -1 ? (
    <Fragment>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Card className="card-chart">
          <CardHeader>
            <CardTitle tag="h3">
                <i className="tim-icons icon-bell-55 text-info" />{" "}
                Directions and Disclosure
            </CardTitle>
          </CardHeader>
          <CardBody>
            <p>
              Thank you for participating in Carson's Thesis Project Experiment! 
            </p>
            <h3>Directions</h3>
            <p>
              In this experiment, you will be selecting recipes based on a given scenario and then rating recommendations based on your selection. You can select recipes by clicking on them.
            <br/>
              Five (5) scenarios will be presented. You should select the recipe you think is the best. There is no right answer, simply pick the one you think looks the best, would be the most delicious, is the easiest to cook - whatever. 
            <br/>
              Upon selecting a recipe, you will be presented with ten (10) recommended recipes. You can cycle through the recipes by clicking on them. 
            <br/>
              You will then fill out a survey related to the recommended recipes and the recommendation system as a whole. You will rate these from 1-5 by clicking on the stars. 
            </p>
          </CardBody>
        </Card>
      </View>
    </Fragment>
   ) :
  currentRecipe ? (index === 0 ? (    
    <Fragment>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h3">
                <i className="tim-icons icon-bell-55 text-info" />{" "}
                Recipe Recommender
              </CardTitle>
            </CardHeader>
            <CardBody>{mainRecipes ? (
              <div>
                <div id="recipe1" onClick={() => handleClick(mainRecipes[0])}>
                  <span>1. { mainRecipes[0].title }</span>
                </div>
                <div id="recipe2" onClick={() => handleClick(mainRecipes[1])}>
                  <span>2. { mainRecipes[1].title }</span>
                </div>
                <div id="recipe3" onClick={() => handleClick(mainRecipes[2])}>
                  <span>3. { mainRecipes[2].title }</span>
                </div>
                <div id="recipe4" onClick={() => handleClick(mainRecipes[3])}>
                  <span>4. { mainRecipes[3].title }</span>
                </div>
                <div id="recipe5" onClick={() => handleClick(mainRecipes[4])}>
                  <span>5. { mainRecipes[4].title }</span>
                </div>
              </div>
              )
              : (<div>No Recipes Found</div>)}
            </CardBody>
          </Card>
          <Button onPress={selectRecipeClick} title="Select Recipe" color="#4ECCA3" /> 
        </View>  
        <View style={{flex: 1, flexDirection: 'column'}}>
          <RecipeComp recipe={currentRecipe} />
        </View>
      </View>
    </Fragment>
  ) 
  : index === 1 ?   
  <Fragment>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <RecipeComp recipe={currentRecipe} />
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <SurveyComp submitSurvey={selectRecipeClick}/>
      </View>
    </View>
  </Fragment> : (<div></div>)) : (<div></div>);  
  
}

export default HomePage
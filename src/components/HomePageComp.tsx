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

interface HomePagecompProps {
    selectRecipeClick: any;
}

export const HomePageComp: React.FC<HomePagecompProps> = (props) => {
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
  const [allRecipes, setRecipes] = useState<Recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>();
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
  let [groupId, setGroupRecipe] = useState("");
  let [index, setIndex] = useState(0);
  
  const handleClick = (rcp: any) => {
    setCurrentRecipe(rcp);
  }

  useEffect(() => {
    setRecipes(dinner_recipes);
    let mainRecipes = _.filter(dinner_recipes, (recipe: Recipe) => {
        return recipe.type === "main";
    });
    setGroupRecipe(varToString(dinner_recipes));
    setMainRecipes(mainRecipes);
    setCurrentRecipe(mainRecipes[0]);
  }, []);
  
  return currentRecipe ? (    
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
          <Button onPress={props.selectRecipeClick} title="Select Recipe" color="#4ECCA3" /> 
        </View>  
        <View style={{flex: 1, flexDirection: 'column'}}>
          <RecipeComp recipe={currentRecipe} />
        </View>
      </View>
    </Fragment>
  ) : (<div></div>);   
}
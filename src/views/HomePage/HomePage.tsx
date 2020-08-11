import React, { Fragment, useEffect, useState } from "react"
import _ from 'lodash'
import { View, Button } from "react-native"
import {Card, CardHeader, CardTitle, CardBody, Col, CardImg, Row} from "reactstrap"
import { RecipeComp } from "./../../components/RecipeComp";
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
  
  const handleClick = (rcp: Recipe) => {
    if (index === 1)
      setTempCurrentRecipe(rcp);
    else if (index === 0)
      setCurrentRecipe(rcp);
    if (rcp.most_similar.length > 0) {
      setSimilarRecipes(_.filter(allRecipes, (rcp: Recipe) => {
        return currentRecipe ? currentRecipe.most_similar.includes(rcp.id) : false;
      }));
      setCertainRecipes(_.filter(similar_recipes, (rcp: Recipe) => {
        return rcp.type === 'certain';
      }));
      setUncertainRecipes(_.filter(similar_recipes, (rcp: Recipe) => {
        return rcp.type === 'uncertain';
      }));
    }
  }

  const handleSubmit = (event: any) => {
    setIndex(0);
  }
 
  const selectRecipeClick = () => {
    let temp = ++index;
    if (temp === 1)
      setTempCurrentRecipe(currentRecipe);
    if (temp > 1) {
      temp = 0;
      setGroupId(++groupId);
      if (groupId === 5)
        temp = 2;
    }
    setIndex(temp);
  }

  const directionsCheckboxChange = (event : any) => {
    setDirectionsAccepted(event.target.checked);
  }

  const submitSurvey = (event: any) => {
    selectRecipeClick();
  }

  const refresh = () => {
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

    if (currentRecipe && currentRecipe.most_similar.length > 0) {
      setSimilarRecipes(_.filter(recipes, (rcp: Recipe) => {
        console.log(rcp.id);
        console.log(currentRecipe ? currentRecipe.most_similar.includes(rcp.id) : false);
        return currentRecipe ? currentRecipe.most_similar.includes(rcp.id) : false;
      }));
      setCertainRecipes(_.filter(similar_recipes, (rcp: Recipe) => {
        return rcp.type === 'certain';
      }));
      setUncertainRecipes(_.filter(similar_recipes, (rcp: Recipe) => {
        return rcp.type === 'uncertain';
      }));
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    refresh();
  }, [index])

  useEffect(() => {
    refresh();
  }, [directionsAccepted])
  
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
            <br/>
              Five (5) scenarios will be presented. You should select the recipe you think is the best. There is no right answer, simply pick the one you think looks the best, would be the most delicious, is the easiest to cook - whatever. 
            <br/>
            <br/>
              Upon selecting a recipe, you will be presented with ten (10) recommended recipes. You can cycle through the recipes by clicking on them. 
            <br/>
            <br/>
              You will then fill out a survey related to the recommended recipes and the recommendation system as a whole. You will rate these from 1-5 by clicking on the stars. 
            </p>
            <form>
              <label>
                <input 
                  name="directionsCheckbox"
                  type="checkbox"
                  onChange={directionsCheckboxChange}/>
                  I understand these directions and accept the terms and conditions.
                  <br/>
              </label>
              <input type="submit" value="Submit" disabled={!directionsAccepted} onClick={handleSubmit}/>
            </form>
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
      <div> 
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 3, flexDirection: 'row'}}>
              <div className='recipe_div'>
                <RecipeComp recipe={tempCurrentRecipe} />
              </div>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <div id="recipe1" onClick={() => handleClick(similar_recipes[0])}>
                  <span>1. { similar_recipes[0].title }</span>
                </div>
                <div id="recipe2" onClick={() => handleClick(similar_recipes[1])}>
                  <span>2. { similar_recipes[1].title }</span>
                </div>
                <div id="recipe3" onClick={() => handleClick(similar_recipes[2])}>
                  <span>3. { similar_recipes[2].title }</span>
                </div>
                <div id="recipe4" onClick={() => handleClick(similar_recipes[3])}>
                  <span>4. { similar_recipes[3].title }</span>
                </div>
                <div id="recipe5" onClick={() => handleClick(similar_recipes[4])}>
                  <span>5. { similar_recipes[4].title }</span>
                </div>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <div id="recipe6" onClick={() => handleClick(similar_recipes[5])}>
                  <span>6. { similar_recipes[5].title }</span>
                </div>
                <div id="recipe7" onClick={() => handleClick(similar_recipes[6])}>
                  <span>7. { similar_recipes[6].title }</span>
                </div>
                <div id="recipe8" onClick={() => handleClick(similar_recipes[7])}>
                  <span>8. { similar_recipes[7].title }</span>
                </div>
                <div id="recipe9" onClick={() => handleClick(similar_recipes[8])}>
                  <span>9. { similar_recipes[8].title }</span>
                </div>
                <div id="recipe10" onClick={() => handleClick(similar_recipes[9])}>
                  <span>10. { similar_recipes[9].title }</span>
                </div>
              </View>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <div className='main_div'> 
            <SurveyComp submitSurvey={submitSurvey} recipe={currentRecipe} similar_recipes={allRecipes}/>
            </div> 
          </View>
        </View>
      </div>
    </Fragment> 
  : index === 2 ? 
    <Fragment>
      <span>Thank you for participating!</span>
    </Fragment>
  : (<div>Current Recipe isn't set. Please contact Carson (385) 244-6611</div>)) 
  : (<div>Index doesn't equal -1. Please contact Carson (385) 244-6611</div>);  
  
}

export default HomePage
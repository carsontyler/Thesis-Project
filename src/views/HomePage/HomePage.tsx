import React, { useEffect, useState, Fragment } from "react"
import * as react from "react";
import api from '../../api'
import {Container, Col, Row, Card, CardHeader, CardTitle, CardBody, CardImg} from "reactstrap"
import _ from 'lodash'
import "./homepage.css"
import { RecipeList } from "../../components/RecipeList"
import { RecipeComp } from "../../components/RecipeComp"

const breakfast_recipes = require('./../../data/breakfast_recipes.json')
const dessert_recipes = require('./../../data/dessert_recipes.json')
const dinner_recipes = require('./../../data/dinner_recipes.json')
const gluten_free_recipes = require('./../../data/gluten_free_recipes.json')
const side_recipes = require('./../../data/side_recipes.json')

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

const HomePage: React.FC = () => { 
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>();
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();

  useEffect(() => {
      setRecipes(dinner_recipes);
      let mainRecipes = _.filter(dinner_recipes, (recipe: Recipe) => {
          return recipe.type === "main";
      });
      setMainRecipes(mainRecipes);
      setCurrentRecipe(mainRecipes[0]);
  }, []);

  const handleClick = (rcp: Recipe) => {
    setCurrentRecipe(rcp);
  }

  return (
    <Fragment>
      <Container>
      <Row>
        <Col>
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
        </Col>
        <Col>
          <RecipeComp recipe={currentRecipe} />
        </Col>
      </Row>
      </Container>
    </Fragment>
  )
  
}

export default HomePage
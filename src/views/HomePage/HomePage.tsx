import React, { useEffect, useState, Fragment } from "react"
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

interface recipe {
  id: number,
  type: string,
  recipe: string,
  title: string,
  most_similar: [number],
  ratings: number,
  stars: number,
  image: string,
  ingredients: [string],
  directions: [string]
}

const HomePage: React.FC = () => { 
  const [temp, setTemp] = useState("");
  const [recipes, setRecipes] = useState<recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<recipe[]>();
  const [currentRecipe, setCurrentRecipe] = useState<recipe>();

  useEffect(() => {
      setRecipes(dinner_recipes);
      let mainRecipes = _.filter(dinner_recipes, (recipe: recipe) => {
          return recipe.type === "main";
      });
      setMainRecipes(mainRecipes);
      setCurrentRecipe(mainRecipes[0]);
  }, []);

  useEffect(() => {     
    setTemp("test");
  }, [recipes])

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
            <CardBody>
              <RecipeList mainRecipes={mainRecipes} />
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
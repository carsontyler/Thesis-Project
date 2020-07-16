import React, { useEffect, useState, Fragment } from "react"
import api from '../../api'
import {Col, Row, Card, CardHeader, CardTitle, CardBody} from "reactstrap"
import _ from 'lodash'
import "./homepage.css"
import { RecipeList } from "../../components/RecipeList"
import { RecipeComp } from "../../components/RecipeComp"

interface recipe {
  id: number,
  type: string,
  recipe: string,
  title: string,
  most_similar: [number],
  ratings: number,
  stars: number,
  image: string,
  ingredients: string,
  directions: string
}

const HomePage: React.FC = () => {
  const [temp, setTemp] = useState("");
  const [recipes, setRecipes] = useState<recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<recipe[]>();

  useEffect(() => {
    api.get('getdata/dinner_recipes').then((data) => {
      const json = JSON.parse(data.data.fileData);
      setRecipes(json);
      let temp = _.filter(json, (recipe: recipe) => {
          console.log(recipe.type)
          return recipe.type === "main";
      });
      setMainRecipes(temp);

      console.log(mainRecipes);
  })}, []);

  useEffect(() => {    
    setTemp("test");
  }, [recipes])

  return (
    <Fragment>
      <Row className="text-center justify-content-center">
        <Col lg="4">
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
      </Row>

      <RecipeComp recipe={ mainRecipes ? mainRecipes[0] : null
      } />

    </Fragment>
  )
  
}

export default HomePage
import React from "react";
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
import StarRatingComponent from "react-star-rating-component";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";

interface MainPageProps {
  mainRecipes: Recipe[];
  currentRecipe: Recipe;
  handleClick: any;
  selectRecipeClick: any;
  scenario: string;
}

export const MainPageComp: React.FC<MainPageProps> = (props) => {
  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <div style={{padding: '1em'}}>
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h2">
                  <i className="tim-icons icon-bell-55 text-info" /> Recipe
                  Recommender
                </CardTitle>
              </CardHeader>
              <CardBody>
                {props.mainRecipes ? (
                  <div>
                    <div
                      id="recipe1"
                      onClick={() => props.handleClick(props.mainRecipes[0])}
                    >
                      <span>1. {props.mainRecipes[0].title}</span>
                    </div>
                    <div
                      id="recipe2"
                      onClick={() => props.handleClick(props.mainRecipes[1])}
                    >
                      <span>2. {props.mainRecipes[1].title}</span>
                    </div>
                    <div
                      id="recipe3"
                      onClick={() => props.handleClick(props.mainRecipes[2])}
                    >
                      <span>3. {props.mainRecipes[2].title}</span>
                    </div>
                    <div
                      id="recipe4"
                      onClick={() => props.handleClick(props.mainRecipes[3])}
                    >
                      <span>4. {props.mainRecipes[3].title}</span>
                    </div>
                    <div
                      id="recipe5"
                      onClick={() => props.handleClick(props.mainRecipes[4])}
                    >
                      <span>5. {props.mainRecipes[4].title}</span>
                    </div>
                  </div>
                ) : (
                  <div>No Recipes Found</div>
                )}
              </CardBody>
            </Card>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1, flexDirection: "column", marginTop: '1em' }}>
                <Button
                  onPress={props.selectRecipeClick}
                  title="Choose Recipe"
                  color="#4ECCA3"
                />
              </View>
              <View style={{ flex: 4, flexDirection: "column" }}/>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }} >
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h2">
                <i className="tim-icons icon-bell-55 text-info" /> Scenario
              </CardTitle>
            </CardHeader>
            <CardBody>
              <p>{props.scenario}</p>
            </CardBody>
          </Card>
          
          </View>
          </div>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <div className="main_div">
            <RecipeComp recipe={props.currentRecipe} />
          </div>
        </View>
      </View>
    </View>
  );
};

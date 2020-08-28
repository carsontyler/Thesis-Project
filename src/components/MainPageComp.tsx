import React from "react";
import { View, Button } from "react-native";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap";
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
          <div style={{ padding: '1em' }}>
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
                      1. <span className="recipe-item">{props.mainRecipes[0].title}</span>
                    </div>
                    <div
                      id="recipe2"
                      onClick={() => props.handleClick(props.mainRecipes[1])}
                    >
                      2. <span className="recipe-item">{props.mainRecipes[1].title}</span>
                    </div>
                    <div
                      id="recipe3"
                      onClick={() => props.handleClick(props.mainRecipes[2])}
                    >
                      3. <span className="recipe-item">{props.mainRecipes[2].title}</span>
                    </div>
                    <div
                      id="recipe4"
                      onClick={() => props.handleClick(props.mainRecipes[3])}
                    >
                      4. <span className="recipe-item">{props.mainRecipes[3].title}</span>
                    </div>
                    <div
                      id="recipe5"
                      onClick={() => props.handleClick(props.mainRecipes[4])}
                    >
                      5. <span className="recipe-item">{props.mainRecipes[4].title}</span>
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
              <View style={{ flex: 4, flexDirection: "column" }} />
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
        <View style={{ flex: 1, flexDirection: "column", alignItems: 'center' }}>
          <div className="recipe_div">
            <RecipeComp recipe={props.currentRecipe} />
          </div>
        </View>
      </View>
    </View>
  );
};

import React from "react";
import { View, Button } from "react-native";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";
import { SurveyComp } from "./SurveyComp";

interface SurveyPageProps {
  similarRecipes: Recipe[];
  allRecipes: Recipe[];
  tempCurrentRecipe: Recipe;
  currentRecipe: Recipe;
  handleClick: any;
  submitSurvey: any;
  groupdId: number;
}

export const SurveyPageComp: React.FC<SurveyPageProps> = (props) => {
  return (
    <View>
      <div>
        <View style={{ flex: 1, flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 3, flexDirection: "row" }}>
              <div className="recipe_div">
                <RecipeComp recipe={props.tempCurrentRecipe} />
              </div>
            </View>
            <View style={{ flex: 1, flexDirection: "row", padding: '10px' }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe1"
                  onClick={() => props.handleClick(props.similarRecipes[0])}
                >
                  <span>1. {props.similarRecipes[0].title}</span>
                </div>
                <div
                  id="recipe2"
                  onClick={() => props.handleClick(props.similarRecipes[1])}
                >
                  <span>2. {props.similarRecipes[1].title}</span>
                </div>
                <div
                  id="recipe3"
                  onClick={() => props.handleClick(props.similarRecipes[2])}
                >
                  <span>3. {props.similarRecipes[2].title}</span>
                </div>
                <div
                  id="recipe4"
                  onClick={() => props.handleClick(props.similarRecipes[3])}
                >
                  <span>4. {props.similarRecipes[3].title}</span>
                </div>
                <div
                  id="recipe5"
                  onClick={() => props.handleClick(props.similarRecipes[4])}
                >
                  <span>5. {props.similarRecipes[4].title}</span>
                </div>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe6"
                  onClick={() => props.handleClick(props.similarRecipes[5])}
                >
                  <span>6. {props.similarRecipes[5].title}</span>
                </div>
                <div
                  id="recipe7"
                  onClick={() => props.handleClick(props.similarRecipes[6])}
                >
                  <span>7. {props.similarRecipes[6].title}</span>
                </div>
                <div
                  id="recipe8"
                  onClick={() => props.handleClick(props.similarRecipes[7])}
                >
                  <span>8. {props.similarRecipes[7].title}</span>
                </div>
                <div
                  id="recipe9"
                  onClick={() => props.handleClick(props.similarRecipes[8])}
                >
                  <span>9. {props.similarRecipes[8].title}</span>
                </div>
                <div
                  id="recipe10"
                  onClick={() => props.handleClick(props.similarRecipes[9])}
                >
                  <span>10. {props.similarRecipes[9].title}</span>
                </div>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <div className="main_div">
              <SurveyComp
                submitSurvey={props.submitSurvey}
                recipe={props.currentRecipe}
                similarRecipes={props.allRecipes}
                groupId={props.groupdId}
              />
            </div>
          </View>
        </View>
      </div>
    </View>
  );
};

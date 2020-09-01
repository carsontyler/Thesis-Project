import React from "react";
import { View } from "react-native";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";
import { SurveyComp } from "./SurveyComp";

interface SurveyPageProps {
  similarRecipes: Recipe[];
  certainRecipes: Recipe[];
  uncertainRecipes: Recipe[];
  allRecipes: Recipe[];
  tempCurrentRecipe: Recipe;
  currentRecipe: Recipe;
  handleClick: any;
  submitSurvey: any;
  groupdId: number;
  displayNum: number;
}

export const SurveyPageComp: React.FC<SurveyPageProps> = (props) => {
  let tempRecipes = props.certainRecipes;
  tempRecipes = tempRecipes.concat(props.uncertainRecipes);

  return (
    props.displayNum === 0 ? 
    <View>
      <div>
        <View style={{ flex: 1, flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', maxHeight: '66vh' }}>
              <div className="recipe_div">
                <RecipeComp recipe={props.tempCurrentRecipe} />
              </div>
            </View>
            <View style={{ flex: 1, flexDirection: "row", padding: '10px', alignSelf: 'center' }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe1"
                  onClick={() => props.handleClick(props.similarRecipes[0])}
                >
                  <span>1. <span className="recipe-item">{props.similarRecipes[0].title}</span></span>
                </div>
                <div
                  id="recipe2"
                  onClick={() => props.handleClick(props.similarRecipes[1])}
                >
                  <span>2. <span className="recipe-item">{props.similarRecipes[1].title}</span></span>
                </div>
                <div
                  id="recipe3"
                  onClick={() => props.handleClick(props.similarRecipes[2])}
                >
                  <span>3. <span className="recipe-item">{props.similarRecipes[2].title}</span></span>
                </div>
                <div
                  id="recipe4"
                  onClick={() => props.handleClick(props.similarRecipes[3])}
                >
                  <span>4. <span className="recipe-item">{props.similarRecipes[3].title}</span></span>
                </div>
                <div
                  id="recipe5"
                  onClick={() => props.handleClick(props.similarRecipes[4])}
                >
                  <span>5. <span className="recipe-item">{props.similarRecipes[4].title}</span></span>
                </div>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe6"
                  onClick={() => props.handleClick(props.similarRecipes[5])}
                >
                  <span>6. <span className="recipe-item">{props.similarRecipes[5].title}</span></span>
                </div>
                <div
                  id="recipe7"
                  onClick={() => props.handleClick(props.similarRecipes[6])}
                >
                  <span>7. <span className="recipe-item">{props.similarRecipes[6].title}</span></span>
                </div>
                <div
                  id="recipe8"
                  onClick={() => props.handleClick(props.similarRecipes[7])}
                >
                  <span>8. <span className="recipe-item">{props.similarRecipes[7].title}</span></span>
                </div>
                <div
                  id="recipe9"
                  onClick={() => props.handleClick(props.similarRecipes[8])}
                >
                  <span>9. <span className="recipe-item">{props.similarRecipes[8].title}</span></span>
                </div>
                <div
                  id="recipe10"
                  onClick={() => props.handleClick(props.similarRecipes[9])}
                >
                  <span>10. <span className="recipe-item">{props.similarRecipes[9].title}</span></span>
                </div>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <div className="main_div">
              <SurveyComp
                submitSurvey={props.submitSurvey}
                recipe={props.currentRecipe}
                similarRecipes={props.similarRecipes}
                groupId={props.groupdId}
                displayNum={props.displayNum}
              />
            </div>
          </View>
        </View>
      </div>
    </View>
    : props.displayNum === 1 ? 
    (<View>
      <div>
        <View style={{ flex: 1, flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', maxHeight: '66vh' }}>
              <div className="recipe_div">
                <RecipeComp recipe={props.tempCurrentRecipe} />
              </div>
            </View>
            <View style={{ flex: 1, flexDirection: "row", padding: '10px', alignSelf: 'center' }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe1"
                  onClick={() => props.handleClick(props.certainRecipes[0])}
                >
                  <span>1. <span className="recipe-item">{props.certainRecipes[0].title}</span></span>
                </div>
                <div
                  id="recipe2"
                  onClick={() => props.handleClick(props.certainRecipes[1])}
                >
                  <span>2. <span className="recipe-item">{props.certainRecipes[1].title}</span></span>
                </div>
                <div
                  id="recipe3"
                  onClick={() => props.handleClick(props.certainRecipes[2])}
                >
                  <span>3. <span className="recipe-item">{props.certainRecipes[2].title}</span></span>
                </div>
                <div
                  id="recipe4"
                  onClick={() => props.handleClick(props.certainRecipes[3])}
                >
                  <span>4. <span className="recipe-item">{props.certainRecipes[3].title}</span></span>
                </div>
                <div
                  id="recipe5"
                  onClick={() => props.handleClick(props.certainRecipes[4])}
                >
                  <span>5. <span className="recipe-item">{props.certainRecipes[4].title}</span></span>
                </div>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe6"
                  onClick={() => props.handleClick(props.uncertainRecipes[0])}
                >
                  <span>6. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[0].title}</span></span>
                </div>
                <div
                  id="recipe7"
                  onClick={() => props.handleClick(props.uncertainRecipes[1])}
                >
                  <span>7. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[1].title}</span></span>
                </div>
                <div
                  id="recipe8"
                  onClick={() => props.handleClick(props.uncertainRecipes[2])}
                >
                  <span>8. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[2].title}</span></span>
                </div>
                <div
                  id="recipe9"
                  onClick={() => props.handleClick(props.uncertainRecipes[3])}
                >
                  <span>9. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[3].title}</span></span>
                </div>
                <div
                  id="recipe10"
                  onClick={() => props.handleClick(props.uncertainRecipes[4])}
                >
                  <span>10. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[4].title}</span></span>
                </div>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <div className="main_div">
              <SurveyComp
                submitSurvey={props.submitSurvey}
                recipe={props.currentRecipe}
                similarRecipes={tempRecipes}
                groupId={props.groupdId}
                displayNum={props.displayNum}
              />
            </div>
          </View>
        </View>
      </div>
    </View>)
    : props.displayNum === 2 ? 
    (<View>
      <div>
        <View style={{ flex: 1, flexDirection: "row"}}>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 2, flexDirection: "row", justifyContent: 'center', maxHeight: '66vh' }}>
              <div className="recipe_div">
                <RecipeComp recipe={props.tempCurrentRecipe} />
              </div>
            </View>
            <View style={{ flex: 1, flexDirection: "row", padding: '10px', alignSelf: 'center' }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div
                  id="recipe1"
                  onClick={() => props.handleClick(props.uncertainRecipes[0])}
                >
                  <span>1. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[0].title}</span></span>
                </div>
                <div
                  id="recipe2"
                  onClick={() => props.handleClick(props.uncertainRecipes[1])}
                >
                  <span>2. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[1].title}</span></span>
                </div>
                <div
                  id="recipe3"
                  onClick={() => props.handleClick(props.uncertainRecipes[2])}
                >
                  <span>3. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[2].title}</span></span>
                </div>
                <div
                  id="recipe4"
                  onClick={() => props.handleClick(props.uncertainRecipes[3])}
                >
                  <span>4. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[3].title}</span></span>
                </div>
                <div
                  id="recipe5"
                  onClick={() => props.handleClick(props.uncertainRecipes[4])}
                >
                  <span>5. <span className="recipe-item" style={{color: "#ffdd00"}}>{props.uncertainRecipes[4].title}</span></span>
                </div>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <div className="main_div">
              <SurveyComp
                submitSurvey={props.submitSurvey}
                recipe={props.currentRecipe}
                similarRecipes={props.uncertainRecipes}
                groupId={props.groupdId}
                displayNum={props.displayNum}
              />
            </div>
          </View>
        </View>
      </div>
    </View>)
    : 
    (<div>Oops, something went wrong. Please contact Carson at 385.244.6611</div>)
  );
};

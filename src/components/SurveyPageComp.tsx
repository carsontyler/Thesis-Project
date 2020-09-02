import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";
import { SurveyComp } from "./SurveyComp";
import { DirectionsComp } from "./DirectionsComp";
import { useModal } from "./useModal";


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
  const [show, setShow] = useState(false);
  const { openModal, closeModal, Modal } = useModal();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  let tempRecipes = props.certainRecipes;
  tempRecipes = tempRecipes.concat(props.uncertainRecipes);


  useEffect(() => {

  }, []);

  useEffect(() => {
    let i = 0;
  }, [show]);

  return (
    props.displayNum === 0 ?
      <View>
        <Button onPress={openModal}
          color="#4ECCA3"
          title="Show Directions" />
        <Modal style={{ marginTop: '2em' }}>
          <DirectionsComp />
          <p>
            <Button onPress={closeModal}
              color="#4ECCA3"
              title="Close Directions" />
          </p>
        </Modal>
        <div>
          <View style={{ flexDirection: "row" }}>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flexDirection: "row", alignSelf: 'center' }} >
                <h2 style={{ color: 'rgba(78, 204, 163, 1)' }}>Recommended Recipes</h2>
              </View>
              <View style={{ flexDirection: "row", padding: '10px', alignSelf: 'center' }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <div
                    id="recipe1"
                    onClick={() => props.handleClick(props.similarRecipes[0])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[0] && (
                      <span>1. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[0].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[0] && (
                      <span>1. <span className="recipe-item">{props.similarRecipes[0].title}</span></span>
                    )}
                  </div>

                  <div
                    id="recipe2"
                    onClick={() => props.handleClick(props.similarRecipes[1])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[1] && (
                      <span>2. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[1].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[1] && (
                      <span>2. <span className="recipe-item">{props.similarRecipes[1].title}</span></span>
                    )}
                  </div>

                  <div
                    id="recipe3"
                    onClick={() => props.handleClick(props.similarRecipes[2])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[2] && (
                      <span>3. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[2].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[2] && (
                      <span>3. <span className="recipe-item">{props.similarRecipes[2].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe4"
                    onClick={() => props.handleClick(props.similarRecipes[3])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[3] && (
                      <span>4. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[3].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[3] && (
                      <span>4. <span className="recipe-item">{props.similarRecipes[3].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe5"
                    onClick={() => props.handleClick(props.similarRecipes[4])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[4] && (
                      <span>5. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[4].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[4] && (
                      <span>5. <span className="recipe-item">{props.similarRecipes[4].title}</span></span>
                    )}
                  </div>
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <div
                    id="recipe6"
                    onClick={() => props.handleClick(props.similarRecipes[5])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[5] && (
                      <span>6. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[5].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[5] && (
                      <span>6. <span className="recipe-item">{props.similarRecipes[5].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe7"
                    onClick={() => props.handleClick(props.similarRecipes[6])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[6] && (
                      <span>7. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[6].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[6] && (
                      <span>7. <span className="recipe-item">{props.similarRecipes[6].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe8"
                    onClick={() => props.handleClick(props.similarRecipes[7])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[7] && (
                      <span>8. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[7].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[7] && (
                      <span>8. <span className="recipe-item">{props.similarRecipes[7].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe9"
                    onClick={() => props.handleClick(props.similarRecipes[8])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[8] && (
                      <span>9. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[8].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[8] && (
                      <span>9. <span className="recipe-item">{props.similarRecipes[8].title}</span></span>
                    )}
                  </div>
                  <div
                    id="recipe10"
                    onClick={() => props.handleClick(props.similarRecipes[9])}
                  >
                    {props.tempCurrentRecipe === props.similarRecipes[9] && (
                      <span>10. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.similarRecipes[9].title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.similarRecipes[9] && (
                      <span>10. <span className="recipe-item">{props.similarRecipes[9].title}</span></span>
                    )}
                  </div>
                </View>
              </View>
              <View style={{ flexDirection: "row", margin: '10px' }}>
                <div
                  id="currentRecipe"
                  onClick={() => props.handleClick(props.currentRecipe)}
                >
                  {props.tempCurrentRecipe === props.currentRecipe && (
                    <span>Selected Recipe: <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.currentRecipe.title}</span></span>
                  )}
                  {props.tempCurrentRecipe !== props.currentRecipe && (
                    <span>Selected Recipe: <span className="recipe-item">{props.currentRecipe.title}</span></span>
                  )}
                </div>
              </View>
              <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                <div className="recipe_div">
                  <RecipeComp recipe={props.tempCurrentRecipe} />
                </div>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <div>
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
      </View >
      : props.displayNum === 1 ?
        (<View>
          <Button onPress={openModal}
            color="#4ECCA3"
            title="Show Directions" />
          <Modal style={{ marginTop: '2em' }}>
            <DirectionsComp />
            <p>
              <Button onPress={closeModal}
                color="#4ECCA3"
                title="Close Directions" />
            </p>
          </Modal>
          <div>
            <View style={{ flexDirection: "row" }}>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", alignSelf: 'center' }} >
                  <h2 style={{ color: 'rgba(78, 204, 163, 1)' }}>Recommended Recipes</h2>
                </View>
                <View style={{ flexDirection: "row", padding: '10px', alignSelf: 'center' }}>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <div
                      id="recipe1"
                      onClick={() => props.handleClick(props.certainRecipes[0])}
                    >
                      {props.tempCurrentRecipe === props.certainRecipes[0] && (
                        <span>1. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.certainRecipes[0].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.certainRecipes[0] && (
                        <span>1. <span className="recipe-item">{props.certainRecipes[0].title}</span></span>
                      )}
                    </div>

                    <div
                      id="recipe2"
                      onClick={() => props.handleClick(props.certainRecipes[1])}
                    >
                      {props.tempCurrentRecipe === props.certainRecipes[1] && (
                        <span>2. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.certainRecipes[1].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.certainRecipes[1] && (
                        <span>2. <span className="recipe-item">{props.certainRecipes[1].title}</span></span>
                      )}
                    </div>

                    <div
                      id="recipe3"
                      onClick={() => props.handleClick(props.certainRecipes[2])}
                    >
                      {props.tempCurrentRecipe === props.certainRecipes[2] && (
                        <span>3. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.certainRecipes[2].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.certainRecipes[2] && (
                        <span>3. <span className="recipe-item">{props.certainRecipes[2].title}</span></span>
                      )}
                    </div>
                    <div
                      id="recipe4"
                      onClick={() => props.handleClick(props.certainRecipes[3])}
                    >
                      {props.tempCurrentRecipe === props.certainRecipes[3] && (
                        <span>4. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.certainRecipes[3].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.certainRecipes[3] && (
                        <span>4. <span className="recipe-item">{props.certainRecipes[3].title}</span></span>
                      )}
                    </div>
                    <div
                      id="recipe5"
                      onClick={() => props.handleClick(props.certainRecipes[4])}
                    >
                      {props.tempCurrentRecipe === props.certainRecipes[4] && (
                        <span>5. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.certainRecipes[4].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.certainRecipes[4] && (
                        <span>5. <span className="recipe-item">{props.certainRecipes[4].title}</span></span>
                      )}
                    </div>
                  </View>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <div
                      id="recipe1"
                      onClick={() => props.handleClick(props.uncertainRecipes[0])}
                    >
                      {props.tempCurrentRecipe === props.uncertainRecipes[0] && (
                        <span>6. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[0].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.uncertainRecipes[0] && (
                        <span>6. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[0].title}</span></span>
                      )}
                    </div>

                    <div
                      id="recipe2"
                      onClick={() => props.handleClick(props.uncertainRecipes[1])}
                    >
                      {props.tempCurrentRecipe === props.uncertainRecipes[1] && (
                        <span>7. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[1].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.uncertainRecipes[1] && (
                        <span>7. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[1].title}</span></span>
                      )}
                    </div>

                    <div
                      id="recipe3"
                      onClick={() => props.handleClick(props.uncertainRecipes[2])}
                    >
                      {props.tempCurrentRecipe === props.uncertainRecipes[2] && (
                        <span>8. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[2].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.uncertainRecipes[2] && (
                        <span>8. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[2].title}</span></span>
                      )}
                    </div>
                    <div
                      id="recipe4"
                      onClick={() => props.handleClick(props.uncertainRecipes[3])}
                    >
                      {props.tempCurrentRecipe === props.uncertainRecipes[3] && (
                        <span>9. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[3].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.uncertainRecipes[3] && (
                        <span>9. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[3].title}</span></span>
                      )}
                    </div>
                    <div
                      id="recipe5"
                      onClick={() => props.handleClick(props.uncertainRecipes[4])}
                    >
                      {props.tempCurrentRecipe === props.uncertainRecipes[4] && (
                        <span>10. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[4].title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.uncertainRecipes[4] && (
                        <span>10. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[4].title}</span></span>
                      )}
                    </div>
                  </View>
                </View>
                <View style={{ flexDirection: "row", margin: '10px' }}>
                  <div
                    id="currentRecipe"
                    onClick={() => props.handleClick(props.currentRecipe)}
                  >
                    {props.tempCurrentRecipe === props.currentRecipe && (
                      <span>Selected Recipe: <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.currentRecipe.title}</span></span>
                    )}
                    {props.tempCurrentRecipe !== props.currentRecipe && (
                      <span>Selected Recipe: <span className="recipe-item">{props.currentRecipe.title}</span></span>
                    )}
                  </div>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                  <div className="recipe_div">
                    <RecipeComp recipe={props.tempCurrentRecipe} />
                  </div>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <div>
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
            <Button onPress={openModal}
              color="#4ECCA3"
              title="Show Directions" />
            <Modal style={{ marginTop: '2em' }}>
              <DirectionsComp />
              <p>
                <Button onPress={closeModal}
                  color="#4ECCA3"
                  title="Close Directions" />
              </p>
            </Modal>
            <div>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", alignSelf: 'center' }} >
                    <h2 style={{ color: 'rgba(78, 204, 163, 1)' }}>Recommended Recipes</h2>
                  </View>
                  <View style={{ flexDirection: "row", padding: '10px' }}>
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <div
                        id="recipe1"
                        onClick={() => props.handleClick(props.uncertainRecipes[0])}
                      >
                        {props.tempCurrentRecipe === props.uncertainRecipes[0] && (
                          <span>1. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[0].title}</span></span>
                        )}
                        {props.tempCurrentRecipe !== props.uncertainRecipes[0] && (
                          <span>1. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[0].title}</span></span>
                        )}
                      </div>

                      <div
                        id="recipe2"
                        onClick={() => props.handleClick(props.uncertainRecipes[1])}
                      >
                        {props.tempCurrentRecipe === props.uncertainRecipes[1] && (
                          <span>2. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[1].title}</span></span>
                        )}
                        {props.tempCurrentRecipe !== props.uncertainRecipes[1] && (
                          <span>2. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[1].title}</span></span>
                        )}
                      </div>

                      <div
                        id="recipe3"
                        onClick={() => props.handleClick(props.uncertainRecipes[2])}
                      >
                        {props.tempCurrentRecipe === props.uncertainRecipes[2] && (
                          <span>3. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[2].title}</span></span>
                        )}
                        {props.tempCurrentRecipe !== props.uncertainRecipes[2] && (
                          <span>3. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[2].title}</span></span>
                        )}
                      </div>
                      <div
                        id="recipe4"
                        onClick={() => props.handleClick(props.uncertainRecipes[3])}
                      >
                        {props.tempCurrentRecipe === props.uncertainRecipes[3] && (
                          <span>4. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[3].title}</span></span>
                        )}
                        {props.tempCurrentRecipe !== props.uncertainRecipes[3] && (
                          <span>4. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[3].title}</span></span>
                        )}
                      </div>
                      <div
                        id="recipe5"
                        onClick={() => props.handleClick(props.uncertainRecipes[4])}
                      >
                        {props.tempCurrentRecipe === props.uncertainRecipes[4] && (
                          <span>5. <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.uncertainRecipes[4].title}</span></span>
                        )}
                        {props.tempCurrentRecipe !== props.uncertainRecipes[4] && (
                          <span>5. <span className="recipe-item" style={{ color: '#ffdd00' }}>{props.uncertainRecipes[4].title}</span></span>
                        )}
                      </div>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", margin: '10px' }}>
                    <div
                      id="currentRecipe"
                      onClick={() => props.handleClick(props.currentRecipe)}
                    >
                      {props.tempCurrentRecipe === props.currentRecipe && (
                        <span>Selected Recipe: <span className="recipe-item" style={{ color: 'rgba(78, 204, 163, 1)' }}>{props.currentRecipe.title}</span></span>
                      )}
                      {props.tempCurrentRecipe !== props.currentRecipe && (
                        <span>Selected Recipe: <span className="recipe-item">{props.currentRecipe.title}</span></span>
                      )}
                    </div>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <div className="recipe_div">
                      <RecipeComp recipe={props.tempCurrentRecipe} />
                    </div>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <div>
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

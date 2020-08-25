import React, { useState, useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import { CardHeader, Card, CardTitle, CardBody } from "reactstrap";
import { View, Button } from "react-native";
import "./../views/HomePage/homepage.css";
import { Recipe } from "../views/HomePage/HomePage";
import _ from "lodash";

export interface SurvepCompProps {
  submitSurvey: any;
  recipe: Recipe;
  similarRecipes: Recipe[];
  groupId: number;
}

export const SurveyComp: React.FC<SurvepCompProps> = (props) => {
  let [rating1, setRating1] = useState(3);
  let [rating2, setRating2] = useState(3);
  let [rating3, setRating3] = useState(3);
  let [rating4, setRating4] = useState(3);
  let [rating5, setRating5] = useState(3);
  let [rating6, setRating6] = useState(3);
  let [rating7, setRating7] = useState(3);
  let [rating8, setRating8] = useState(3);
  let [rating9, setRating9] = useState(3);
  let [rating10, setRating10] = useState(3);
  let [rating11, setRating11] = useState(3);
  let [rating12, setRating12] = useState(3);
  let [rating13, setRating13] = useState(3);
  let [rating14, setRating14] = useState(3);
  let [rating15, setRating15] = useState(3);
  let [rating16, setRating16] = useState(3);
  let [rating17, setRating17] = useState(3);
  let [rating18, setRating18] = useState(3);
  let [rating19, setRating19] = useState(3);
  let [rating20, setRating20] = useState(3);
  let [rating21, setRating21] = useState(3);
  let [rating22, setRating22] = useState(3);
  let [rating23, setRating23] = useState(3);
  let [rating24, setRating24] = useState(3);
  let [rating25, setRating25] = useState(3);
  let [rating26, setRating26] = useState(3);
  let [rating27, setRating27] = useState(3);
  let [json, setJson] = useState({});

  const onStarclick1 = (event: any) => {
    setRating1(event);
  };
  const onStarclick2 = (event: any) => {
    setRating2(event);
  };
  const onStarclick3 = (event: any) => {
    setRating3(event);
  };
  const onStarclick4 = (event: any) => {
    setRating4(event);
  };
  const onStarclick5 = (event: any) => {
    setRating5(event);
  };
  const onStarclick6 = (event: any) => {
    setRating6(event);
  };
  const onStarclick7 = (event: any) => {
    setRating7(event);
  };
  const onStarclick8 = (event: any) => {
    setRating8(event);
  };
  const onStarclick9 = (event: any) => {
    setRating9(event);
  };
  const onStarclick10 = (event: any) => {
    setRating10(event);
  };
  const onStarclick11 = (event: any) => {
    setRating11(event);
  };
  const onStarclick12 = (event: any) => {
    setRating12(event);
  };
  const onStarclick13 = (event: any) => {
    setRating13(event);
  };
  const onStarclick14 = (event: any) => {
    setRating14(event);
  };
  const onStarclick15 = (event: any) => {
    setRating15(event);
  };
  const onStarclick16 = (event: any) => {
    setRating16(event);
  };
  const onStarclick17 = (event: any) => {
    setRating17(event);
  };
  const onStarclick18 = (event: any) => {
    setRating18(event);
  };
  const onStarclick19 = (event: any) => {
    setRating19(event);
  };
  const onStarclick20 = (event: any) => {
    setRating20(event);
  };
  const onStarclick21 = (event: any) => {
    setRating21(event);
  };
  const onStarclick22 = (event: any) => {
    setRating22(event);
  };
  const onStarclick23 = (event: any) => {
    setRating23(event);
  };
  const onStarclick24 = (event: any) => {
    setRating24(event);
  };
  const onStarclick25 = (event: any) => {
    setRating25(event);
  };
  const onStarclick26 = (event: any) => {
    setRating26(event);
  };
  const onStarclick27 = (event: any) => {
    setRating27(event);
  };

  const validate = () => {
    setJsonState();
    props.submitSurvey(json);
  }

  const setJsonState = () => {
    setJson(
      {
        OverallRating: rating1,
        RelatedRating: rating2,
        Accuracy1: rating8,
        Accuracy2: rating9,
        Accuracy3: rating10,
        Accuracy4: rating11,
        Accuracy5: rating12, 
        Accuracy6: rating13,
        Accuracy7: rating14,
        Accuracy8: rating15,
        Accuracy9: rating16, 
        Accuracy10: rating17, 
        Unexpceted1: rating18,
        Unexpceted2: rating19, 
        Unexpceted3: rating20,
        Unexpceted4: rating21,
        Unexpceted5: rating22,
        Unexpceted6: rating23,
        Unexpceted7: rating24,
        Unexpceted8: rating25, 
        Unexpceted9: rating26,
        Unexpceted10: rating27,
        ReuseRating: rating5,
        TrustRating: rating6,
        SatisfactionRating: rating7,
        GroupID: props.groupId,
        RecipeID: props.recipe.id
      }
    );
  }

  useEffect(() => {}, []);
  
  useEffect(() => {
    setJsonState();
  }, [rating1, rating2, rating3, rating4, rating5, rating6, rating7, rating8, rating9, rating10, rating11, rating12, rating13, rating14, rating15, rating16, rating17, rating18, rating19, rating20, rating21, rating22, rating23, rating24, rating25, rating26, rating27]);

  return (
    <div style={{ overflow: "auto" }}>
      <Card className="card-chart">
        <CardHeader>
          <CardTitle tag="h3">
            <i className="tim-icons icon-bell-55 text-info" /> Survey
          </CardTitle>
        </CardHeader>
        <CardBody>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, what was your overall rating of the
                recommendation system?
              </span>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <StarRatingComponent
                name="rating1"
                value={rating1}
                onStarClick={onStarclick1}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, how accurate were the recommendations related
                to your selection?
              </span>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <StarRatingComponent
                name="rating2"
                value={rating2}
                onStarClick={onStarclick2}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, please rate each recommendation's accuracy to
                your intended selection:
              </span>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1, flexDirection: "column" }}></View>
              <View style={{ flex: 9, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[0].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating8"
                    value={rating8}
                    onStarClick={onStarclick8}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[1].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating9"
                    value={rating9}
                    onStarClick={onStarclick9}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[2].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating10"
                    value={rating10}
                    onStarClick={onStarclick10}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[3].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating11"
                    value={rating11}
                    onStarClick={onStarclick11}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[4].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating12"
                    value={rating12}
                    onStarClick={onStarclick12}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[5].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating13"
                    value={rating13}
                    onStarClick={onStarclick13}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[6].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating14"
                    value={rating14}
                    onStarClick={onStarclick14}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[7].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating15"
                    value={rating15}
                    onStarClick={onStarclick15}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[8].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating16"
                    value={rating16}
                    onStarClick={onStarclick16}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[9].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating17"
                    value={rating17}
                    onStarClick={onStarclick17}
                  />
                </View>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, how unexpected was each recommendation?
              </span>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ flex: 1, flexDirection: "column" }}></View>
              <View style={{ flex: 9, flexDirection: "column" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[0].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating18"
                    value={rating18}
                    onStarClick={onStarclick18}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[1].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating19"
                    value={rating19}
                    onStarClick={onStarclick19}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[2].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating20"
                    value={rating20}
                    onStarClick={onStarclick20}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[3].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating21"
                    value={rating21}
                    onStarClick={onStarclick21}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[4].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating22"
                    value={rating22}
                    onStarClick={onStarclick22}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[5].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating23"
                    value={rating23}
                    onStarClick={onStarclick23}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[6].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating24"
                    value={rating24}
                    onStarClick={onStarclick24}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[7].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating25"
                    value={rating25}
                    onStarClick={onStarclick25}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[8].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating26"
                    value={rating26}
                    onStarClick={onStarclick26}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <span>{props.similarRecipes[9].title}</span>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <StarRatingComponent
                    name="rating27"
                    value={rating27}
                    onStarClick={onStarclick27}
                  />
                </View>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, how likely are you to reuse this
                recommendation system for future recipe recommendations?
              </span>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <StarRatingComponent
                name="rating5"
                value={rating5}
                onStarClick={onStarclick5}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, how much do you trust this recommendation
                system to provide you with use, accurate results?
              </span>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <StarRatingComponent
                name="rating6"
                value={rating6}
                onStarClick={onStarclick6}
              />
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <span>
                On a scale of 1-5, what is your overall satisfaction with this
                recommendation system?
              </span>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <StarRatingComponent
                name="rating7"
                value={rating7}
                onStarClick={onStarclick7}
              />
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <Button
                // onPress={() => props.submitSurvey(json)}
                onPress={() => validate()}
                title="Submit Survey"
                color="#4ECCA3"
              />
            </View>
          </View>
        </CardBody>
      </Card>
    </div>
  );
};

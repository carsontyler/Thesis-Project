import React from "react";
import { View } from "react-native";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

export const DirectionsComp: React.FC = (
  props
) => {

  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row", backgroundColor: 'rgba(45, 51, 60, 1)' }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Card className="card-chart">
            <CardHeader>
              <CardTitle tag="h2" style={{ textAlign: 'center' }}>
                <i className="tim-icons icon-bell-55 text-info" /> Directions
            </CardTitle>
            </CardHeader>
            <CardBody>
              <View style={{ padding: '10px' }}>
                <p>
                  Thank you for participating in Carson's Thesis Project Study!
                </p>
                <p>
                  In this experiment, you will be selecting recipes based on a
                  given scenario and then rating recommendations based on your
                  selection. You can select recipes by clicking on them.
                </p>
                <p>
                  Eight (8) scenarios will be presented. You should select the
                  recipe you think is the best for that scenario. There is no right answer, simply
                  pick the one you think looks the best or would be the most
                  delicious or is the easiest to cook - whatever you decide.
                </p>
                <p>
                  Upon selecting a recipe, you will be presented with either five (5) or ten (10)
                  recommended recipes. Consider these recommendations and how they related to the selected recipe.
                  You can cycle through the recipes by clicking on them.
                </p>
                <p>
                  There are two (2) types of recipes: certain and <span style={{ color: '#ffdd00', whiteSpace: 'nowrap' }}>uncertain</span> recipes.
                <span style={{ color: '#ffdd00', whiteSpace: 'nowrap' }}> Uncertain</span> recipes will have a yellow font color. 
                Some scenarios will not have uncertain recipes. 
                </p>
                <p>
                  You will then fill out a survey related to the recommended
                  recipes and the recommendation system as a whole. You will rate
                  these from 1-5 by clicking on the stars.
                  </p>
                <p>
                  If you encounter any issues in this study, please contact Carson
                  at (385) 244-6611.
                <br />
                For the best experience, use a browser on your desktop instead of on a mobile device.
                <br />
                </p>
              </View>
            </CardBody>
          </Card>
        </View>
      </View>
    </View>
  );
};

import React, { useEffect } from "react";
import { View, Button } from "react-native";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

interface DisclosureAndDirectionsProps {
  directionsCheckboxChange: any;
  handleSubmit: any;
  directionsAccepted: boolean;
  refresh: any;
}

export const DisclosureAndDirectionsComp: React.FC<DisclosureAndDirectionsProps> = (
  props
) => {
  useEffect(() => {
    props.refresh();
  }, [props.directionsAccepted]);

  return (
    <View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Card className="card-chart" style={{ background: 'rgba(45, 51, 60, 1)' }}>
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
                  Six (6) scenarios will be presented. You should select the
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
                <span style={{ color: '#ffdd00', whiteSpace: 'nowrap' }}> Uncertain</span> recipes will have a yellow font color and will show up once you've initially selected a recipe. 
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
                <form>
                  <label>
                    <input
                      name="directionsCheckbox"
                      type="checkbox"
                      onChange={props.directionsCheckboxChange}
                    />
                  I understand these directions.
                  <br />
                  </label>
                  <View
                    style={{ flex: 1, flexDirection: "row", marginTop: "1em" }}
                  >
                    <View style={{ flex: 1, flexDirection: "column" }}>
                      <Button
                        onPress={props.handleSubmit}
                        title="Submit"
                        color="#4ECCA3"
                        disabled={!props.directionsAccepted}
                      />
                    </View>
                    <View style={{ flex: 5, flexDirection: "column" }} />
                  </View>
                </form>
              </View>
            </CardBody>
          </Card>
        </View>
      </View>
    </View>
  );
};

import React, { useEffect } from "react";
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
        <Card className="card-chart">
          <CardHeader>
            <CardTitle tag="h1">
              <i className="tim-icons icon-bell-55 text-info" /> Directions and
              Disclosure
            </CardTitle>
          </CardHeader>
          <CardBody>
            <View>
              <p>
                Thank you for participating in Carson's Thesis Project
                Study!
                <br />
                Please only continue if you have returned your Informed Consent form. 
              </p>
              <h2>Directions</h2>
              <p>
                In this experiment, you will be selecting recipes based on a
                given scenario and then rating recommendations based on your
                selection. You can select recipes by clicking on them.
                <br />
                <br />
                Five (5) scenarios will be presented. You should select the
                recipe you think is the best. There is no right answer, simply
                pick the one you think looks the best, would be the most
                delicious, is the easiest to cook - whatever.
                <br />
                <br />
                Upon selecting a recipe, you will be presented with ten (10)
                recommended recipes. You can cycle through the recipes by
                clicking on them.
                <br />
                <br />
                You will then fill out a survey related to the recommended
                recipes and the recommendation system as a whole. You will rate
                these from 1-5 by clicking on the stars.
                <br />
                If you encounter any issues in this study, please contact Carson at 385.244.6611.
              </p>
              <form>
                <label>
                  <input
                    name="directionsCheckbox"
                    type="checkbox"
                    onChange={props.directionsCheckboxChange}
                  />
                  I understand these directions and have returned the Informed Consent form
                  <br />
                </label>
                <View style={{ flex: 1, flexDirection: "row", marginTop: "1em" }}>
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
  );
};

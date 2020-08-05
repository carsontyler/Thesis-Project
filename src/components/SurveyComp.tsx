import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { CardHeader, Card, CardTitle, CardBody } from "reactstrap";
import { View, Button} from "react-native";
import "./../views/HomePage/homepage.css"

export interface SurvepCompProps {
  submitSurvey: any;
}

export const SurveyComp : React.FC<SurvepCompProps> = (props) => {
  return (
    <div>
      <Card className="card-chart">
        <CardHeader>
          <CardTitle tag="h3">
          <i className="tim-icons icon-bell-55 text-info" />{" "}
          Survey
          </CardTitle>
        </CardHeader>
        <CardBody>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, what was your overall rating of the recommendation system?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>          
              <span>On a scale of 1-5, how accurate were the recommendations related to your selection?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, please rate each recommendation's accuracy to your intended selection:</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>LIST EACH RECOMMENDATION HERE</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, how unexpected was each recommendation?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>LIST EACH RECOMMENDATION HERE</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, how likely are you to reuse this recommendation system for future recipe recommendations?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, how much do you trust this recommendation system to provide you with use, accurate results?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0}
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <span>On a scale of 1-5, what is your overall satisfaction with this recommendation system?</span>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <StarRatingComponent 
                name="rating"
                value={0} 
              />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Button onPress={props.submitSurvey} title="Select Recipe" color="#4ECCA3" /> 
            </View>
          </View>
        </CardBody>
      </Card>   
    </div> 
  )
}
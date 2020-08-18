import React, { useState } from "react";
import { View } from "react-native";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Col,
  CardImg,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import StarRatingComponent from "react-star-rating-component";


interface RecipeCompProps {
  recipe: any;
}

export const RecipeComp: React.FC<RecipeCompProps> = (props) => {
  const ingredients = props.recipe
    ? props.recipe.ingredients
        .substr(2, props.recipe.ingredients.length - 4)
        .split("', '")
    : null;
  const directions = props.recipe
    ? props.recipe.directions
        .substr(2, props.recipe.directions.length - 4)
        .split("', '")
    : null;

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab: any) => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
  return props.recipe ? (
    <div style={{background: "rgba(57,62,70,1)", textAlign: 'center'}}>
      <Card className="card-chart text-center">
        <CardHeader>
          <CardTitle tag="h2">
            <i className="tim-icons icon-bell-55 text-info" />{" "}
            {props.recipe.title}
          </CardTitle>
        </CardHeader>
        <CardImg variant="top" src={props.recipe.image} alt="No image available!"/>
        <CardBody>
          {/* <img src={props.recipe.image}></img> */}
          <StarRatingComponent
            name="rating"
            value={props.recipe.ratings}
            editing={false}
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className='tab1'
                onClick={() => { toggle('1'); }}
              >
                Ingredients
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className='tab2'
                onClick={() => { toggle('2'); }}
              >
                Directions
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                {ingredients.map(
                        (item: string, i: string | number | undefined) => {
                          return <li key={i}>{item}</li>;
                        }
                      )}
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                {directions.map(
                        (item: string, i: string | number | undefined) => {
                          return <li key={i}>{item}</li>;
                        }
                      )}
              </Row>
            </TabPane>
          </TabContent>
            {/* <View style={{ flex: 1, flexDirection: "column" }}>
              <Card>
                <CardHeader className="sub-header">
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    Ingredients
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <ul>
                    {ingredients.map(
                      (item: string, i: string | number | undefined) => {
                        return <li key={i}>{item}</li>;
                      }
                    )}
                  </ul>
                </CardBody>
              </Card>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Card>
                <CardHeader className="sub-header">
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-bell-55 text-info" />{" "}
                    Directions
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <ol>
                    {directions.map(
                      (item: string, i: string | number | undefined) => {
                        return <li key={i}>{item}</li>;
                      }
                    )}
                  </ol>
                </CardBody>
              </Card>
            </View>
           */}
          </View>
          <div></div>
        </CardBody>
      </Card>
    </div>
  ) : (
    <div></div>
  );
};

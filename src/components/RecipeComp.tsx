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
import "./../styles/recipeCompStyles.css";


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
    if (activeTab !== tab) setActiveTab(tab);
  }

  return props.recipe ? (
    <div style={{ background: "rgba(57,62,70,1)", textAlign: 'center' }}>
      <Card className="card-chart text-center" style={{ padding: '1px' }}>
        <CardHeader>
          <CardTitle tag="h2">
            <i className="tim-icons icon-bell-55 text-info" />{" "}
            {props.recipe.title}
          </CardTitle>
        </CardHeader>
        <CardImg variant="top" src={props.recipe.image} alt="No image available!" />
        <CardBody>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
            <StarRatingComponent
              name="rating"
              value={props.recipe.ratings}
              editing={false}
            />
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
            <Nav tabs style={{ justifyContent: 'center' }}>
              <NavItem style={{ borderColor: '#e9ecef #e9ecef #dee2e6' }}>
                <NavLink
                  className='tab1'
                  onClick={() => { toggle('1'); }}
                >
                  <p style={{ color: 'rgba(78, 204, 163, 1)', fontWeight: 'bold' }}>
                    Ingredients
                  </p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className='tab2'
                  onClick={() => { toggle('2'); }}
                >
                  <p style={{ color: 'rgba(78, 204, 163, 1)', fontWeight: 'bold' }}>
                    Directions
                </p>
                </NavLink>
              </NavItem>
            </Nav>
          </View>
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'center' }}>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    {ingredients.map(
                      (item: string, i: string | number | undefined) => {
                        return <li key={i}>{item}</li>;
                      }
                    )}
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <ol>
                      {directions.map(
                        (item: string, i: string | number | undefined) => {
                          return <li key={i}>{item}</li>;
                        }
                      )}
                    </ol>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </View>
        </CardBody> 
      </Card>
    </div >
  ) : (
      <div></div>
    );
};

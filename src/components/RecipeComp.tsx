import React from "react"
import {Card, CardHeader, CardTitle, CardBody, Col, CardImg, Row} from "reactstrap"
import StarRatingComponent from 'react-star-rating-component';

interface RecipeCompProps {
    recipe: any;
}

export const RecipeComp: React.FC<RecipeCompProps> = (props) => {
    const ingredients = props.recipe ? props.recipe.ingredients.substr(2, props.recipe.ingredients.length - 4).split("', '") : null;
    const directions = props.recipe ? props.recipe.directions.substr(2, props.recipe.directions.length - 4).split("', '") : null;
    
    return props.recipe ? (
        <div>
            <Card className="card-chart">
                <CardHeader>
                    <CardTitle tag="h3">
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {props.recipe.title}
                    </CardTitle>
                </CardHeader>
                <CardImg variant="top" src={props.recipe.ratings}/>
                <CardBody>
                    <Col>
                        {/* <img src={props.recipe.image}></img> */}
                        <StarRatingComponent 
                            name="rating"
                            value={props.recipe.ratings}
                            editing={false}
                        />
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader className="sub-header">
                                        <CardTitle tag="h3">
                                            <i className="tim-icons icon-bell-55 text-info" />{" "}
                                            Ingredients
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ul>
                                            {ingredients.map((item: string, i: string | number | undefined) => {
                                                return <li key={i}>{item}</li>
                                            })}
                                        </ul>
                                    </CardBody> 
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardHeader className="sub-header">
                                        <CardTitle tag="h3">
                                            <i className="tim-icons icon-bell-55 text-info" />{" "}
                                            Directions
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>
                                        <ol>
                                            {directions.map((item: string, i: string | number | undefined) => {
                                                return <li key={i}>{item}</li>
                                            })}
                                        </ol>
                                    </CardBody>
                                </Card>                        
                            </Col>
                        </Row>
                    </Col>
                    <div>

                    </div>
                </CardBody>
            </Card>
        </div>
    ) : (<div></div>);   
}
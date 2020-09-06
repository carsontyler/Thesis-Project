import React, { useState } from "react";
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
import ReactToolTip from "react-tooltip";
import { Recipe } from "../views/HomePage/HomePage";

interface RecipeCompProps {
    recipe: Recipe;
}

export const RecipeComp: React.FC<RecipeCompProps> = (props) => {
    const ingredients = props.recipe ? props.recipe.ingredients : [""];
    const directions = props.recipe ? props.recipe.directions : [""];

    const [activeTab, setActiveTab] = useState("1");

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return props.recipe ? (
        <div style={{ background: "rgba(57,62,70,1)", overflow: "hidden" }}>
            <Card
                className="card-chart text-center"
                style={{
                    padding: "1px",
                    justifyContent: "center",
                    paddingBottom: "20px",
                }}
            >
                <CardHeader>
                    <CardTitle tag="h2" style={{ textAlign: "center" }}>
                        <i className="tim-icons icon-bell-55 text-info" />{" "}
                        {props.recipe.title}
                    </CardTitle>
                </CardHeader>
                <div style={{ textAlign: "center" }}>
                    <CardImg
                        top
                        width="80%"
                        src={props.recipe.image}
                        alt="No image available!"
                        style={{ textAlign: "center" }}
                    />
                </div>
                <CardBody>
                    <div data-tip data-for="tooltip">
                        <StarRatingComponent
                            name="rating"
                            value={
                                props.recipe &&
                                props.recipe.stars &&
                                props.recipe.ratings &&
                                props.recipe.ratings !== 0
                                    ? props.recipe.stars
                                    : 0
                            }
                            editing={false}
                            starColor="rgba(78, 204, 163, 1)"
                            emptyStarColor="rgba(100, 100, 100, 1)"
                        />
                    </div>
                    <ReactToolTip id="tooltip" place="top" effect="solid">
                        <span>
                            {props.recipe &&
                            props.recipe.stars &&
                            props.recipe.ratings &&
                            props.recipe.ratings !== 0
                                ? props.recipe.stars.toFixed(2)
                                : 0}{" "}
                            stars
                        </span>
                    </ReactToolTip>
                    <span>{props.recipe.ratings} ratings</span>
                    <Nav tabs style={{ justifyContent: "center" }}>
                        <NavItem className="nav-item-one">
                            <NavLink
                                className="tab1"
                                onClick={() => {
                                    toggle("1");
                                }}
                            >
                                <p>
                                    <span className="recipe-tab">
                                        INGREDIENTS
                                    </span>
                                </p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="nav-item-one">
                            <NavLink
                                className="tab2"
                                onClick={() => {
                                    toggle("2");
                                }}
                            >
                                <p>
                                    <span className="recipe-tab">
                                        DIRECTIONS
                                    </span>
                                </p>
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    {ingredients.map(
                                        (
                                            item: string,
                                            i: string | number | undefined
                                        ) => {
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
                                            (
                                                item: string,
                                                i: string | number | undefined
                                            ) => {
                                                return <li key={i}>{item}</li>;
                                            }
                                        )}
                                    </ol>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </CardBody>
            </Card>
        </div>
    ) : (
        <div></div>
    );
};

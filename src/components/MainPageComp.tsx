import React from "react";
import { Button } from "react-native";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";
import { Grid } from "@material-ui/core";

interface MainPageProps {
    mainRecipes: Recipe[];
    currentRecipe: Recipe;
    handleClick: any;
    selectRecipeClick: any;
    scenario: string;
}

export const MainPageComp: React.FC<MainPageProps> = (props) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Card className="card-chart">
                        <CardHeader>
                            <CardTitle tag="h2">
                                <i className="tim-icons icon-bell-55 text-info" />{" "}
                                Recipe Recommender
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            {props.mainRecipes ? (
                                <div>
                                    {props.currentRecipe ===
                                        props.mainRecipes[0] && (
                                        <div
                                            id="recipe1"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[0]
                                                )
                                            }
                                        >
                                            1.{" "}
                                            <span
                                                className="recipe-item"
                                                style={{
                                                    color:
                                                        "rgba(78, 204, 163, 1)",
                                                }}
                                            >
                                                {props.mainRecipes[0].title}
                                            </span>
                                        </div>
                                    )}
                                    {props.currentRecipe !==
                                        props.mainRecipes[0] && (
                                        <div
                                            id="recipe1"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[0]
                                                )
                                            }
                                        >
                                            1.{" "}
                                            <span className="recipe-item">
                                                {props.mainRecipes[0].title}
                                            </span>
                                        </div>
                                    )}

                                    {props.currentRecipe ===
                                        props.mainRecipes[1] && (
                                        <div
                                            id="recipe2"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[1]
                                                )
                                            }
                                        >
                                            2.{" "}
                                            <span
                                                className="recipe-item"
                                                style={{
                                                    color:
                                                        "rgba(78, 204, 163, 1)",
                                                }}
                                            >
                                                {props.mainRecipes[1].title}
                                            </span>
                                        </div>
                                    )}
                                    {props.currentRecipe !==
                                        props.mainRecipes[1] && (
                                        <div
                                            id="recipe2"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[1]
                                                )
                                            }
                                        >
                                            2.{" "}
                                            <span className="recipe-item">
                                                {props.mainRecipes[1].title}
                                            </span>
                                        </div>
                                    )}

                                    {props.currentRecipe ===
                                        props.mainRecipes[2] && (
                                        <div
                                            id="recipe3"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[2]
                                                )
                                            }
                                        >
                                            3.{" "}
                                            <span
                                                className="recipe-item"
                                                style={{
                                                    color:
                                                        "rgba(78, 204, 163, 1)",
                                                }}
                                            >
                                                {props.mainRecipes[2].title}
                                            </span>
                                        </div>
                                    )}
                                    {props.currentRecipe !==
                                        props.mainRecipes[2] && (
                                        <div
                                            id="recipe3"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[2]
                                                )
                                            }
                                        >
                                            3.{" "}
                                            <span className="recipe-item">
                                                {props.mainRecipes[2].title}
                                            </span>
                                        </div>
                                    )}

                                    {props.currentRecipe ===
                                        props.mainRecipes[3] && (
                                        <div
                                            id="recipe4"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[3]
                                                )
                                            }
                                        >
                                            4.{" "}
                                            <span
                                                className="recipe-item"
                                                style={{
                                                    color:
                                                        "rgba(78, 204, 163, 1)",
                                                }}
                                            >
                                                {props.mainRecipes[3].title}
                                            </span>
                                        </div>
                                    )}
                                    {props.currentRecipe !==
                                        props.mainRecipes[3] && (
                                        <div
                                            id="recipe4"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[3]
                                                )
                                            }
                                        >
                                            4.{" "}
                                            <span className="recipe-item">
                                                {props.mainRecipes[3].title}
                                            </span>
                                        </div>
                                    )}

                                    {props.currentRecipe ===
                                        props.mainRecipes[4] && (
                                        <div
                                            id="recipe5"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[4]
                                                )
                                            }
                                        >
                                            5.{" "}
                                            <span
                                                className="recipe-item"
                                                style={{
                                                    color:
                                                        "rgba(78, 204, 163, 1)",
                                                }}
                                            >
                                                {props.mainRecipes[4].title}
                                            </span>
                                        </div>
                                    )}
                                    {props.currentRecipe !==
                                        props.mainRecipes[4] && (
                                        <div
                                            id="recipe5"
                                            onClick={() =>
                                                props.handleClick(
                                                    props.mainRecipes[4]
                                                )
                                            }
                                        >
                                            5.{" "}
                                            <span className="recipe-item">
                                                {props.mainRecipes[4].title}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    No recipes found, please call or text Carson
                                    at (385) 244-6611
                                </div>
                            )}
                        </CardBody>
                    </Card>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Button
                                onPress={props.selectRecipeClick}
                                title="Choose Recipe"
                                color="#4ECCA3"
                            />
                        </Grid>
                    </Grid>
                    <Card className="card-chart">
                        <CardHeader>
                            <CardTitle tag="h2">
                                <i className="tim-icons icon-bell-55 text-info" />{" "}
                                Scenario
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <p>{props.scenario}</p>
                        </CardBody>
                    </Card>
                    <Card className="card-chart">
                        <CardHeader>
                            <CardTitle tag="h2">
                                <i className="tim-icons icon-bell-55 text-info" />{" "}
                                Directions
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <p>
                                Click on each recipe to view its details. Then,
                                click the Ingredients or Directions tabs and
                                scroll through them. Click "Choose Recipe" once
                                you've selected a recipe.
                            </p>
                            <p>
                                Call or text Carson at (385) 244-6611 with any
                                questions or issues.
                            </p>
                        </CardBody>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <RecipeComp recipe={props.currentRecipe} />
                </Grid>
            </Grid>
        </>
    );
};

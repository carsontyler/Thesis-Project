import React, { useState, useEffect } from "react";
import { Button } from "react-native";
import { Recipe } from "../views/HomePage/HomePage";
import { RecipeComp } from "./RecipeComp";
import { SurveyComp } from "./SurveyComp";
import { DirectionsComp } from "./DirectionsComp";
import { useModal } from "./useModal";
import { Grid } from "@material-ui/core";

interface SurveyPageProps {
    similarRecipes: Recipe[];
    certainRecipes: Recipe[];
    uncertainRecipes: Recipe[];
    allRecipes: Recipe[];
    tempCurrentRecipe: Recipe;
    currentRecipe: Recipe;
    handleClick: any;
    submitSurvey: any;
    groupdId: number;
    displayNum: number;
}

export const SurveyPageComp: React.FC<SurveyPageProps> = (props) => {

    const [show,] = useState(false);
    const { openModal, closeModal, Modal } = useModal();

    // const handleClose = () => {
    //     setShow(false);
    // };
    // const handleShow = () => {
    //     setShow(true);
    // };

    useEffect(() => {
    }, [show]);

    return props.displayNum === 0 ? (
        <>
            <Button
                onPress={openModal}
                color="#4ECCA3"
                title="Show Full Directions"
            />
            <Modal style={{ marginTop: "2em" }}>
                <DirectionsComp />
                <p>
                    <Button
                        onPress={closeModal}
                        color="#4ECCA3"
                        title="Close Directions"
                    />
                </p>
            </Modal>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Directions
                    </h2>
                    <p>
                        Click through the recommended recipes and observe how
                        they are related to the recipe you selected.{" "}
                        <b>Don't worry about how they relate to the scenario</b>
                        , it only matters how they related to the selected
                        recipe. Then, fill out the survey.
                    </p>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Recommended Recipes
                    </h2>
                    <div
                        id="recipe1"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[0])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[0] && (
                            <span>
                                1.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[0].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[0] && (
                            <span>
                                1.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[0].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe2"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[1])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[1] && (
                            <span>
                                2.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[1].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[1] && (
                            <span>
                                2.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[1].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe3"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[2])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[2] && (
                            <span>
                                3.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[2].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[2] && (
                            <span>
                                3.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[2].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe4"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[3])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[3] && (
                            <span>
                                4.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[3].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[3] && (
                            <span>
                                4.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[3].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe5"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[4])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[4] && (
                            <span>
                                5.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[4].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[4] && (
                            <span>
                                5.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[4].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe6"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[5])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[5] && (
                            <span>
                                6.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[5].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[5] && (
                            <span>
                                6.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[5].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe7"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[6])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[6] && (
                            <span>
                                7.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[6].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[6] && (
                            <span>
                                7.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[6].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe8"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[7])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[7] && (
                            <span>
                                8.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[7].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[7] && (
                            <span>
                                8.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[7].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe9"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[8])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[8] && (
                            <span>
                                9.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[8].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[8] && (
                            <span>
                                9.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[8].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe10"
                        onClick={() =>
                            props.handleClick(props.similarRecipes[9])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.similarRecipes[9] && (
                            <span>
                                10.{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.similarRecipes[9].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.similarRecipes[9] && (
                            <span>
                                10.{" "}
                                <span className="recipe-item">
                                    {props.similarRecipes[9].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="currentRecipeDiv"
                        onClick={() => props.handleClick(props.currentRecipe)}
                    >
                        {props.tempCurrentRecipe === props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span
                                    className="recipe-item"
                                    style={{
                                        color: "rgba(78, 204, 163, 1)",
                                    }}
                                >
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !== props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span className="recipe-item">
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="recipe_div">
                        <RecipeComp recipe={props.tempCurrentRecipe} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SurveyComp
                        submitSurvey={props.submitSurvey}
                        recipe={props.currentRecipe}
                        similarRecipes={props.similarRecipes}
                        groupId={props.groupdId}
                        displayNum={props.displayNum}
                    />
                </Grid>
            </Grid>
        </>
    ) : props.displayNum === 1 ? (
        <>
            <Button
                onPress={openModal}
                color="#4ECCA3"
                title="Show Full Directions"
            />
            <Modal style={{ marginTop: "2em" }}>
                <DirectionsComp />
                <p>
                    <Button
                        onPress={closeModal}
                        color="#4ECCA3"
                        title="Close Directions"
                    />
                </p>
            </Modal>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Directions
                    </h2>
                    <p>
                        Click through the recommended recipes and observe how
                        they are related to the recipe you selected.{" "}
                        <b>Don't worry about how they relate to the scenario</b>
                        , it only matters how they related to the selected
                        recipe. Then, fill out the survey.
                    </p>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Recommended Recipes
                    </h2>
                    <div
                        id="recipe1"
                        onClick={() =>
                            props.handleClick(props.certainRecipes[0])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.certainRecipes[0] && (
                            <span>
                                1.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.certainRecipes[0].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.certainRecipes[0] && (
                            <span>
                                1.{" "}
                                <span className="recipe-item">
                                    {props.certainRecipes[0].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe2"
                        onClick={() =>
                            props.handleClick(props.certainRecipes[1])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.certainRecipes[1] && (
                            <span>
                                2.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.certainRecipes[1].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.certainRecipes[1] && (
                            <span>
                                2.{" "}
                                <span className="recipe-item">
                                    {props.certainRecipes[1].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe3"
                        onClick={() =>
                            props.handleClick(props.certainRecipes[2])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.certainRecipes[2] && (
                            <span>
                                3.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.certainRecipes[2].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.certainRecipes[2] && (
                            <span>
                                3.{" "}
                                <span className="recipe-item">
                                    {props.certainRecipes[2].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe4"
                        onClick={() =>
                            props.handleClick(props.certainRecipes[3])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.certainRecipes[3] && (
                            <span>
                                4.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.certainRecipes[3].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.certainRecipes[3] && (
                            <span>
                                4.{" "}
                                <span className="recipe-item">
                                    {props.certainRecipes[3].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe5"
                        onClick={() =>
                            props.handleClick(props.certainRecipes[4])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.certainRecipes[4] && (
                            <span>
                                5.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.certainRecipes[4].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.certainRecipes[4] && (
                            <span>
                                5.{" "}
                                <span className="recipe-item">
                                    {props.certainRecipes[4].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe1"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[0])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[0] && (
                            <span>
                                6.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[0].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[0] && (
                            <span>
                                6.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[0].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe2"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[1])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[1] && (
                            <span>
                                7.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[1].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[1] && (
                            <span>
                                7.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[1].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe3"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[2])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[2] && (
                            <span>
                                8.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[2].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[2] && (
                            <span>
                                8.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[2].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe4"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[3])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[3] && (
                            <span>
                                9.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[3].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[3] && (
                            <span>
                                9.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[3].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe5"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[4])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[4] && (
                            <span>
                                10.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[4].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[4] && (
                            <span>
                                10.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[4].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="currentRecipeDiv"
                        onClick={() => props.handleClick(props.currentRecipe)}
                    >
                        {props.tempCurrentRecipe === props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !== props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span className="recipe-item">
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="recipe_div">
                        <RecipeComp recipe={props.tempCurrentRecipe} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SurveyComp
                        submitSurvey={props.submitSurvey}
                        recipe={props.currentRecipe}
                        similarRecipes={props.similarRecipes}
                        groupId={props.groupdId}
                        displayNum={props.displayNum}
                    />
                </Grid>
            </Grid>
        </>
    ) : props.displayNum === 2 ? (
        <>
            <Button
                onPress={openModal}
                color="#4ECCA3"
                title="Show Full Directions"
            />
            <Modal style={{ marginTop: "2em" }}>
                <DirectionsComp />
                <p>
                    <Button
                        onPress={closeModal}
                        color="#4ECCA3"
                        title="Close Directions"
                    />
                </p>
            </Modal>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Directions
                    </h2>
                    <p>
                        Click through the recommended recipes and observe how
                        they are related to the recipe you selected.{" "}
                        <span style={{ fontWeight: "bold" }}>
                            Don't worry about how they relate to the scenario
                        </span>
                        , it only matters how they related to the selected
                        recipe. Then, fill out the survey.
                    </p>
                    <h2 style={{ color: "rgba(78, 204, 163, 1)" }}>
                        Recommended Recipes
                    </h2>
                    <div
                        id="recipe1"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[0])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[0] && (
                            <span>
                                1.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[0].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[0] && (
                            <span>
                                1.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[0].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe2"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[1])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[1] && (
                            <span>
                                2.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[1].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[1] && (
                            <span>
                                2.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[1].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="recipe3"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[2])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[2] && (
                            <span>
                                3.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[2].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[2] && (
                            <span>
                                3.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[2].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe4"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[3])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[3] && (
                            <span>
                                4.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[3].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[3] && (
                            <span>
                                4.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[3].title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div
                        id="recipe5"
                        onClick={() =>
                            props.handleClick(props.uncertainRecipes[4])
                        }
                    >
                        {props.tempCurrentRecipe ===
                            props.uncertainRecipes[4] && (
                            <span>
                                5.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.uncertainRecipes[4].title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !==
                            props.uncertainRecipes[4] && (
                            <span>
                                5.{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "#ffdd00" }}
                                >
                                    {props.uncertainRecipes[4].title}
                                </span>
                            </span>
                        )}
                    </div>

                    <div
                        id="currentRecipeDiv"
                        onClick={() => props.handleClick(props.currentRecipe)}
                    >
                        {props.tempCurrentRecipe === props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span
                                    className="recipe-item"
                                    style={{ color: "rgba(78, 204, 163, 1)" }}
                                >
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                        {props.tempCurrentRecipe !== props.currentRecipe && (
                            <span>
                                Selected Recipe:{" "}
                                <span className="recipe-item">
                                    {props.currentRecipe.title}
                                </span>
                            </span>
                        )}
                    </div>
                    <div className="recipe_div">
                        <RecipeComp recipe={props.tempCurrentRecipe} />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SurveyComp
                        submitSurvey={props.submitSurvey}
                        recipe={props.currentRecipe}
                        similarRecipes={props.similarRecipes}
                        groupId={props.groupdId}
                        displayNum={props.displayNum}
                    />
                </Grid>
            </Grid>
        </>
    ) : (
        <div>
            Oops, something went wrong. Please contact Carson at 385.244.6611
        </div>
    );
};

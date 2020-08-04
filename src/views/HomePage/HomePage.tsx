import React, { FC, useState } from "react"
import _ from 'lodash'
import "./homepage.css"
import { HomePageComp } from "../../components/HomePageComp"

interface Recipe {
  id: number,
  type: string, 
  recipe: string,
  title: string,
  most_similar: [number],
  ratings: number,
  stars: number,
  image: string,
  ingredients: [string],
  directions: [string],
}

interface IProps {
  onSubmit: (data: IHomePageData) => IHomePageResult;
}

export interface IHomePageData {
  currentRecipe: Recipe;
  groupId: number;
  allRecipes: Recipe[];
  mainRecipes: Recipe[];
  index: number;
}

export interface IHomePageResult {
  success: boolean;
  message: string;
}

export const HomePage: React.FC<IProps> = () => { 

  const [allRecipes, setRecipes] = useState<Recipe[]>();
  const [mainRecipes, setMainRecipes] = useState<Recipe[]>();
  let [currentRecipe, setCurrentRecipe] = useState<Recipe>();
  let [groupId, setGroupRecipe] = useState("");
  let [index, setIndex] = useState(0);
 

  let selectRecipeClick = () => {
    setIndex(index++);
  }

  return (
    <HomePageComp selectRecipeClick={selectRecipeClick}/>
  )
  
}

export default HomePage
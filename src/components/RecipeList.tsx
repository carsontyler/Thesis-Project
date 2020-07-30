import React from "react";

interface RecipeListProps {
    mainRecipes: any;
}

export const RecipeList : React.FC<RecipeListProps> = (props) => {
    return props.mainRecipes ? (
        <div>
          <div id="recipe1">
            <span>1. { props.mainRecipes[0].title }</span>
          </div>
          <div id="recipe2">
            <span>2. { props.mainRecipes[1].title }</span>
          </div>
          <div id="recipe3">
            <span>3. { props.mainRecipes[2].title }</span>
          </div>
          <div id="recipe4">
            <span>4. { props.mainRecipes[3].title }</span>
          </div>
          <div id="recipe5">
            <span>5. { props.mainRecipes[4].title }</span>
          </div>
        </div>    
      )
      : (<div>No Recipes Found</div>)
}
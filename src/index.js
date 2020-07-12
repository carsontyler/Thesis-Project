import React from "react";
import ReactDOM from "react-dom";
const fs = require('fs');
const papa = require('papaparse');

const file = fs.createReadStream('data/dinner_recipes.csv');
let dinner_recipes = [];

var count = 0; // cache the running count
papa.parse(file, {
    worker: true, // Don't bog down the main thread if its a big file
    step: function(result) {
        // do stuff with result
        dinner_recipes = result;
    },
    complete: function(results, file) {
        console.log('parsing complete read ', count, ' records.'); 
    }
});

//id,type,recipe,title,most_similar,ratings,stars,image,ingredients,directions
class Recipe {
  set Id(Id){
      this._Id=Id;
  }
  set Type(Type){
      this._Type=Type;
  }
  set Recipe(Recipe){
    this._Recipe=Recipe;
  }
  set Title(Title){
      this._Title=Title;
  }
  set Most_Similar(Most_Similar){
    this._Most_Similar=Most_Similar;
  }
  set Ratings(Ratings){
    this._Ratings=Ratings;
  }
  set Stars(Stars){
    this._Stars=Stars;
  }
  set Image(Image){
    this._Image=Image;
  }
  set Ingredients(Ingredients){
    this._Ingredients=Ingredients;
  }
  set Directions(Directions){
    this._Directions=Directions;
  }

  get Id(){
      return this._Id;
  }
  get Type(){
      return this._Type;
  }
  get Recipe(){
    return this._Recipe;
  }
  get Title(){
      return this._Title;
  }
  get Most_Similar(){
    return this._Most_Similar;
  }
  get Ratings(){
    return this._Ratings;
  }
  get Stars(){
    return this._Stars;
  }
  get Image(){
    return this._Image;
  }
  get Ingredients(){
    return this._Ingredients;
  }
  get Directions(){
    return this._Directions;
  }
}

// var data = csv.toObjects(csv);

// let filePath = "data/dinner_recipes.csv"

// fs.createReadStream('data.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     console.log(row);
//   })
//   .on('end', () => {
//     console.log('CSV file successfully processed');
//   });


// function fetchJSONFile(path, callback) {
//   var httpRequest = new XMLHttpRequest();
//   httpRequest.onreadystatechange = function() {
//       if (httpRequest.readyState === 4) {
//           if (httpRequest.status === 200) {
//               console.log(httpRequest.responseText);
//               var data = JSON.parse(httpRequest.responseText);
//               if (callback) callback(data);
//           }
//       }
//   };
//   httpRequest.open('GET', path);
//   httpRequest.send(); 
// }

// this requests the file and executes a callback with the parsed result once
//   it is available
// fetchJSONFile('pathToFile.json', function(data){
//   // do something with your data
//   dinner_recipes = data;
//   console.log(data);
// });

class DinnerRecipes extends React.Component {
  render() {
    return (    
      <div>
        <div id="recipe1">
          <span>1. {dinner_recipes[0]}</span>
        </div>
        <div id="recipe2">
          <span>2. dinner_recipes[1]</span>
        </div>
        <div id="recipe3">
          <span>3. dinner_recipes[2]</span>
        </div>
        <div id="recipe4">
          <span>4. dinner_recipes[3]</span>
        </div>
        <div id="recipe5">
          <span>5. dinner_recipes[4]</span>
        </div>
        <div id="recipe6">
          <span>6. dinner_recipes[5]</span>
        </div>
        <div id="recipe7">
          <span>7. dinner_recipes[6]</span>
        </div>
        <div id="recipe8">
          <span>8. dinner_recipes[7]</span>
        </div>
        <div id="recipe9">
          <span>9. dinner_recipes[8]</span>
        </div>
        <div id="recipe10">
          <span>10. dinner_recipes[9]</span>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<DinnerRecipes />, rootElement);

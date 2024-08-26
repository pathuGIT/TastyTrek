import axios from "axios";

export const searchFood = async (query) => {
      const response = await axios.get('https://api.apilayer.com/spoonacular/recipes/complexSearch', {
        headers: {
          'apikey': 'H90uF4udV8O2BS54XM6sJm6diavLjvGV'
        },
        params: {
          query: query,
          addRecipeInformation: true 
        }
    });

    return response;
}

export const searchFilter = async (query,filterAlco,minCalc,maxPort,maxCol) => {
  if(filterAlco == 0){
    filterAlco = null;
  }
  if(minCalc == 0){
    minCalc = null;
  }
  if(maxPort == 0){
    maxPort = null;
  }
  if(maxCol == 0){
    maxCol = null;
  }
  const response2 = await axios.get('https://api.apilayer.com/spoonacular/recipes/complexSearch', {
    headers: {
      'apikey': 'H90uF4udV8O2BS54XM6sJm6diavLjvGV'
    },
    params: {
      query: query,
      addRecipeInformation: true, 
      minAlcohol: filterAlco,
      minCalcium: minCalc,
      maxProtein: maxPort,
      maxCholesterol: maxCol
    }
});

return response2;
}
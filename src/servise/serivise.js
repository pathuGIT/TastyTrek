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

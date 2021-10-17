import '../component/food-list.js';
import '../component/search-food.js';
import DataMenu from '../data/data-menu.js';

const main = () => {
    const searchFood = document.querySelector('search-food');
    const foodList = document.querySelector("food-List");

    const onButtonSearchClicked = () => {
        DataMenu.searchClub(searchFood.value)
        .then(renderResult)
        .catch(fallbackResult);
    };

    const renderResult =  results => {
        foodList.foods = results;
    };

    const fallbackResult = message => {
        foodList.renderError(message);
    };

    searchFood.clickEvent = onButtonSearchClicked;
};

export default main;
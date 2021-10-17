import './food-item.js';

class FoodList extends HTMLElement{
    set foods(foods){
        this._foods = foods;
        this.render();
    }

    renderError(message){
        alert(message);
    }

    render(){
        this.innerHTML = '';
        this._foods.forEach((food) => {
            const foodItem = document.createElement('food-item');
            foodItem.food = food;
            this.appendChild(foodItem);
        })
    }
}

customElements.define('food-list', FoodList);
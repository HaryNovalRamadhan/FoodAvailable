class FoodItem extends HTMLElement{
    set food(food){
        this._food = food;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="service">
            <img src="${this._food.strMealThumb}" alt="">
            <h3>${this._food.strMeal}</h3>
        </div>
        `;
    }
}
customElements.define('food-item', FoodItem);
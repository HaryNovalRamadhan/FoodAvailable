class MainFood extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="subTitle">
                <h2 class="heading">FOOD AVAILABLE</h2>
                <p class="sub-heading">All You Can Eat</p>
            </div>
            <div class="food food-1">
                <h4 class="item">Vegetables</h4>
            </div>
            <div class="food food-2">
                <h4 class="item">Soup</h4>
            </div>
        `;
    }
}
customElements.define('main-food', MainFood);
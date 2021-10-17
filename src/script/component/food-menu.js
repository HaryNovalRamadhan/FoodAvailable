class FoodMenu extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div class="headerMenu">
                <h1>Search List</h1>
            </div>
            <food-list></food-list>
        `;
    }
}
customElements.define('food-menu', FoodMenu);
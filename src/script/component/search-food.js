class SearchFood extends HTMLElement{
    connectedCallback(){
        this.render
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.querySelector('#searchFood').value;
    }

    render(){
        this.innerHTML = `
        <input placeholder="Search Food" id="searchFood" type="search">
        <button id="buttonSearchFood" type="submit">Search</button>
        `;

        this.querySelector('#buttonSearchFood').addEventListener('click', this._clickEvent);
    }
}
customElements.define('search-food', SearchFood);
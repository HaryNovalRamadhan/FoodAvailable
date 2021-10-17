class AppBar extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <h1>Food Available</h1>
        <search-food></search-food>
        `;
    }
}

customElements.define('app-bar', AppBar);
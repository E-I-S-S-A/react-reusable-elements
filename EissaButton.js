class EissaButton extends HTMLElement {
    constructor() {
        super();

        const label = this.getAttribute("label")

        const shadow = this.attachShadow({ mode: "open" });

        const button = document.createElement("button");
        button.textContent = label + "k";
        const style = document.createElement("style");
        style.textContent = `
        button{
            background-color:red;
        }
        `

        shadow.appendChild(button)
        shadow.appendChild(style)
    }
}

customElements.define("eissa-button", EissaButton)
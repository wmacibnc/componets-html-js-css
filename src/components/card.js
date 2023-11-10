class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" })
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        componentRoot.appendChild(this.buildCardLeft());
        componentRoot.appendChild(this.buildCardRight());

        return componentRoot;
    }

    buildCardLeft() {
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "Por " + (this.getAttribute("autor") || " Anômino");

        const titulo = document.createElement("a");
        titulo.textContent = this.getAttribute("titulo") || "Sem título";
        titulo.href = this.getAttribute("url");

        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("conteudo") || "Sem contéudo";

        cardLeft.appendChild(autor);
        cardLeft.appendChild(titulo);
        cardLeft.appendChild(conteudo);
        return cardLeft;
    }

    buildCardRight() {
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("imagem") || "./assets/padrao.png";
        imagem.alt = "Foto indisponível";

        cardRight.appendChild(imagem);
        return cardRight;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `      
        .card{
            width: 90%;
            box-shadow: 9px 9px 27px 9px gray ;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration-line: none;
            font-weight: bold;
        }
        
        .card__left > p{
            color: rgb(151, 144, 144);
            margin-top: 15px;
        }
        
        .card__left span{
            font-weight: 400;
        }
        `
        return style;
    }
}

customElements.define('card-news', Card);
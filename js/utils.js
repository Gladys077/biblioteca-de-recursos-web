export class CartelError {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
    }

    displayError(errorMessage) {
        console.error(errorMessage);
        const errorMessageElement = document.createElement('div');
        errorMessageElement.textContent = '¡Ouch! Hubo un error al cargar la información. Intenta más tarde.';
        errorMessageElement.classList.add('errorMessage');
        this.container.appendChild(errorMessageElement);
    }
}

export class ColorearHtml {
    constructor() {
        this.etiquetas = 'yellowgreen';
        this.atributos = 'palevioletred';
        this.nombres = 'cyan';

        this.reemplazar();
    }

    reemplazar() {
        document.addEventListener('DOMContentLoaded', () => {
            const codigoHtml = document.querySelectorAll('.colorear');
            codigoHtml.forEach(c => this.colorear(c));

        });
    }

    colorear(codigoHtml) {
        codigoHtml.style.backgroundColor = "#333333";
        codigoHtml.style.padding = '1em';
        codigoHtml.style.color = 'gainsboro';

        const contenido = codigoHtml.innerHTML;

        const contenidoModificado = contenido
        .replace(/class/g, `<L style="color: ${this.atributos};">class</L>`)
        .replace(/id/g, `<L style="color: ${this.atributos};">id</L>`)

        .replace(/<header/g, `&lt;<L style="color: ${this.etiquetas};">header</L>`)
        .replace(/<\/header>/g, `&lt;<L style="color: ${this.etiquetas};">/header</L>&gt;<br>`)
        .replace(/<main/g, `&lt;<L style="color: ${this.etiquetas};">main</L>`)
        .replace(/<\/main>/g, `&lt;<L style="color: ${this.etiquetas};">/main</L>&gt;<br>`)
        .replace(/<footer/g, `&lt;<L style="color: ${this.etiquetas};">footer</L>`)
        .replace(/<\/footer>/g, `&lt;<L style="color: ${this.etiquetas};">/footer</L>&gt;<br>`)
        .replace(/<section/g, `&lt;<L style="color: ${this.etiquetas};">footer</L>`)
        .replace(/<\/section>/g, `&lt;<L style="color: ${this.etiquetas};">/footer</L>&gt;<br>`)
        .replace(/<h1/g, `&lt;<L style="color: ${this.etiquetas};">h1</L>`)
        .replace(/<\/h1>/g, `&lt;<L style="color: ${this.etiquetas};">/h1</L>&gt;<br>`)
        .replace(/<H1/g, `&lt;<L style="color: ${this.etiquetas};">H1</L>`)
        .replace(/<\/H1>/g, `&lt;<L style="color: ${this.etiquetas};">/H1</L>&gt;<br>`)
        .replace(/<h2/g, `&lt;<L style="color: ${this.etiquetas};">h2</L>`)
        .replace(/<\/h2>/g, `&lt;<L style="color: ${this.etiquetas};">/h2</L>&gt;<br>`)
        .replace(/<H2/g, `&lt;<L style="color: ${this.etiquetas};">H2</L>`)
        .replace(/<\/H2>/g, `&lt;<L style="color: ${this.etiquetas};">/H2</L>&gt;<br>`)
        .replace(/<H3/g, `&lt;<L style="color: ${this.etiquetas};">H3</L>`)
        .replace(/<\/H3>/g, `&lt;<L style="color: ${this.etiquetas};">/H3</L>&gt;<br>`)
        .replace(/<h3/g, `&lt;<L style="color: ${this.etiquetas};">h3</L>`)
        .replace(/<\/h3>/g, `&lt;<L style="color: ${this.etiquetas};">/h3</L>&gt;<br>`)
        .replace(/<h4/g, `&lt;<L style="color: ${this.etiquetas};">h4</L>`)
        .replace(/<\/h4>/g, `&lt;<L style="color: ${this.etiquetas};">/h4</L>&gt;<br>`)
        .replace(/<H4/g, `&lt;<L style="color: ${this.etiquetas};">H4</L>`)
        .replace(/<\/H4>/g, `&lt;<L style="color: ${this.etiquetas};">/H4</L>&gt;<br>`)
        .replace(/<H5/g, `&lt;<L style="color: ${this.etiquetas};">H5</L>`)
        .replace(/<\/H5>/g, `&lt;<L style="color: ${this.etiquetas};">/H5</L>&gt;<br>`)
        .replace(/<h5/g, `&lt;<L style="color: ${this.etiquetas};">h5</L>`)
        .replace(/<\/h5>/g, `&lt;<L style="color: ${this.etiquetas};">/h5</L>&gt;<br>`)
        .replace(/<h6/g, `&lt;<L style="color: ${this.etiquetas};">h6</L>`)
        .replace(/<\/h6>/g, `&lt;<L style="color: ${this.etiquetas};">/h6</L>&gt;<br>`)
        .replace(/<H6/g, `&lt;<L style="color: ${this.etiquetas};">H6</L>`)
        .replace(/<\/H6>/g, `&lt;<L style="color: ${this.etiquetas};">/H6</L>&gt;<br>`)
       
            ;

        codigoHtml.innerHTML = contenidoModificado;
    }

}

//Botón para ir al inicio desde cualquier sección
// Función para volver al inicio de la página
function volverArriba() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// Event listener para el botón de volver arriba
window.onload = function () {
    // Busca el botón por su ID
    var btnVolverArriba = document.getElementById("btnVolverArriba");

    // Agrega un event listener para el evento de clic
    btnVolverArriba.addEventListener("click", function () {
        volverArriba();
    });
};

// Función para controlar la visibilidad del botón de volver arriba
window.onscroll = function () {
    // Verifica la posición de desplazamiento
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Si se ha desplazado lo suficiente, muestra el botón
        document.getElementById("btnVolverArriba").style.display = "block";
    } else {
        // Si no se ha desplazado lo suficiente, oculta el botón
        document.getElementById("btnVolverArriba").style.display = "none";
    }
};
volverArriba();


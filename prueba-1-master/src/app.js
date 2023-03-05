function View (container) {
    return {
        init () {

            //ancho y altura del atomo
            const offsetW = container.offsetWidth;
            const offsetH = container.offsetHeigh;

            //posicion de como se deberia ver mi atomo a la mitad

            //obtengo solo una de las mitades de los anchos
            //osea son dos espacios a los lados solo tomo uno hago igual con la altura
            const atomX = (window.innerWidth - offsetW ) / 2;
            const atomY = (window.innerHeigh - offsetH) / 2;

            container.style.position = 'absolute' + 'px
            container.style.left = atomX + 'px'
            container.style.top = atomY + 'px'
        }
    }
}

const container = document.querySelector('js-cont-atom')
const x = View(container)
x.init();

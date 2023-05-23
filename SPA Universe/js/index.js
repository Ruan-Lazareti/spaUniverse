const home = document.querySelector('nav :nth-child(1)')
const universe = document.querySelector('nav :nth-child(2)')
const exploration = document.querySelector('nav :nth-child(3)')
const body = document.querySelector('body')

window.addEventListener('load', () => handle())

home.addEventListener('click', (event) => {
    route(event)
    body.style.backgroundImage = "url('./src/page-principal.png')"
}
)

universe.addEventListener('click', (event) => {
    route(event)
    body.style.backgroundImage = "url('./src/page-universe.png')";
}
)

exploration.addEventListener('click', (event) => {
    route(event)
    body.style.backgroundImage = "url('./src/page-exploration.png')";
}
)

const routes = {
    "/": "/pages/home.html",
    "/universe": "/pages/universe.html",
    "/exploration": "/pages/exploration.html",
}

function route(event) {
    event.preventDefault()

    /*Essa linha serve para 'pushar' no histórico do navegador o href do meu evento alvo*/
    window.history.pushState({}, '', event.target.href)

    handle()
}

function handle() {
    const { pathname } = window.location
    const route = routes[pathname] || routes['404']

    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector('.app').innerHTML = html})  
}
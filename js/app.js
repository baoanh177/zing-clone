import DefaultLayout from "./layouts/defaultLayout/index.js"

function App() {
    return (
        `<div class="wrapper">
            ${DefaultLayout()}
            <main class="main">

            </main>
        </div>`
    )
}

const root = document.querySelector('#root')
root.innerHTML = App()
import React from 'react'
import * as ReactDOMClient from 'react-dom/client';


// Использование React.createElement для создания элемента
// ReactDOM.render(React.createElement('input', {
//     placeholder: "Help text",
//     onClick: () => console.log("Clicked"),
//     onMouseEnter: () => console.log("Mouse Over")
// }), document.getElementById("app"));

// Использование JSX для создания элемента
const inputClick = () => console.log("Clicked");
const mouseOver = () => console.log("Mouse Over");

const helpText = "Help text";

class App extends React.Component {
    render() {
        return (
            <header>Шапка сайта</header>
        )
    }
}

class App extends React.Component {
    render() {
    return (<div className="name">
        <Header />
        <h1>{helpText}</h1>
        <input
            placeholder={helpText}
            onClick={inputClick}
            onMouseEnter={mouseOver}
        />
        <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
    </div>)
}}

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)

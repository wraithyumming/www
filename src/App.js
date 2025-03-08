import React from 'react'

class App extends React.Component {
    helpText = "Help text";
    render() {
        return (<div className="name">
            <Header title="Шапка сайта" />
            <h1>{this.helpText}</h1>
            <input
                placeholder={this.helpText}
                onClick={this.inputClick}
                onMouseEnter={this.mouseOver}
            />
            <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
        </div>)
    }
    inputClick() { console.log("Clicked") }
    mouseOver() { console.log("Mouse Over") }
}

export default App
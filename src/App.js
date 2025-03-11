import React from 'react'
import Header from './components/Header';
import Image from './components/Image';
import Logo from './img/34.jpg'

class App extends React.Component {
    helpText = "Help text";
    render() {
        return (<div className="name">
            <Header title="Шапка сайта" name="" />
            <h1>{this.helpText}</h1>
            <input
                placeholder={this.helpText}
                onClick={this.inputClick}
                onMouseEnter={this.mouseOver}
            />
            <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
            <Image image={Logo} alt="" />
            <img src={Logo} />
        </div>)
    }

    inputClick() { 
        this.helpText = "Changed"
        console.log("Clicked") 
    }
    mouseOver() { console.log("Mouse Over") }
}

export default App
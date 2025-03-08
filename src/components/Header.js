import React from 'react'
import Header from './components/Header'

class Header extends React.Component {
    render() {
        return (
            <header>{this.props.title}</header>
        )
    }
}

export default Header
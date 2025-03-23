import React, { use, useState } from 'react'

const Button = (props) => {
    const [click, setClick] = useState(0)
    
    return (
        <button onClick={()=>setClick=(click + 1)}> {props.text} </button>
    )

}

Button.defaultProps = {
    text: "Кнопка"
}

export default Button
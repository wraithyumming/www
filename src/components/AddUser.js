import React from 'react'

class AddUser extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='Имя' />
                <input placeholder='Фамилия' />
                <textarea placeholder='Биография' />
                <input placeholder='Возраст' />
                <label htmlForm="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" />
                <button type="button">Добавить</button>
            </form>
        )
    }
}

export default AddUser
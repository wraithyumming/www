import React from 'react';

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        };
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el} onSubmit={(e) => {
                e.preventDefault();
                this.props.onAdd({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy
                });
                this.myForm.reset();
                this.setState({
                    firstname: "",
                    lastname: "",
                    bio: "",
                    age: 1,
                    isHappy: false
                });
            }}>
                <input placeholder='Имя' onChange={(e) => this.setState({ firstname: e.target.value })} />
                <input placeholder='Фамилия' onChange={(e) => this.setState({ lastname: e.target.value })} />
                <textarea placeholder='Биография' onChange={(e) => this.setState({ bio: e.target.value })} />
                <input type="number" placeholder='Возраст' onChange={(e) => this.setState({ age: Number(e.target.value) })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="submit">Добавить</button>
            </form>
        );
    }
}

export default AddUser;

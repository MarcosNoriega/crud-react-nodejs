import React, { Component } from 'react'
import axios from 'axios';

export default class Users extends Component {

    state = {
        users: [],
        username: ''
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({
            users: res.data
        });
    }

    tomarUsername = (e) => {
        this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }

    saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/users/create', {username: this.state.username});
        this.setState({ username: '' });
        this.getUsers();
    }

    render() {
        return (
            <div className="row">
                <div className="col-5">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={this.saveUser}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" onChange={this.tomarUsername} value={this.state.username}></input>
                                </div>

                                <button type="submit" className="btn btn-primary">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>

               <div className="col-7">
                   <ul className="list-group">
                        {
                            this.state.users.map(user => (
                                <li className="list-group-item" key={user._id}>
                                    {user.username}
                                </li>
                            ))
                        }
                    </ul> 
               </div>
            </div>
        )
    }
}

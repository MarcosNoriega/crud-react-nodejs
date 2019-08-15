import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {

    state = {
        
        title: '',
        content: '',
        author: '',
        date: new Date(),
        users: [],
        editing: false

    }

    async componentDidMount() {
        if (this.props.match.params.id){
            const res = await axios.get(`http://localhost:4000/notes/show/${this.props.match.params.id}`);
            const note = res.data;
            this.setState({
                title: note.title,
                content: note.content,
                author: note.author,
                date: note.date,
                editing: true
            })
        }
        
        this.getUsers();
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/users');
        this.setState({
            users: res.data
        });
        console.log(this.state.users);
    }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.state);
    }


    saveNote = async (e) => {
        e.preventDefault();
        if (!this.state.editing) {
            await axios.post('http://localhost:4000/notes/create', {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            date: this.state.date
            });
        } else {
            await axios.put(`http://localhost:4000/notes/update/${this.props.match.params.id}`, {
                title: this.state.title,
                content: this.state.content,
                author: this.state.author,
                date: this.state.date
            });
        }

        
        
        this.setState({
            title: '',
            content: '',
            author: '',
            date: new Date(),
        });
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Crear Nota</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.saveNote}>
                                <div className="form-group">
                                    <label>Titulo</label>
                                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.onChangeInput}></input>
                                </div>
                                <div className="form-group">
                                    <label>Contenido</label>
                                    <textarea className="form-control" name="content" value={this.state.content} onChange={this.onChangeInput}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Autor</label>
                                    <select className="form-control" name="author" value={this.state.author} onChange={this.onChangeInput}>
                                        {
                                            this.state.users.map(user => (
                                                <option value={user.username} key={user._id}>{user.username}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Fecha</label>
                                    <input type="date" name="date" className="form-control" value={this.state.date} onChange={this.onChangeInput}></input>
                                </div>

                                <button type="submit" className="btn btn-primary d-flex ml-auto">Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

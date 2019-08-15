import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class NotesList extends Component {

    state = {
        notes: []
    }

    componentDidMount() {
       this.getNote();
    }

    getNote = async () => {
        const res = await axios.get('http://localhost:4000/notes');
        this.setState({
            notes: res.data
        })
        console.log(this.state.notes);
    }

    delete = async id => {
        await axios.delete(`http://localhost:4000/notes/delete/${id}`);
        this.getNote();
    }

    render() {
        return (
            <div className="card-columns">
                {
                    this.state.notes.map(note => (
                        <div className="card text-center" key={note._id}>
                            <div className="card-header d-flex justify-content-between">
                                <h5 className="card-title">{note.title}</h5>
                                <Link to={"/update/" + note._id} className="btn btn-outline-secondary">Editar</Link>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{note.content}</p>
                                <p className="card-text"><small className="text-muted">{note.date}</small></p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-danger d-flex ml-auto" onClick={() => this.delete(note._id)}>Delete</button>
                            </div>
                        </div> 
                    ))
                }   
            </div>
        )
    }
}

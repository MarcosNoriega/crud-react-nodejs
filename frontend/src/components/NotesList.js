import React, { Component } from 'react';
import axios from 'axios'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:4000/notes');
        this.state.notes = res.data;
        console.log(this.state.notes);
    }

    render() {
        return (
            <div className="card-columns">
                {
                    this.state.notes.map(note => (
                        <div className="card text-center" key={note._id}>
                            <div className="card-body">
                                <h5 className="card-title">{note.title}</h5>
                                <p className="card-text">{note.content}</p>
                                <p className="card-text"><small class="text-muted">{note.date}</small></p>
                            </div>
                        </div> 
                    ))
                }   
            </div>
        )
    }
}

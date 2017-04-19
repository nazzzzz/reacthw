import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      notes : []
    }
  }
 
  post = (e) => {
    let newNotes = this.state.notes.slice()
    newNotes.push({name: this.nameInput.value, value :this.postInput.value})

    console.log(this.nameInput.value)
    this.nameInput.value = ""
    this.postInput.value = ""
    this.setState({
      notes: newNotes
    })
  }
  render() {
    let notes = this.state.notes.map((note, index) => {
      return (
        <Note
          key={index}
          name={note.name}
          value={note.value}
        />
      )
    });
    return (
      <div className="App">
        <h1> you are visiting naz's corner </h1>

        <div id = "formCont">
          <input type="text" ref={(input) => { this.nameInput = input; }} placeholder="what's your name?"  />
          <input type="text" ref={(input) => { this.postInput = input; }} placeholder="leave a note"/>
          <button id = "submit" onClick={this.post}>Post</button>
        </div>

        <div id = "noteCont">
          <h2> notes left by others: </h2>
          {notes}
        </div>
      </div>
    );
  }
}

function Note(props){
  return (
    <div className="note">
      <p>{props.name} left a note saying: "{props.value}"</p>
    </div>
  )
}

export default App;

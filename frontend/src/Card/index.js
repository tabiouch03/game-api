import React, { Component } from 'react';
import '../App.css';



class Carte extends Component {
  state = {
    post: {}
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/game/')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ post: result })
      })
  }

  render() {
    const { post } = this.state 
    const postSTR = JSON.stringify(post)
    return (
      <div>
      {postSTR !== '{}' ?
      <div>
      {post.map((item, index) => (
        <div key={index}>
          <img className="cover" src={item.cover}></img>
          <p>{item.name}</p>
          <p>{item.prix}€</p>
          </div> 
      ))}
      </div>
      : null
    }
    </div>
    );
  }
}

export default Carte;

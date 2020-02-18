import React, { Component } from "react";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      //console.log(response)
      this.setState({
        posts: response.data.slice(Math.floor(Math.random()*10), 5)
      });
    });
  }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card blue-grey darken-1" key={post.id}>
            <div className="card-content white-text">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Post's yet</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
     {  /*  <p className="flow-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum maiores
          quisquam eius nemo assumenda quas neque tenetur, consectetur libero,
          placeat doloremque optio necessitatibus quos tempore. Aperiam ducimus
          fuga ipsa maxime?
        </p> */}
        {postList}
      </div>
    );
  }
}

export default Home;

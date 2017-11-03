import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Brian Eng",
      duration: "3 hrs",
      body: "Looking for the best tacos in the Chicagoland area. Any suggestions?",
      likes: 0,
      comments: [
        { name: "Ben Block", body: "Antique Taco" },
        { name: "Brian Eng", body: "Big Star" },
        { name: "Jeff Cohen", body: "Taco Bell" }
      ],
      newComment: ""
    }
  }

  handleCommentInputChanged(event) {
    this.setState({
      newComment: event.target.value
    });
  }

  handleCommentEnterKey(event) {
    if (event.key === "Enter") {
      let newCommentList = this.state.comments.slice();
      newCommentList.push({
        name: 'Brian Eng',
        body: this.state.newComment
      });
      this.setState({
        comments: newCommentList,
        newComment: ""
      });
    }
  }

  likeClicked() {
    let newNumberOfLikes = this.state.likes + 1;
    this.setState({
      likes: newNumberOfLikes
    });
  }

  render() {
    let comments = [];
    for (let i=0; i<this.state.comments.length; i++) {
      comments.push(
        <div className="comment" key={i}>
          <a href="javascript:;">{this.state.comments[i].name}</a>
          {this.state.comments[i].body}
        </div>
      );
    }

    return (
      <div className="App">
        <div className="post">
          <div className="header">
            <img className="photo" src="https://pbs.twimg.com/profile_images/2681741006/ad69ada3c1206686e38da1aabe47415d_400x400.jpeg" alt="Brian" />
            <div className="name-and-time">
              <h3><a href="javascript:;">{this.state.name}</a></h3>
              <h4>{this.state.duration}</h4>
            </div>
          </div>
          <div className="body">
            {this.state.body}
          </div>
          <div className="buttons">
            <a href="javascript:;" onClick={() => this.likeClicked()}><i className="fa fa-thumbs-up"></i> Like</a>
            <a href="javascript:;"><i className="fa fa-comment"></i> Comment</a>
          </div>
          <div className="likes">
            <span className="fa-stack">
              <i className="fa fa-circle fa-stack-2x"></i>
              <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
            </span>
            <span className="number-of-likes">{this.state.likes}</span>
          </div>
          <div className="comments">
            {comments}
            <input type="text" 
                   placeholder="Write a comment..." 
                   value={this.state.newComment} 
                   onChange={(event) => this.handleCommentInputChanged(event)}
                   onKeyPress={(event) => this.handleCommentEnterKey(event)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

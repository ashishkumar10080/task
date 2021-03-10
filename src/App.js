import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PostForm from './PostForm';
import ViewPost from './ViewPost';

class App extends Component {
  render() {
    return (
    <div className="App">
        <PostForm />
        <ViewPost />
    </div>
    );
    }
  }
export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Friends from '../components/Friends';
import getFriends from '../actions/friendActions'

class App extends Component {
  render() {
      return <Friends friends={this.props.friends} />;
  }

  componentDidMount() {
    this.props.getFriends();
  }
}

const mapStateToProps = ({friends}) => {
  return {
    friends
  }
}

const actions = {
  getFriends,
}

export default connect(mapStateToProps, actions)(App);

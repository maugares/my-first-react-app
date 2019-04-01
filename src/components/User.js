import React, { Component } from 'react'

export default class User extends Component{
  state = { present: false }

  render(){
    return <div>
      <p> User: <b>{this.props.name}</b></p>
      <p> {this.props.name} is {this.state.present ? 'present' : 'not present'}</p>
    </div>
  }
}
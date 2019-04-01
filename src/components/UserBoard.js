import React, { Component } from 'react'
import User from './User'

export default class UserBoard extends Component {
  render() {
    return <div>
      <h1>User Board</h1>
      <User name="Olivier" />
      <User name="Mauro" />
      <User name="Vivial" />
      <User name="Albert" />
    </div>
  }
}
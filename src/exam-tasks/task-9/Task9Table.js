import React, { Component } from 'react';
import classes from './Task9.module.css';

export default class Task9Table extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    if (!this.props.data) {
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <table className={classes.Table}>
        <tr>
          <th>User ID</th>
          <th>Todo ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        {this.props.data.filter(item => !item.completed).map((item, index) => {
          if (index >= 5) return null;
          return (
            <tr key={item.id}>
              <th>{item.userId}</th>
              <th>{item.id}</th>
              <th>{item.title}</th>
              <th>{item.completed ? 'Atlikta' : 'Neatlikta'}</th>
            </tr>
          )
        })}
      </table>
    );
  }
}

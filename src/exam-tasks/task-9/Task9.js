import React, { Component } from 'react';
import Task9Table from './Task9Table';
import classes from './Task9.module.css';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export default class Task9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch(URL).then(resp => resp.json()).then(data => this.setState({todos: data}));
    console.log('Mounted main component');
  }

  render() {
    return (
      <div className={classes.Task}>
        <Task9Table data={this.state.todos}/>
      </div>
    );
  }
}

/* Task 9
Task 9 viduje atvaizduokite 5 būtinus atlikti darbų iš čia: https://jsonplaceholder.typicode.com/todos

Pastaba: 
- atkreipkite dėmesį, kad abu komponetai yra class tipo, 
todėl būtina naudoti "Class components State and Lifecycle";
- būtini atlikti darbai turi būti atvaizuojami vienoje eilutėje 
ir turėti šia informacija: pavadinimas, atlikta/neatlika (yes/no)
*/

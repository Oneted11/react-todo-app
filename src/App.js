import React, { Component } from 'react';
import './App.css';
import TodoList from "./todolist.js"
class App extends Component {
constructor (props){
super (props);
this.state = {
  newItem : '',
  items : ['first','second']
};
}
onChange = (event) =>{
  this.setState({newItem:event.target.value});
}
onClick=(event)=>{
  event.preventDefault();
  this.setState({items:this.state.items.concat(this.state.newItem)});
}
render () {
  return (
    <div>
      <TodoList items={this.state.items}></TodoList>
      <input value = {this.state.newItem} onChange = {this.onChange.bind(this)}></input>
      <button onClick = {this.onClick.bind(this)}>+</button>
    </div>
    );
}
}


export default App;

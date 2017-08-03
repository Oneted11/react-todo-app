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
  if (this.state.newItem==='') {
  	console.log('blackspaces not allowed');
  }else{
  this.setState({items:this.state.items.concat(this.state.newItem)});
  this.setState({newItem:''});
 }
}
render () {
  return (
    
    <div className='TodoList'>
      <TodoList items={this.state.items}></TodoList>
      <form onSubmit ={this.onClick.bind(this)}>
          <input value = {this.state.newItem} onChange = {this.onChange.bind(this)}></input>
				
				          <button onClick = {this.onClick.bind(this)}>+</button>
				
      </form>
    </div>
   );
}
}


export default App;

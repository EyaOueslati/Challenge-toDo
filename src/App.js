import React from 'react';
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={
    toDo:[
      {id:0, texte:'Learn HTML', isComplite:false},
      {id:1, texte:'Learn CSS', isComplite:true},
      {id:2, texte:'Learn JS', isComplite:false},
      ],
      input:''
  };
  completedTasck = (id)=>{
    this.setState({toDo: this.state.toDo.map(el=> el.id===id ? {...el,isComplite: !el.isComplite} :el) })
  }
    
  
  
  deleteList=(id)=>{
       const filtredList = this.state.toDo.filter((el)=> el.id !==id);
       {this.setState({toDo: filtredList})}}

  
  addTodo=(input)=>{
    const newTodo = {
      id:this.state.toDo.length+1,
      texte:input,
      isComplite:false
    }
    this.setState({toDo: [...this.state.toDo, newTodo]})
  }
  changeInput=(e)=>{
    this.setState({input:e.target.value})
}
addValue =(e)=>{
  e.preventDefault();
  this.addTodo(this.state.input)
  this.setState({input:""})
}

  
  render(){
    return (
      <div className="App">
        
           <h2>My To Do List</h2>
           <form onSubmit={(e)=>e.preventDefault()}>
             <input type="text" onChange={this.changeInput} value={this.state.input}/>
             <button className="btn" onClick={()=>this.addTodo(this.state.input)}>Add</button>
           </form>
        {this.state.toDo.map((el,i)=>
        <ul key={i}>
          <li className={el.isComplite? '' :'line'}>{el.texte} </li>
          <div className="btnGroup">
          <button className="btnList" onClick={()=>this.completedTasck(el.id)}>{el.isComplite ? 'Not yet' :'Completed' } </button>
          <button className="btnList" onClick={()=>this.deleteList(el.id)}>Delete</button>
          </div>
        </ul>)}   
        
      </div>
        
      );
  }
  
}

export default App;

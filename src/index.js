
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import ExampleReactBoostrap from './Example-React-Bootstrap.js'
import TodoAPP from './TodoAPP.js'
import React, { Component } from 'react';
import './myCSS.css'; // Tell webpack that Button.js uses these styles

class Button extends Component {
 render() {
   // You can use them as regular CSS styles
   return <div className="" />;
 }
}


 

const varia = "Perro";

class Timer extends React.Component{

  constructor(props){
    super(props);
    this.state = {seconds: 0};
  }

  tick(){
    this.setState(state => ({ seconds : state.seconds + 1}));   
    
  }

  componentDidMount(){  
    this.interval = 
      setInterval(()=>this.tick(), 1000);

  }

  render(){
    return(
      <div>
        Segundos: {this.state.seconds}
      </div>
    );
  }

}

class HelloMessage extends React.Component {
    
  render() {
    return (
      <div>
        Hola {this.props.name}
        <br/>
        Me siento {this.props.estadoAnimo}
        {varia}
      </div>
    );
  }
}

function Avatar(props){
  return(
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
        <Avatar user={props.user} />
         <div className="UserInfo-name">
          {props.user.name}
        </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}  />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date }
      </div>
    </div>
  );
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  render() {
    return (
      <div className='container'>
      <h3 className='fs-3 mt-3'>Tareas pendientes</h3>
      <TodoList items={this.state.items} />
      <form className='form' onSubmit={this.handleSubmit}>
        <label className='form-label' htmlFor="new-todo">
          ¿Qué se necesita hacer?
        </label>
        <input
          className='form-control my-3'
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className='btn btn-primary'>
          Añadir #{this.state.items.length + 1}
        </button>
        </form>
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });   
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  
  }
}
class TodoList extends React.Component {
  render() {
    return (
        
      <ul className='text-decoration-none'>
      {this.props.items.map(item => (
        <li className='text-decoration-none fs-2' key={item.id}>{item.text}</li>
      ))}
    </ul>

    );
  }
}

/* ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
); */ 

 ReactDOM.render(
  <TodoAPP />,
  document.getElementById('root')
); 


/*
ReactDOM.render(
  <Timer />,
  document.getElementById('root')
);

const comment = {
  date: "11/11/2022",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment 
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
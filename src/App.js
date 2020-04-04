import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props){
      this.state={
        posts: []
      }
    }
  componentDidMount(){
    const url=
      "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response=> response.json())
    .then(json=>this.setState({posts:json}))
  }
 render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}
}
export default App;

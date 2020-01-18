
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,

  } from "react-router-dom";
  import Vocabulary from "./Vocabulary"
  // import Bookmark from "./Bookmark"

export default class Home extends Component {
  constructor(props){
    super(props);
  this.state={
    wordlist: this.props.wordlist
  }


  }
    render() {
        return (
        
            <Router>
          
                
               
            <nav>
      <ul>
        <li>
            
          <Link id="home" to="/vocabularypage">Practice with Vocabulary</Link>
        </li>
        <li>
          <Link id="bookmark" to="bookmark">Bookmark</Link>
        </li>
        
      </ul>
    </nav>
  
    <Switch>
      <Route  path="/vocabularypage">
          <Vocabulary wordlist={this.state.wordlist}/>
          </Route> 
       
      {/* <Route path="/bookmark">
        <Bookmark arr={this.state.bookmarkArr} id={this.state.id}/>
      </Route> */}
     
    </Switch>
    
    </Router> 
          
        )
    }
}

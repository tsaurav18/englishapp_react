import React, { Component } from 'react'
import "./App.css";

import Home from "./Components/Home"
// import Bookmark from "./Components/Bookmark"
// import About from "./Components/About"

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//   // useParams
//   } from "react-router-dom";
  

// library.add(fab, faCheckSquare, faCoffee)

export default class App extends Component {

    constructor(props){
        super(props)
        
        this.state={
            id:0,
            bookmarkArr:[]
            
        }
     
     
    
    }
    handleChangingnext=(e)=>{
        if(this.state.id<18){
            this.setState({id:this.state.id+1})
         
            return true;
        }
        return e.preventDefault();
       
        
        
    }

    handleChangingback=()=>{
        if(this.state.id>0){
            this.setState({id:this.state.id-1})
            return true;
        }
        return false;
   
    }
    handleAddBookmark=()=>{
      return(
  
        this.state.bookmarkArr.push(this.props.wordlist[this.state.id].word,this.props.wordlist[this.state.id].meaning)
        
     
      )
      
    }
    componentWillUpdate(){
     
      return (
        <Home bookmarkArr={this.state.bookmarkArr} idx={this.state.id}/>
      )
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.id>-1 && this.state.id<18){
          
            console.log(nextProps, nextState )
            return true;
        }
        console.log(nextProps, nextState);
        return false;
     }
   
    render() {
    //    const Child=()=>{
    //        let {id } =useParams();
    //    return(
    //        <div>
    //             {id}
    //        </div>
    //    )}
    
     
     
        return (
           
             <div>
                {/*
                <nav>
          <ul>
            <li>
              <Link id="home" to="/">Home</Link>
            </li>
            <li>
              <Link id="bookmark" to="bookmark">Bookmark</Link>
            </li>
            <li>
              <Link id="about" to="about" >About</Link>
            </li>
          </ul>
        </nav>
        {/* <Switch>
            <Route path="/:id" children={<Child/>}></Route>
        </Switch> 
        <Switch>
          <Route  path="home" Component={Main}>
           
          </Route>
          <Route path="bookmark">
            <Bookmark arr={this.state.bookmarkArr}/>
          </Route>
          <Route path="about" Component={About}>
           
          </Route>
        </Switch> */}
            <div className="dic-box">
                 <div className="word">{this.props.wordlist[this.state.id].word}</div>
        <div className="meaning">{this.props.wordlist[this.state.id].meaning}</div>
        </div>
        {/* <div>
        <FontAwesomeIcon icon="amazon"/>
        <i className="fas fa-camera-retro"></i></div> */}
        <div className="btns">
         <button className="btn-next" onClick={this.handleChangingnext} >Next</button>
         <button className="btn-addbookmark" onClick={this.handleAddBookmark} >Bookmark</button>
        <button className="btn-back" onClick={this.handleChangingback}>Previous</button>
        </div>
            </div>
          
        )
    }
}







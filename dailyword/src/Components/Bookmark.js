import React, { Component } from 'react'
import "../App.css";
export default class Bookmark extends Component {
    constructor(props){
        super(props)
        this.state={
        id:this.props.id,
        arrbook: this.props.arr
           
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
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.id>-1 && this.state.id<18){
          
            console.log(nextProps, nextState )
            return true;
        }
        console.log(nextProps, nextState);
        return false;
     }
    render() {

        return (
            <div>
                <h1>Bookmark</h1>
                {/* <div className="dic-box">
                 <div className="word">{this.state.arrbook[this.state.id].word}</div>
        <div className="meaning">{this.state.arrbook[this.state.id].meaning}</div>
        </div> */}

        <div className="btns">
         <button className="btn-next" onClick={this.handleChangingnext} >Next</button>
         
        <button className="btn-back" onClick={this.handleChangingback}>Previous</button>
        </div>
            </div>
            //   <h5>{this.state.newArr}</h5>
            
        )
    }
}

import React, { Component } from 'react'
import App from "../App"
// s

export default class Vocabulary extends Component {
    constructor(props) {
        super(props)
        this.state={
            wordlist:this.props.wordlist
        }
    }
    render() {
        return (
            <>
            {/* <Link  to="/vocabulary">Practice with Vocabulary</Link>            */}
            <App wordlist={this.state.wordlist}/>
            </>
            
        )
    }
}

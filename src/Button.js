import React from 'react'

class Button extends React.Component{
    state = {
        count: 0
    };
    increment= (state)=>{
        return {count: state.count +1}
    }
    incrementMultiple = ()=>{
        this.setState(this.increment)
        this.setState(this.increment)
        this.setState(this.increment)
    }
    componentWillMount(){
        console.log('componentWillMount is called')
    }
    componentDidMount(){
        console.log('componentDidMount is called')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps is called')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate is called')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate is called')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate is called')
    }
    render(){
        console.log('render is called....')

        return <button onClick={this.incrementMultiple}>{this.state.count}</button>
    }
}

export  {Button};
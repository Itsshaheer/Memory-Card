import { render } from "@testing-library/react";
import React from "react";
export default class Counter extends React.Component{
constructor (props){
  console.log("constrcutor")
  super(props)
  this.state= {
    counter:0
  }
  this.increment= () => this.setState({counter:this.state.counter +1})
  this.decrement= () => this.setState({counter:this.state.counter -1})
}
componentDidMount(){
  console.log("compoennt did mount")
  console.log("---------")
}

render(){
  console.log("render")
  return <div>
    <button onClick={this.increment}> increment</button>
    <button onClick={this.decrement}> decrement</button>
    <div className="counter">
      Counter: {this.state.counter}
    </div>
  </div>
 
}
componentDidUpdate(prevProps, prevState, snapshot){
  console.log("compoennt did update")
  console.log("=========")
}

}


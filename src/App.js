import React,{Component} from 'react';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      currentTime:new Date().toString()
    }
    this.updatetime();
  }
  updatetime(){
    setInterval(()=>{
      this.setState({currentTime:new Date().toString()})
    },1000);
  }

  render(){
    return(
      <h2>{this.state.currentTime}</h2>
      );
  }
}

export default Clock;

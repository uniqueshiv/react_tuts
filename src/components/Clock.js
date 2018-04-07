import React,{Component} from 'react';

import Logger from './Logger';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={
      currentTime:new Date().toString(),
      counter:0
    }
    this.updatetime();
  }
  updatetime(){
    setInterval(()=>{
      this.setState({currentTime:new Date().toString(),
      counter:this.state.counter+1
    })
  },1000);
  }

  render(){
    return(
      <div>
      {
        (this.state.counter<3)?
        (<Logger time={this.state.currentTime} />):
        (<div></div>)
       }
      </div>
      );
  }
}

export default Clock;

//

import React ,{Component} from 'react';
import Counter from './Counter';
class MyEvents extends Component{
  constructor(){
    super();
    this.state={
      counter:0
    }
    this.incrementCounter=this.incrementCounter.bind(this);
    this.decrementCounter=this.decrementCounter.bind(this);
  }
  incrementCounter(){

        this.setState({counter:this.state.counter+1})


  }
  decrementCounter(){
    if(this.state.counter===0){
      console.log('you reached minimum level')
    }else{
      this.setState({counter:this.state.counter-1})
    }

  }

  render(){
    return(
     <div>
        <Counter counter={this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} />
     </div>
    )
  }
}
export default MyEvents;

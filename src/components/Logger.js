import React ,{Component} from 'react';

class Logger extends Component{
  constructor(props){
    super(props);
    console.log('constructor running');
  }
  componentWillMount(){
    console.log('component will mount method');
  }
  componentDidMount(){ //work after render component
    console.log('component did mount')
  }
  componentWillReceiveProps(nextProps){
    console.log('Next props'+JSON.stringify(nextProps))
  }
  shouldComponentUpdate(newprops,newstate){
    console.log('shouldcompoentnet update')
    console.log('new props',newprops);
    console.log('new State ',newstate);
    return true; // this function will decide component will update or not
  }
  componentWillUpdate(){ //will run before update component
    console.log('willupdate component run');
  }
  componentDidUpdate(oldprops,oldstate){
    console.log('component old props',oldprops);
    console.log('component old state ',oldstate);
  }
  componentWillUnmount(){
    //run when component did finish
    console.log('compoenent will unmounted trigger')
  }
  render(){
    return(
      <div>
      {console.log('render method')}
      <h2>{this.props.time}</h2>
      </div>
    )
  }
}
export default Logger;

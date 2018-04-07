import React ,{Component} from 'react';

class Forms extends Component{
  constructor(){
    super();
    this.state={
      username:'',
      allUsers:[],
      radioGroup:{
        Meanstack:false,
        Mernstack:true,
        Lampstack:false
      }
    }
    this.formHandler=this.formHandler.bind(this);
    this.clickHandler=this.clickHandler.bind(this);
    this.radioHandler=this.radioHandler.bind(this);
  }
  formHandler(ev){
      //console.log(ev.target.value);
      this.setState({
        username:ev.target.value
      });
  }
  clickHandler(event){
    let currentUser=this.state.allUsers;
    currentUser.push(this.state.username);
    this.setState({
      allUsers:currentUser,
      username:'',

    });
    console.log(currentUser);
  }
  radioHandler(event){
    console.log(event.target.value);
    let radioGroup=this.state.radioGroup;
    for(var key in radioGroup){
      radioGroup[key]=false;
    }
    radioGroup[event.target.value]=event.target.checked;
    this.setState({
      radioGroup:radioGroup
    });
  }
  render(){
    return(
      <div>
      <h2>Form </h2>
      <input type="text" name="username" value={this.state.username} onChange={this.formHandler}/><br/>

      Developer Category:
      <br />
      <label>

      Mean Stack<input type="radio" onChange={this.radioHandler} name="devcateogry" value="Meanstack" checked={this.state.radioGroup['Meanstack']} />
      </label>
      <br/>
      <label>
      LAMP Stack<input type="radio"  onChange={this.radioHandler} name="devcateogry" value="Lampstack" checked={this.state.radioGroup['Lampstack']}/>
      </label>
      <br/>
      <label>
      Mern Stack<input type="radio"  onChange={this.radioHandler} name="devcateogry" value="Mernstack" checked={this.state.radioGroup['Mernstack']} />
      </label><br />

      <button onClick={this.clickHandler}>Add</button>
      </div>
    )
  }
}
export default Forms;

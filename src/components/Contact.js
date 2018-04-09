import React ,{Component} from 'react';
import {Link} from 'react-router-dom';


class Contact extends Component{

  routeToContact(){
      this.props.history.push('/contact/21')
  }
  render(){
    let users={
      1:{
        name:'haider',
        cell:'abc'
      },
      2:{
        name:'shiva',
        cell:'xyz'
      },
      3:{
        name:'rajj',
        cell:'yyy'
      }
    }
    let requireuser=users[this.props.match.params.id]
    return(
      <div className="Contact">
      <h1>Hello Contact </h1>
        {this.props.match.params.id}
        Username : {requireuser.name} <br/>
        cell     : {requireuser.cell}
        <li><Link to="/contact/1">1</Link></li>
        <li><Link to="/contact/2">2</Link></li>
        <li><Link to="/contact/3">3</Link></li>
        <li><Link to="/contact/234">345</Link></li>

          <button onClick={this.routeToContact.bind(this)}>Contact</button>

      </div>
    )
  }
}
export default Contact;

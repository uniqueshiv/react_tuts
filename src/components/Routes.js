import React from 'react';
import {
   Router,Route,Link
} from 'react-router-dom';
import Clock from './Clock';
import Counter from './Counter';
import Forms from './Form';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

import createBrowserHistory from 'history/createBrowserHistory';

const customHistory=createBrowserHistory();



const customRoutes=()=>(

<Router history={customHistory}>
  <div>

      <Navbar />
      <hr />
      <Route exact  path='/' component={Forms} />
      <Route path='/about' component={About} />
      <Route path='/clock' component={Clock} />
      <Route path='/counter' component={Counter} />
      <Route path='/contact/:id' component={Contact} />

  </div>
</Router>
)
export default customRoutes;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import User from './user/User';
import Admin from './admin/Admin'
import CreatePost from './user/landing/create-post/CreatePost';
import Explore from './admin/landing/explore/Explore';
class App extends Component {
 render() {
   return (
     <Router>
       <div>
         {/* ==== User routes below ==== */}
         <Route path="/user" exact render={() => <User />} />
         <Route path="/user/createPost" exact render={() => <CreatePost />} />
         {/* ==== Admin routes below ==== */}
         <Route path="/admin" exact render={() => <Admin />}/>
         <Route path="/admin/explore" exact render={() => <Explore />} />
          {/* <Route path="/admin/search" exact render={() => <Search />} /> */}
       </div>
     </Router>
   );
 }
}
export default App;
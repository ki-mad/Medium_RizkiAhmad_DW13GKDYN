import React, {Component} from 'react';
// import { render } from '@testing-library/react';
// import Home from './Home';
// import logo from './logo.svg';
// import './App.css';
import Regis from './Regis';
import Login from './Login';
import Home from './Home';
import NewStory from './Component/NewStory';
import Stories from './Component/Stories';
import Bookmarks from './Component/Bookmarks';
import Stats from './Component/Stats';
import Profile from './Component/Profile';
import ArticleByPerson from './Component/ArticleByPerson';
import CategoryPage from './CategoryPage';
import ArticlePage from './ArticlePage';
import CommentArticle from './Component/Comment';
import {BrowserRouter as Router, Route} from 'react-router-dom';




class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <Home/>
      // </div>
      // <div>
         <Router>
         <div>
             <Route exact path="/" component={Home} />
             <Route path="/Regis" component={Regis} />
             <Route path="/Login" component={Login} />
             <Route path="/Home" component={Home} />
             <Route path="/category_page/:id/article" component={CategoryPage} />
             <Route path="/article/:id" component={ArticlePage}/>
             <Route path="/Comment" component={CommentArticle}/>
             <Route path="/NewStory" component={NewStory}/>
             <Route path="/Stories" component={Stories}/>
             <Route path="/Bookmarks" component={Bookmarks}/>
             <Route path="/Stats" component={Stats}/>
             <Route path="/Profile" component={Profile}/>
             <Route path="/article_by_person" component={ArticleByPerson}/>
         </div>
     </Router>
      // </div> 
    );
  }
}

export default App;
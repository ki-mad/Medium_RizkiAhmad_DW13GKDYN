import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/Regis" component={Regis} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/CategoryPage" component={CategoryPage} />
            <Route path="/ArticlePage" component={ArticlePage}/>
            <Route path="/Comment" component={CommentArticle}/>
            <Route path="/NewStory" component={NewStory}/>
            <Route path="/Stories" component={Stories}/>
            <Route path="/Bookmarks" component={Bookmarks}/>
            <Route path="/Stats" component={Stats}/>
            <Route path="/Profile" component={Profile}/>
            <Route path="/article_by_person" component={ArticleByPerson}/>
        </div>
    </Router>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

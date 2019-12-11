import React, {Component} from 'react';
import { Container, Grid} from 'semantic-ui-react'
import Header from '../Header';
import Login from '../Login';

export default class CategoryPage extends Component{

     render() {
         return(
             <div>
                <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                    <Header/>
                </div>
                <h1>asdsadasdsa</h1>
                <Login/>
            </div>
         );
     }
 }


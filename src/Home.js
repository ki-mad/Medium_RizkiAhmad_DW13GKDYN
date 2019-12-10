import React, {Component} from 'react';
import { Container,Image} from 'semantic-ui-react'
import Category from './Category';
import Header from './Header';
import Content from './Content';
export default class Home extends Component{

     render() {
         return(
             <div>
                 <Container className="Home">
                    <Header/>
                    <Category/>
                </Container>
                <Container fluid>
                    {/* <Content/> */}
                </Container>
             </div>
         );
     }
 }


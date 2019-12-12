import React, {Component} from 'react';
import { Container, Grid, Menu,Responsive, Image, List, Divider} from 'semantic-ui-react'
import Header from './Header';
import {Link} from 'react-router-dom';
import ArticleContent from './Component/ArticleContent';

export default class ArticlePage extends Component{

     render() {
         return(
            <div>
                 <Container fluid  >
                     <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                        <Header/>
                        <Divider/>
                        <Container>
                            <Responsive>
                                <Grid >
                                    <Grid.Column>
                                        <Menu secondary compact>
                                            <Menu.Menu>
                                                <Menu.Item>
                                                    <Link><Image alt="Mission.org" class="" src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png" width="216" height="36"></Image></Link>
                                                </Menu.Item>
                                            </Menu.Menu>
                                        </Menu>
                                        <List celled horizontal>
                                                    <List.Item><Link style={{color:"gray"}}>MISSION ORIGINAL</Link></List.Item>
                                                    <List.Item><Link style={{color:"gray"}}>SUBSCRIBE</Link></List.Item>
                                        </List>
                                    </Grid.Column>
                                </Grid>
                            </Responsive>
                        </Container>
                        <Container>
                            <ArticleContent/>
                        </Container>
                     </div>
                 </Container>
            </div>
         );
     }
 }
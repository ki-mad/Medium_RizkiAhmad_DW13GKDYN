import React, {Component} from 'react';
import { Container, Grid, Segment, Button, Icon, List, Image, Form} from 'semantic-ui-react'
import Header from '../Header';
import {Link} from 'react-router-dom';
import '../css/Article.css';
import CommentList from '../Component/CommentList'

export default class CommentArticle extends Component{

     render() {
         const commentlist = [
             {
                 id:1,
                 img:"https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png",
                 user:"Joshua",
                 respon:"5 responses",
                 content:"NEWSFLASH! White men are not the only people who write books. This list is almost completely white male authors, writing about white men. This list is a joke… consider reading books by people who don’t look like you and have different life experiences. It might not be such a bad thing to be “outwardly focused” once in a while.",
             },
             {
                id:2,
                img:"https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png",
                user:"Joshua",
                respon:"6 responses",
                content:"NEWSFLASH! White men are not the only people who write books. This list is almost completely white male authors, writing about white men. This list is a joke… consider reading books by people who don’t look like you and have different life experiences. It might not be such a bad thing to be “outwardly focused” once in a while.",
            },
            {
                id:3,
                img:"https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png",
                user:"Joshua",
                respon:"54 responses",
                content:"NEWSFLASH! White men are not the only people who write books. This list is almost completely white male authors, writing about white men. This list is a joke… consider reading books by people who don’t look like you and have different life experiences. It might not be such a bad thing to be “outwardly focused” once in a while.",
            }
         ]
         return(
             <body style={{backgroundColor:"#FAFAFA"}}>
                <div>
                    <Container fluid style={{backgroundColor:"white"}} >
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                            <Header/>
                        </div>
                        <Container style={{backgroundColor:"white" , paddingBottom:"0.2px"}}>
                                        <Grid className="Comment-Grid" style={{marginLeft:"12%", marginRight:"12%", marginTop:"6%", marginBottom:"5%"}}>
                                            <div style={{fontSize:"16px", fontWeight:"1000"}}>
                                                Showing responses for:
                                            </div>
                                            <Grid.Row  style={{paddingTop:"5px"}}>
                                                <Grid.Column>
                                                    <div >
                                                        <Link className="Link" to="/ArticlePage">
                                                            <Segment className="Link">
                                                                <Grid.Column floated="left">
                                                                            <div>
                                                                                <span>If You Only A Few Books In 2018, Read These</span> 
                                                                                <span style={{float:"right", color:"gray"}}><Button size="mini" circular icon='comments' />217</span>
                                                                                <span style={{float:"right", color:"gray" , paddingRight:"5px"}}><Button size="mini" circular icon='heart outline' />54k</span>
                                                                            </div>
                                                                            <div style={{color:"gray"}}>
                                                                                Ryan Holiday
                                                                            </div>
                                                                </Grid.Column>
                                                            </Segment>
                                                        </Link>
                                                    </div>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </Grid>
                        </Container>
                    </Container>

                    <Container fluid style={{backgroundColor:"#FAFAFA"}}>
                        <Container>
                            <Grid style={{marginLeft:"12%", marginRight:"12%", marginTop:"6%", marginBottom:"5%"}}>
                                <div style={{fontSize:"16px", fontWeight:"1000", paddingTop:"24px"}}>
                                    Responses
                                </div>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Segment>
                                            <Grid.Column>
                                                <Image avatar size="mini" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"></Image>
                                                <span style={{fontWeight:"100", marginLeft:"4%"}}>
                                                    Kimad 
                                                </span>
                                            </Grid.Column>
                                            <Grid.Column>
                                                <Form reply style={{marginTop:"2%"}}>
                                                    <Form.TextArea />
                                                    <Button content='Add Reply' labelPosition='left' icon='edit' basic color="green" />
                                                    {/* <Button content='Go Full Scr' labelPosition='left'  basic color="green" /> */}
                                                </Form>
                                            </Grid.Column>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row style={{height: '50%'}}>
                                    <Grid.Column>
                                            {commentlist.map(item => 
                                            <CommentList
                                                img={item.img}
                                                content={item.content}
                                                respon={item.respon}
                                                user={item.user}
                                            />)}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                </Grid.Row>
                            </Grid>
                        </Container>
                    </Container>
                </div>
            </body>
         );
     }
 }

 
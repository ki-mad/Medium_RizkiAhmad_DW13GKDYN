import React, {Component} from 'react';
import { Container, Grid, Segment, Button, Icon, Item, Image, List, Divider} from 'semantic-ui-react'
import Header from '../Header';
import {Link} from 'react-router-dom';
import '../css/Article.css';
import CommentList from '../Component/CommentList'
import G from 'glob';

export default class RelatedArticle extends Component {
    render() {
        return(
            <div>
               <Container fluid style={{backgroundColor:"#FAFAFA"}}>
                    <Container>
                        <div>
                            <h4 style={{marginTop:"24px", paddingTop:"24px"}}>More From Medium</h4>
                            <Divider/>
                        </div>
                    </Container>
                        <Grid container stackable columns={3}>
                            <Grid.Column>
                                <p style={{color:"gray"}}>More from Mission.org</p>
                                <Image src='https://miro.medium.com/max/328/1*cWrckQhDDGxKiwpb6YtPtg.jpeg' width="332x" height="227px" />
                                <p style={{fontSize:"23px", paddingTop:"0px"}}>The Greatest Sales Deck I've Ever Seen</p>
                                <Grid>
                                    <Grid.Row style={{paddingRight:"14px", marginBottom:"5%"}}>
                                        <Grid.Column width={2} style={{paddingRight:"0px"}}>
                                            <Image avatar size="mini" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"></Image>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <div style={{fontSize:"12px"}}>
                                                <div style={{fontWeight:"40"}}>
                                                    Ryan Holiday
                                                </div>
                                                <div style={{color:"gray"}}>
                                                    Jun 26 2018 - 10 min read
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5} floated="right" style={{alignContent:"center", paddingTop:"10px", marginBottom:"20px"}}>
                                            <div style={{float:"right", alignContent:"bottom"}}>
                                                <Link style={{color:"black"}}><Icon color="black" name="heart outline"></Icon>54k</Link>
                                                <Link> <Icon  color="black" name="bookmark outline"></Icon></Link>
                                            </div>
                                            <Divider vertical></Divider>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        <Grid.Column>
                            <p style={{color:"gray"}}>More from Mission.org</p>
                            <Image src='https://miro.medium.com/max/328/0*syfFJWLOzLoNRUbF.' width="332px" height="227px"/>
                            <p style={{fontSize:"23px", paddingTop:"0px"}}>The Greatest Sales Deck I've Ever Seen</p>
                            <Grid>
                                <Grid.Row style={{paddingRight:"14px"}}>
                                    <Grid.Column width={2} style={{paddingRight:"0px"}}>
                                        <Image avatar size="mini" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"></Image>
                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <div style={{fontSize:"12px"}}>
                                            <div style={{fontWeight:"40"}}>
                                                Ryan Holiday
                                            </div>
                                            <div style={{color:"gray"}}>
                                                Jun 26 2018 - 10 min read
                                            </div>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column width={5} floated="right" style={{alignContent:"center", paddingTop:"10px", marginBottom:"20px"}}>
                                        <div style={{float:"right", alignContent:"bottom"}}>
                                            <Link style={{color:"black"}}><Icon color="black" name="heart outline"></Icon>54k</Link>
                                            <Link> <Icon color="black" name="bookmark outline"></Icon></Link>
                                        </div>
                                        <Divider vertical></Divider>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column>
                            <p style={{color:"gray"}}>More from Mission.org</p>
                            <Image src='https://miro.medium.com/max/328/1*0x_mh8ErNGNgheK2zYQ6hw.png' width="332px" height="227px"/>
                            <p style={{fontSize:"23px", paddingTop:"0px"}}>The Greatest Sales Deck I've Ever Seen</p>
                                <Grid>
                                    <Grid.Row style={{paddingRight:"14px"}}>
                                        <Grid.Column width={2} style={{paddingRight:"0px"}}>
                                            <Image avatar size="mini" src="https://miro.medium.com/fit/c/96/96/0*oxw8NBp_Td0n3l4_.png"></Image>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <div style={{fontSize:"12px"}}>
                                                <div style={{fontWeight:"40"}}>
                                                    Ryan Holiday
                                                </div>
                                                <div style={{color:"gray"}}>
                                                    Jun 26 2018 - 10 min read
                                                </div>
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width={5} floated="right" style={{alignContent:"center", paddingTop:"10px", marginBottom:"20px"}}>
                                            <div style={{float:"right", alignContent:"bottom"}}>
                                                <Link style={{color:"black"}}><Icon color="black" name="heart outline"></Icon>54k</Link>
                                                <Link> <Icon color="black" name="bookmark outline"></Icon></Link>
                                            </div>
                                            <Divider vertical></Divider>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                        </Grid.Column>
                    </Grid>
               </Container>
               <Container fluid style={{backgroundColor:"black"}}>
                    <Grid container stackable inverted columns={3}>
                        <Grid.Row inverted style={{color:"white"}}>
                            <Grid.Column>
                                <div>
                                    <h4 style={{marginTop:"24px", paddingTop:"24px", color:"white", paddingBottom:"24px"}}>More From Medium</h4>
                                </div>
                                <div>
                                    Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h4 style={{marginTop:"24px", paddingTop:"24px", color:"white", paddingBottom:"24px"}}>More From Medium</h4>
                                </div>
                                <div>
                                    Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch
                                </div>
                            </Grid.Column>
                            <Grid.Column>
                                <div>
                                    <h4 style={{marginTop:"24px", paddingTop:"24px", color:"white", paddingBottom:"24px"}}>More From Medium</h4>
                                </div>
                                <div>
                                    Welcome to a place where words matter. On Medium, smart voices and original ideas take center stage - with no ads in sight. Watch
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider color="white"></Divider>
                    </Grid>
                <Container style={{paddingBottom:"24px"}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column floated="left" style={{marginRight:"56%"}}>
                                <h1 style={{color:"white"}}>Medium</h1>
                            </Grid.Column>
                            <Grid.Column width={6} style={{paddingTop:"7px"}}>
                                <List floated='right' horizontal>
                                    <List.Item href='#' style={{color:"white"}}>About</List.Item>
                                    <List.Item href='#' style={{color:"white"}}>Help</List.Item>
                                    <List.Item href='#' style={{color:"white"}}>Legal</List.Item>
                                </List>
                            </Grid.Column>1
                        </Grid.Row>
                    </Grid>
                </Container>
            </Container>
              
            </div>
        );
    }
}
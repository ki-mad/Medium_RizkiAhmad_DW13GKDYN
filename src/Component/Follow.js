import React, {Component,} from 'react';
import {Icon, Grid,Image, Container,Responsive, Button, Item, Label, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Follow extends Component {
    render() {
        return(
            <div>
                <Container>
                    <Grid style={{marginLeft:"18%", marginRight:"18%", marginTop:"5%"}}>
                        <Responsive as={Grid} minWidth={750} maxWidth={2559}>
                            <Button size="mini">Books</Button>
                            <Button size="mini">Self Imporvement</Button>
                            <Button size="mini">Productivity</Button>
                            <Button size="mini">Life</Button>
                            <Button size="mini">Life Lesson</Button>
                        </Responsive>
                        <Responsive as={Grid} maxWidth={749}>
                            <Button.Group vertical>
                                <Button size="mini">Books</Button>
                                <Button size="mini">Self Imporvement</Button>
                                <Button size="mini">Productivity</Button>
                                <Button size="mini">Life</Button>
                                <Button size="mini">Life Lesson</Button>
                            </Button.Group>
                        </Responsive>
                    </Grid>
                </Container>  
                <Container>
                    <Grid style={{marginLeft:"18%", marginRight:"18%", marginTop:"5%"}}>
                        <Grid.Row stackable>
                            <Grid.Column width={2}>
                                <Button as='div' labelPosition='right'>
                                    <Button color='red'>
                                        <Icon name='heart' />
                                        Like
                                    </Button>
                                    <Label as='a' basic color='red' pointing='left'>
                                        2,048
                                    </Label>
                                </Button>
                            </Grid.Column>
                            <Grid.Column width={5} floated="right" style={{alignContent:"bottom", paddingTop:"20px", marginBottom:"20px"}}>
                                <div style={{float:"right", alignContent:"bottom"}}>
                                    <Link><Icon  size = "large" name="twitter"></Icon></Link>
                                    <Link> <Icon size = "large" name="facebook"></Icon></Link>
                                    <Link style={{color:"black"}}><Icon size = "large" name="bookmark"></Icon></Link>
                                    <Link style={{color:"black"}}> <Icon size = "large" name="ellipsis horizontal"></Icon></Link>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12}>
                            <Item.Group divided>
                                <Item>

                                    <Item.Image avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' size="small" />
                                    <Item.Content>
                                        <Item.Meta>
                                        <span className='cinema'>WRITTEN BY</span>
                                        </Item.Meta>
                                        <Item.Header as='a'>Ryan Holiday</Item.Header>
                                        <Item.Description>Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Item.Description>
                                        <Item.Extra>
                                        
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                            </Grid.Column>
                             <Responsive >
                                <Grid.Column width={4}>
                                    <Button basic color="green" floated='right'>
                                            Follow
                                        </Button>
                                </Grid.Column>
                            </Responsive>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Grid.Column width={12}>
                            <Item.Group divided>
                                <Item>
                                    <Item.Image avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' size="small" />
                                    <Item.Content>
                                        <Item.Meta>
                                        <span className='cinema'>WRITTEN BY</span>
                                        </Item.Meta>
                                        <Item.Header as='a'>Ryan Holiday</Item.Header>
                                        <Item.Description color="gray">Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Item.Description>
                                        <Item.Extra>
                                        
                                        </Item.Extra>
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                            </Grid.Column>
                            <Responsive >
                                <Grid.Column width={4}>
                                    <Button basic color="green" floated='right'>
                                            Follow
                                        </Button>
                                </Grid.Column>
                            </Responsive>
                           
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Container fluid>
                                <Link to="/Comment"><Button size = "big" basic color="green" fluid style={{fontSize:"14px", padding:"25px"}}>See responses (216) </Button> </Link>
                            </Container>
                        {/* <Button size = "big" basic color="green">See responses (216) </Button> */}
                        </Grid.Row>
                    </Grid>
                   
                </Container>
            </div>
        );
    }
}
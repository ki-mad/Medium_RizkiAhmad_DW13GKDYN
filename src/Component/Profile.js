import React, {Component} from 'react';
import { Grid, Container, Button, Item, Responsive, Image} from 'semantic-ui-react'
import Header from "../Header";

export default class Profile extends Component{
    render() {
        return(
            <div>
                 <Container fluid  >
                     <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                        <Header/>
                     </div>
                 </Container>
                 <Container>
                    <Grid style={{marginTop:"5%", marginLeft:"20%", marginRight:"20%"}}>
                        
                        <Grid.Row>
                            <Grid.Column width={12}>
                            <Item.Group divided>
                                <Item>
                                    <Item.Content>
                                        
                                        <Item.Header style={{fontSize:"30px"}}>Kimad<Button color="black" style={{marginLeft:"30px"}} basic size="mini">Edit Profile</Button></Item.Header>
                                        <Item.Meta>
                                            1 Following
                                        
                                        </Item.Meta>
                                        {/* <Item.Description color="gray">Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Item.Description> */}
                                    </Item.Content>
                                </Item>
                            </Item.Group>
                            </Grid.Column>
                            <Responsive >
                                <Grid.Column width={4}>
                                    <Item.Group divided>
                                        <Item>
                                            <Image avatar src='https://miro.medium.com/fit/c/160/160/0*oxw8NBp_Td0n3l4_.png' size="small" />
                                        </Item>
                                    </Item.Group>
                                </Grid.Column>
                            </Responsive>
                            <div style={{marginTop:"5%"}}>
                            Kimad hasn’t been active on Medium yet. Check back later to see their stories, claps, and highlights.
                            </div>
                           
                        </Grid.Row>
                       
                        
                       
                    </Grid>
                   
                 </Container>
            </div>
            
        );
    }
}
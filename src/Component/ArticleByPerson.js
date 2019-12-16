import React, {Component} from 'react';
import { Grid, Container, Button, Item, Responsive, Image, Icon, Tab} from 'semantic-ui-react'
import Header from '../Header';
import Follow from '../Component/Follow';

export default class Profile extends Component{
    render() {
        const panes = [
            { menuItem: 'Tab 1', render: () => <Tab.Pane>dfdf</Tab.Pane> },
            { menuItem: 'Tab 2', render: () => <Tab.Pane><Header/></Tab.Pane> },
            { menuItem: 'Tab 3', render: () => <Tab.Pane><Follow/></Tab.Pane> },
          ]

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
                                        <Item.Header style={{fontSize:"30px", paddingBottom:"5%"}}>Ryan Holiday<Button color="black" style={{marginLeft:"30px", verticalAlign:"top", paddingTop:"5px", paddingBottom:"5px"}} basic color="green" size="mini">Follow</Button><Icon name="angle down"></Icon></Item.Header>
                                        <Item.Description color="gray">Bestselling author of ‘Conspiracy,’ ‘Ego is the Enemy’ & ‘The Obstacle Is The Way’ http://amzn.to/24qKRWR</Item.Description>
                                        <Item.Meta>
                                            <span style={{paddingRight:"2%"}}>
                                                246k Following
                                            </span>
                                            <span style={{paddingRight:"2%"}}>
                                                101k followers
                                            </span>
                                            <Icon name="twitter"></Icon>
                                        </Item.Meta>
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
                        </Grid.Row>
                    </Grid>                  
                 </Container>
                 <Container>
                    <Tab panes={panes} />
                 </Container>
            </div>
            
        );
    }
}
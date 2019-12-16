import React, {Component} from 'react';
import { Tab, Menu, Grid, Container, Statistic, Icon, Image} from 'semantic-ui-react'
import Header from "../Header";

export default class Stats extends Component{
    
    render() {
        return(
            <div>
                 <Container fluid  >
                     <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                        <Header/>
                     </div>
                 </Container>
                 <Container>
                     <Grid style={{marginTop:"5%"}}>
                         <Grid.Column>
                         <Menu secondary>
                            <Menu.Menu>
                                <Menu.Item>
                                    <h1 style={{ fontSize:"40px", fontWeight:"200%"}}>Stats</h1>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                         </Grid.Column>
                     </Grid>
                 </Container>
                 <Container style={{marginTop:"3%"}}>
                 <Statistic.Group widths='four'>
                    <Statistic>
                      <Statistic.Value>22</Statistic.Value>
                      <Statistic.Label>Saves</Statistic.Label>
                    </Statistic>

                    <Statistic>
                      <Statistic.Value text>
                        Three
                        <br />
                        Thousand
                      </Statistic.Value>
                      <Statistic.Label>Signups</Statistic.Label>
                    </Statistic>

                    <Statistic>
                      <Statistic.Value>
                        <Icon name='plane' />5
                      </Statistic.Value>
                      <Statistic.Label>Flights</Statistic.Label>
                    </Statistic>

                    <Statistic>
                      <Statistic.Value>
                        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
                        42
                      </Statistic.Value>
                      <Statistic.Label>Team Members</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                 </Container>
            </div>
            
        );
    }
}
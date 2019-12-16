import React, {Component} from 'react';
import { Tab, Menu, Grid, Container, Statistic, Icon, Image, Segment, GridColumn, Divider, Button} from 'semantic-ui-react'
import Header from "../Header";

export default class Bookmarks extends Component{
    
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
                                    <h1 style={{ fontSize:"40px", fontWeight:"200%"}}>Bookmarks</h1>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                         </Grid.Column>
                     </Grid>
                 </Container>
                 <Container style={{marginTop:"3%"}}>
                    <Segment>
                        <Grid>
                            <Grid.Column floted="left" Divider vertical>
                                <Icon size="big" name="bookmark"></Icon>
                            </Grid.Column>
                            <Divider vertical></Divider>
                            <Grid.Column width={12}>
                                <h2><b>Offline Reading is here.</b></h2>
                            </Grid.Column>
                            <Grid.Column width={2} style={{paddingLeft:"70px"}}>
                                <Button color="black">Upgrade</Button>
                            </Grid.Column>
                        </Grid>
                       
                    </Segment>
                 </Container>
            </div>
            
        );
    }
}
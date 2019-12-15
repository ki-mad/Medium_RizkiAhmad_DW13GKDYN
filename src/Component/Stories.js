import React, {Component} from 'react';
import { Tab, Menu, Grid, Container, Button} from 'semantic-ui-react'
import Header from "../Header";

export default class Stories extends Component{
    
    render() {
        const panes = [
            {
              menuItem: 'Drafts',
              render: () => <Tab.Pane attached={false}>You have no drafts

              Write on the go with our iOS and Android apps!</Tab.Pane>,
            },
            {
              menuItem: 'Published',
              render: () => <Tab.Pane attached={false}>You haven’t published any public stories yet.</Tab.Pane>,
            },
          ]
          
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
                                    <h1 style={{ fontSize:"40px"}}>Your Stories</h1>
                                </Menu.Item>
                            </Menu.Menu>
                            <Menu.Menu position='right'>
                                <Menu.Item style={{paddingRight:"4px",marginRight: "0px"}}>
                                    <Button basic color="black" >Import a story</Button>
                                </Menu.Item>
                                <Menu.Item>
                                    <Button basic color="green" >Write a story</Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                         </Grid.Column>
                     </Grid>
                 </Container>
                 <Container style={{marginTop:"3%"}}>
                    <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                 </Container>
            </div>
            
        );
    }
}
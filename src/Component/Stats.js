import React, {Component} from 'react';
import { Tab, Menu, Grid, Container, Statistic, Icon, Image} from 'semantic-ui-react'
import Header from "../Header";

export default class Stats extends Component{
    
    render() {
        const panes = [
          { menuItem: '0 (Views 30 Days)', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
          { menuItem: '0 (Views 30 Days)', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
          { menuItem: '0 (Views 30 Days)', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
        ]

        const panesbottom = [
          {
            menuItem: 'Tab 1',
            render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
          },
          {
            menuItem: 'Tab 2',
            render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
          },
          {
            menuItem: 'Tab 3',
            render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
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
                                    <h1 style={{ fontSize:"40px", fontWeight:"200%"}}>Stats</h1>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                         </Grid.Column>
                     </Grid>
                 </Container>
                 <Container>
                 <div style={{paddingLeft:"14px", fontSize:"20px", color:"gray"}}>
                   <span style={{float:"left"}}>
                    Click story below to view detailed stats
                   </span>
                   <span style={{float:"right"}}>
                      Learn more about using stat
                   </span>
                 </div>
                 </Container>
                 <Container style={{marginTop:"3%"}}>
                    <Tab panes={panes} style={{paddingLeft:"14px"}} />
                 </Container>
                 <Container style={{marginTop:"15%"}}>
                  <Tab menu={{ secondary: true, pointing: true }} panes={panesbottom} style={{paddingLeft:"14px"}} />
                 </Container>
            </div>
            
        );
    }
}
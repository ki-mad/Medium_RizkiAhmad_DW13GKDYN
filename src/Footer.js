import React, {Component} from 'react';
import { Grid, Container, List, Divider} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Regis from './Regis';

export default class Footer extends Component {
    render(){
        return(
            <div>
                 <Container fluid>
                 <Divider/>
                <Grid >
                    <Grid.Column style={{marginRight:"20%"}}>
                    <List bulleted horizontal floated="right">
                        <List.Item as='a' style={{color:"black"}}>About OneZero</List.Item>
                        <List.Item as='a'style={{color:"black"}}>About Medium</List.Item>
                        <List.Item as='a'style={{color:"black"}}>Terms</List.Item>
                        <List.Item as='a'style={{color:"black"}}>Privacy</List.Item>
                    </List>
                    </Grid.Column>
                </Grid>
            </Container>
            </div>
        );
    }
}
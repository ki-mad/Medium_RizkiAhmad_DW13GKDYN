import React, {Component} from 'react';
import { Menu, Input, Icon, Grid, Container, Dropdown, Image, Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Regis from './Regis';

export default class Header extends Component{
    render() {
        const trigger = (
            <span>
              <Image avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/yesmeck/128.jpg" size="mini"/>
            </span>
          )

         return(
            <Container>
                <Grid >
                    <Grid.Column>
                        <Menu secondary>
                            <Menu.Menu>
                                <Menu.Item>
                                    <Link to="/Home" style={{color:"black"}}><h1 style={{fontFamily:"Marat Sans Semibold"}}>Medium</h1></Link>
                                </Menu.Item>
                            </Menu.Menu>
                            <Menu.Menu position='right'>
                                <Menu.Item>
                                    <Input icon='search' placeholder='Search...' />
                                </Menu.Item>
                                <Menu.Item>
                                    <div>
                                        <Link to="#"><Icon name="bell outline" color="black" size="large"></Icon></Link>
                                    </div>
                                </Menu.Item>
                                <Menu.Item>
                                    <Regis/>
                                </Menu.Item>
                                <Menu.Item>
                                    <Dropdown pointing
                                    trigger={trigger}
                                    icon={null}
                                    >
                                        <Dropdown.Menu style={{marginRight:"-70px"}}>
                                            <Dropdown.Item>
                                                <Item.Group>
                                                    <Item floated="Left">
                                                        <Item.Image size='mini' avatar src='https://s3.amazonaws.com/uifaces/faces/twitter/yesmeck/128.jpg' />
                                                        <Item.Content>
                                                            <Item.Header as='a' style={{fontSize:"14px"}}>Medium</Item.Header>
                                                            <Item.Description content="blablabla" />
                                                        </Item.Content>
                                                    </Item>
                                                </Item.Group>
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#" >Become a member</Dropdown.Item>
                                            <Dropdown.Item href="NewStory" text='New Story'/>
                                            <Dropdown.Item href='Stories' text='Stories'/>
                                            <Dropdown.Item href='Stats' text='Stats'/>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href='Bookmarks' text='Bookmarks'/>
                                            <Dropdown.Item text='Profile'/>
                                            <Dropdown.Item text='Setting'/>
                                            <Dropdown.Item text='Help'/>
                                            <Dropdown.Item text='Sign out'/>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Grid.Column>
                </Grid>
            </Container>
         );
     }
}
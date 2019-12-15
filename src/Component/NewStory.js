import React, {Component} from 'react';
import { Menu, Input, Icon, Grid, Container, Dropdown, Image, Item, Button, Divider, Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class NewStory extends Component{
    render() {
        const trigger = (
            <span>
              <Image avatar src="https://s3.amazonaws.com/uifaces/faces/twitter/yesmeck/128.jpg" size="mini"/>
            </span>
          )

         return(
             <div>
                <Container>
                    <Grid >
                        <Grid.Column>
                            <Menu secondary>
                                <Menu.Menu>
                                    <Menu.Item>
                                        <Link to="/Home" style={{color:"black"}}><h1><Icon size="large" name="medium"></Icon></h1></Link>
                                    </Menu.Item>
                                    <Menu.Item style={{fontFamily:"Marat Sans Semibold", paddingLeft:"0px", marginLeft:"0px"}}>
                                        Draft
                                    </Menu.Item>
                                </Menu.Menu>
                                <Menu.Menu position='right'>
                                    <Menu.Item>
                                        <Button color="green">Publish</Button>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="#" ><Icon color="black" size="large" name="ellipsis horizontal"></Icon></Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <div>
                                            <Link to="#"><Icon name="bell outline" color="black" size="large"></Icon></Link>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Dropdown pointing
                                        trigger={trigger}
                                        icon={null}>
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
                                                <Dropdown.Item text='Story'/>
                                                <Dropdown.Item text='Stats'/>
                                                <Dropdown.Divider />
                                                <Dropdown.Item text='Bookmarks'/>
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
                <Container >
                    <Grid style={{marginTop:"8%"}}>
                        <Grid.Row>
                            <Grid.Column style={{marginLeft:"8%"}}>
                                <span>
                                    <Button circular icon="plus" color="white"></Button>
                                </span>
                                
                            </Grid.Column>
                            {/* <Divider vertical></Divider> */}
                            <Grid.Column style={{width:"70%", paddingLeft:"0px"}}>
                                <span>
                                    <Input fluid size="massive" transparent  placeholder="Title" />
                                </span>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column style={{marginLeft:"8%"}}>
                                <span>
                                    <Button circular icon="plus" color="white"></Button>
                                </span>
                            </Grid.Column>
                            <Grid.Column style={{width:"70%", paddingLeft:"0px"}}>
                                <span>
                                    <Input fluid size="big" transparent  placeholder='Tell your story' />
                                </span>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                       
                </Container>
            </div>
         );
     }
}
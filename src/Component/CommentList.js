import React, {Component} from 'react';
import { Container, Grid, Segment, Button, Icon, List, Image, Form} from 'semantic-ui-react'
import '../css/Article.css';

export default class CommentList extends Component {
    render() {
        return(
            <Segment>
                <Grid.Column>
                    <Image avatar size="mini" src={this.props.img}></Image>
                    <span style={{fontWeight:"100", marginLeft:"4%"}}>
                        {this.props.user}
                    </span>
                </Grid.Column>
                <Grid.Column>
                    <Form>
                        <p style={{fontSize:"18px", textAlign:"justify"}}>{this.props.content}</p>
                    </Form>
                </Grid.Column>
                <Grid.Column>
                    <div>
                        <span>
                            <Button style={{marginTop:"-5px"}} floated="left" size="small" circular icon='comments' />54k 
                            <List floated='right' horizontal>
                                <List.Item href='#' style={{color:"black"}}>{this.props.respon}</List.Item>
                                <List.Item href='#'><Icon name="bookmark"></Icon></List.Item>
                                <List.Item href='#'><Icon name="angle down"></Icon></List.Item>
                            </List>
                        </span>
                    </div>  
                </Grid.Column>
            </Segment>
        );
    }
}
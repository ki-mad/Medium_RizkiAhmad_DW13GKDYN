import React, {Component} from 'react';
import {Item} from 'semantic-ui-react'
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

export default class Bottomartikel extends Component {
    render(){
        return(
            <Item>
                <Item.Content style={{textAlign:"left"}}>
                    <Item.Meta style={{fontSize:"15px"}}>BASED ON YOUR READING HISTORY</Item.Meta>
                    <Item.Header><Link style={{color:"black"}} to={`article/${this.props.id}`}>{this.props.title}</Link></Item.Header>
                    <Item.Meta>{this.props.content}</Item.Meta>
                    <Item.Description>
                    {this.props.user}
                    </Item.Description>
                    <Item.Extra><Moment format="MMM DD, YYYY">{this.props.waktu}</Moment></Item.Extra>
                </Item.Content>
                    <Item.Image style={{width:"152px", height: "132px"}} src={this.props.image}/>
            </Item>
        );
    }
}
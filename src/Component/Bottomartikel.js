import React, {Component} from 'react';
import {Item} from 'semantic-ui-react'

export default class Bottomartikel extends Component {
    render(){
        return(
            <Item>
                <Item.Content style={{textAlign:"left"}}>
                    <Item.Meta style={{fontSize:"15px"}}>{this.props.info}</Item.Meta>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Meta>{this.props.subtitle}</Item.Meta>
                    <Item.Description>
                    {this.props.penulis}
                    </Item.Description>
                    <Item.Extra>{this.props.waktu}</Item.Extra>
                </Item.Content>

                <Item.Image size='small' src={this.props.img}/>
            </Item>
        );
    }
}
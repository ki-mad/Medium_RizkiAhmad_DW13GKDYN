import React, {Component} from 'react';
import {Item} from 'semantic-ui-react'

export default class Popular extends Component {
    render() {
        return(
            <Item.Group>
                <Item>
                <h1 style={{color:"gray", textAlign:"left"}}>{this.props.number}</h1>

                <Item.Content style={{paddingLeft:"10px", textAlign:"left"}}>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Meta>{this.props.penulis}</Item.Meta>
                    {/* <Item.Description>
                        
                    </Item.Description> */}
                    <Item.Extra>{this.props.waktu}</Item.Extra>
                </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}
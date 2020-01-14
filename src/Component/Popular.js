import React, {Component} from 'react';
import {Item} from 'semantic-ui-react';
import Moment from 'react-moment';

export default class Popular extends Component {
    render() {
        return(
            <Item.Group>
                <Item>
                <h1 style={{color:"gray", textAlign:"left"}}>{this.props.number}</h1>

                <Item.Content style={{paddingLeft:"10px", textAlign:"left"}}>
                    <Item.Header as='a'>{this.props.title}</Item.Header>
                    <Item.Meta>{this.props.author}</Item.Meta>
                    {/* <Item.Description>
                        
                    </Item.Description> */}
                    <Item.Extra><Moment format="MMM DD, YYYY">{this.props.time}</Moment></Item.Extra>
                </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}
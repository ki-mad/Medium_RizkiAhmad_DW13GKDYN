import React, {Component} from 'react';
import {Item} from 'semantic-ui-react'

export default class MiniArtikel extends Component{
    render() {
        return(
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={this.props.img} />

                    <Item.Content style={{textAlign:"left"}}>
                        <Item.Header as='a' style={{fontSize:"16px"}}>{this.props.title}</Item.Header>
                        <Item.Description>
                            <div>
                                <div style={{color:"black", fontSize:"12px"}}>
                                    {this.props.subtitle}
                                </div>
                                <div style={{fontSize:"12px"}}>
                                    <span>{this.props.info}</span>
                                </div>
                            </div>
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}
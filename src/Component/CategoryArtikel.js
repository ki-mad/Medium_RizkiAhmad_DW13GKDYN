import React, {Component} from 'react';
import {Item, Grid, Divider, Image} from 'semantic-ui-react'

export default class CategoryArtikel extends Component {
    render(){
        return(
            <div>
                <div>
                    <Divider style={{marginLeft:"32%", marginRight:"32%"}}/>
                </div>
                <Grid stackable style={{marginLeft:"32%", marginRight:"32%"}}>
                        <Grid.Row>
                            <Grid.Column >
                                <Item.Group divided unstackable style={{textAlign:"left"}}>
                                    <Item>
                                        <Item.Content>
                                            <Item.Header as='a'>{this.props.title}</Item.Header>
                                            <Item.Meta>{this.props.subtitle}</Item.Meta>
                                            <Item.Description>
                                                {this.props.penulis}
                                            </Item.Description>
                                            <Item.Extra>{this.props.waktu}</Item.Extra>
                                        </Item.Content>
                                        <Item.Image src={this.props.img} />
                                    </Item>
                                </Item.Group>
                            </Grid.Column>
                        </Grid.Row>
                </Grid>
            </div>
        );
    }
}
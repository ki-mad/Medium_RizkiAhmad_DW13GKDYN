import React, {Component} from 'react';
import {Item, Grid, Divider} from 'semantic-ui-react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';

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
                                            <Item.Header><Link style={{color:"black"}} to={`article/${this.props.id}`}>{this.props.title}</Link></Item.Header>
                                            <Item.Meta>{this.props.subtitle}</Item.Meta>
                                            <Item.Description>
                                                {this.props.author}
                                            </Item.Description>
                                            <Item.Extra><Moment format="MMM DD, YYYY">{this.props.waktu}</Moment></Item.Extra>
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
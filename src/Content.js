import React, {Component} from 'react';
import { Menu, Input, Button, Icon, Grid, Container, Dropdown, Image, Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Content extends Component {
    render() {
        return(
            <div>
                <Grid columns={3} style={{paddingLeft:"15%", paddingRight:"15%", height:"350px"}}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <article>
                                <div className="Artikel1">
                                    <Image src="https://cdn-images-1.medium.com/focal/416/151/49/43/1*V7Si4unlnDsQ03Hg674y_A.jpeg"></Image>
                                </div>
                                <div className="postContent" style={{textAlign:"left", marginLeft:"88px"}}>
                                    <div className="titleClamp" >
                                        <a href="#">
                                            <h3 style={{color:"black", fontSize:"22px"}}>The Joy of Being an Untethered Woman</h3>
                                        </a>
                                        <a href="#" style={{color:"gray", lineHeight:"28px"}}>
                                            <div >
                                                On sex, solitude, and female friendship
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <div style={{color:"black"}}>
                                            <a href="#" style={{color:"black"}}>
                                                Anna Graham Hunter
                                            </a> in 
                                            <a href="#" style={{color:"black"}}> Human Parts</a>
                                        </div>
                                        <div>
                                            <span><time>Feb 19, 2017 </time></span>
                                            <span>
                                                &#183; 
                                            </span>
                                            <span title="7 min read"> 7 min read
                                            </span>
                                            <span> <Icon name="star" size="small"></Icon></span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>1</Segment>
                            <Segment>1</Segment>
                        </Grid.Column>
                        <Grid.Column>
                        <article>
                                <div className="Artikel1">
                                    <Image src="https://cdn-images-1.medium.com/focal/416/151/68/24/1*972F2yYo2XoiORx2EOjT8Q.jpeg"></Image>
                                </div>
                                <div className="postContent" style={{textAlign:"left"}}>
                                    <div className="titleClamp" >
                                        <a href="#">
                                            <h3 style={{color:"black", fontSize:"22px"}}>The Joy of Being an Untethered Woman</h3>
                                        </a>
                                        <a href="#" style={{color:"gray", lineHeight:"40px"}}>
                                            <div >
                                                On sex, solitude, and female friendship
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <div style={{color:"black", paddingBottom:"0"}}>
                                            <a href="#" style={{color:"black"}}>
                                                Anna Graham Hunter
                                            </a> in 
                                            <a href="#" style={{color:"black"}}> Human Parts</a>
                                        </div>
                                        <div style={{paddingTop:"0"}}>
                                            <span><time>Feb 19, 2017 </time></span>
                                            <span>
                                                &#183; 
                                            </span>
                                            <span title="7 min read"> 7 min read
                                            </span>
                                            <span> <Icon name="star" size="small"></Icon></span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

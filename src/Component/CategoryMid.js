import React, {Component} from 'react';
import {Grid,Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
export default class CategoryMid extends Component {
    render() {
        return(
            <div>
                <Grid style={{marginLeft:"20%", marginRight:"15%", marginBottom:"40px"}}>
                    <Grid.Row columns={2} style={{height:"382px", maxWidth: "1192px"}}>

                        <Grid.Column width={9} style={{padding:"0"}}>
                            <Image src= {this.props.img1} height="354px" width="693.867px"></Image> 
                        </Grid.Column >

                        <Grid.Column  width={6} color={this.props.warna1} style={{margin:"0px 0px", alignItem:"center", textAlign:"center"}}>
                            <div style={{paddingTop:"50px", marginBottom:"24px", paddingRight:"40px", paddingLeft:"40px"}}>
                               <div style={{marginBottom:"8px"}}>
                                    <Link to="#">
                                        <h1 style={{color:"black"}}>{this.props.title1}</h1>
                                    </Link>
                               </div>
                                <div style={{marginBottom:"24px"}}>
                                    <span style={{fontSize:"15px"}}>{this.props.subtitle1}</span>
                                </div>
                                <div style={{marginBottom:"4px"}}>
                                   {this.props.name1}
                                </div>
                                <div>
                                       {this.props.info1}
                                </div>   
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2} style={{height:"382px", maxWidth: "1192px"}}>

                        <Grid.Column  color={this.props.warna2} width={6} style={{padding:"0px", margin:"0px 0px", alignItem:"center", justifyContent:"center", textAlign:"center"}}>
                            <div style={{paddingTop:"50px", marginTop:"50px", marginBottom:"24px", paddingRight:"40px", paddingLeft:"40px"}}>
                                <div style={{marginBottom:"8px"}}>
                                        <Link to="#">
                                            <h1 style={{color:"black"}}>{this.props.title2}</h1>
                                        </Link>
                                </div>
                                <div style={{marginBottom:"24px"}}>
                                    <span style={{fontSize:"15px"}}>{this.props.subtitle2}</span>
                                </div>
                                <div style={{marginBottom:"4px"}}>
                                    {this.props.name2}
                                </div>
                                <div>
                                    {this.props.info2}
                                </div>   
                            </div>
                        </Grid.Column >

                        <Grid.Column  width={9} style={{padding:"0", marginTop:"0"}}>
                            <Image src={this.props.img2} width="693.867px"></Image>
                            
                        </Grid.Column>
                    </Grid.Row>
                    
                </Grid>
            </div>
        );
    }
}


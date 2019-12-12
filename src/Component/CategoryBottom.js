import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class CategoryBottom extends Component {
    render() {
        return(
            <div>
                <Grid style={{marginLeft:"20%", marginRight:"15%", marginBottom:"40px"}}>
                    <Grid.Row columns={1} style={{height:"250px", maxWidth: "1192px"}}>
                        <Grid.Column  width={15} color="yellow" style={{margin:"0px 0px"}}>
                             <div style={{paddingTop:"30px", marginBottom:"24px", paddingRight:"40px", paddingLeft:"22%", textAlign:"Left"}}>
                               <div style={{marginBottom:"8px"}}>
                                    <Link to="#">
                                        <h1 style={{color:"black"}}>"We Have a few new things to share."</h1>
                                    </Link>
                               </div>
                                <div style={{marginBottom:"24px"}}>
                                    <span style={{fontSize:"15px"}}>- Damon Beres</span>
                                </div>
                                <div style={{marginBottom:"4px"}}>
                                   Welcome to a Refreshed OneZero
                                </div>
                                <div>
                                       Dec 3 - 2 min read
                                </div>   
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
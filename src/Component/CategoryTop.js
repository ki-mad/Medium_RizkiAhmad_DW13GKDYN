import React, {Component} from 'react';
import { Grid,Image, Button} from 'semantic-ui-react'

export default class CategoryTop extends Component {
    render() {
        return(
            <div>
            <Grid columns={3} style={{height:"180px", marginLeft:"20%", marginRight:"15%"}}> 
                 <Grid.Row style={{padding:"40px 40px"}}>
                        <Grid.Column style={{width:"270px", position:"bottom"}}>
                                {/* <Image src="https://miro.medium.com/max/540/1*cw32fIqCbRWzwJaoQw6BUg.png" width="270" height="61"></Image>  */}
                                <h1 style={{fontSize:"49px"}}>{this.props.category_name}</h1>
                        </Grid.Column>
                        <Grid.Column style={{textAlign:"left", width:"490px"}}>
                            <div style={{display: "flex", marginBottom:"auto", marginTop:"8px"}}>
                                <h3 style={{fontSize:"18px"}}>The front lines of the future. A Medium publication about tech and science.</h3>
                            </div>
                        </Grid.Column>
                        <Grid.Column position="bottom" width={4} style={{marginTop:"20px"}}>
                                <Button floated="right">Follow</Button>
                        </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
}
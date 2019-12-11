import React, {Component} from 'react';
// import {Modal, Backdrop, Fade, TextField} from '@material-ui/core'
import { Button, Form, Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import Login from './Login'

export default class Regis extends Component{
  state = { show: false };

  showModal = () => {
      this.setState({ show: true });
  };

  hideModal = () => {
      this.setState({ show: false });
  };

     render() {
         return(
          <Modal trigger={<Button basic color='black'>
          Sign in
        </Button>} closeIcon>
                  <div >
                      <div style={style.flex}>
                          <div style={style.side}>
                              <div>
                                  <img src="https://miro.medium.com/max/214/1*4A5l12K8ize1400kV83dPw.png" alt="left"/>
                              </div>
                          </div>
                          <div style={style.midflex}>
                              <div>
                                <div style={{padding:"5px"}}>
                                    <h3>Join Medium.</h3>
                                </div>
                                <div>
                                    <p style={{fontSize:"11px", padding:"10px"}}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topic that you love.</p>
                                </div>
                                <div>
                                  <Form style={{padding:"20px"}}>
                                      <Form.Field>
                                        <input size="small" placeholder='Your Username' type='text' />
                                      </Form.Field>
                                      <Form.Field>
                                        <input placeholder='Password' type='password' />
                                      </Form.Field>
                                      <Form.Field>
                                        <input placeholder='Your E-mail' type='text' />
                                      </Form.Field>
                                      <Button  size='small' color='black' type='submit'>Registration</Button>
                                    </Form>
                                </div>
                                <div>
                                  <p style={{padding:"20px"}}>
                                    <b style={{fontSize:"14px"}}>Already have an account ?</b> <p onClick={this.hideModal}><Login/></p>
                                  </p>
                                </div>
                                <div>
                                  <p style={{color:'gray', fontSize:"12px"}}>
                                    To make Medium work, we log user data and share it with service providers. Clik "Sign Up" above to accept Medium <Link to="#" style={{color:'gray'}}><u>Terms of Service</u></Link> & <Link to="#" style={{color:'gray'}}><u>Privacy police</u></Link> 
                                  </p>
                                </div>
                              </div>
                          </div>
                          <div style={style.flexside}>
                          <div>
                                  <img src="https://miro.medium.com/max/214/1*XVLaTKHOGlnXqvnPe2Ahaw.png" alt="right"/>
                              </div> 
                          </div>
                      </div>
                  </div>
        </Modal>
            
         );
     }
 }

const style ={
    flex: {
        display:"flex", 
        flexDirection:"row", 
        justifyContent: "center", 
        alignItems: "center"
    },

    flexside: {
        width:"214px", 
        height:"550px",
    },

    title: {
        textAlign:"center",
        fontSize: "30px",
        
    },

    midflex: {
        display:"flex", 
        flexDirection:"column", 
        justifyContent: "center", 
        alignItems: "center",
        width: "475px",
        textAlign: "center",
        paddingTop : "30px",
        paddingBottom: "44px",
        paddingRight: "56px",
        paddingLeft: "56px"
    }

};


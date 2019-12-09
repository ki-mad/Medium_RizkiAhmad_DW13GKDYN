import React, {Component} from 'react';
// import {Modal, Backdrop, Fade, TextField} from '@material-ui/core'
import { Button, Form, Modal} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class Regis extends Component{

     render() {
         return(
          <Modal trigger={<Button>Try me Registrasi</Button>} closeIcon>
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
                                    <b style={{fontSize:"14px"}}>Already have an account ?</b> <Link to="#" style={{color:'green'}}>Sign in</Link>
                                  </p>
                                </div>
                                <div>
                                  <p style={{color:'gray', fontSize:"12px"}}>
                                    To make Medium work, we log user data and share it with service providers. Clik "Sign Up" above to accept Medium <a href="#" style={{color:'gray'}}><u>Terms of Service</u></a> & <a href="#" style={{color:'gray'}}><u>Privacy police</u></a> 
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


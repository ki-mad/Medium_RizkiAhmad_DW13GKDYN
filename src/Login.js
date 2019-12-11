import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, Modal, Icon} from 'semantic-ui-react'

export default class Login extends Component{

    userData;

    constructor(props){
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email:'',
            password:''
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value})
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            email:'',
            password:''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                email:'',
                password:''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

     render() {
         return(
          <Modal trigger={<Link>Sign in</Link>} closeIcon>
                  <div >
                      <div style={style.flex}>
                          <div style={style.midflex}>
                              <div>
                                <div style={{padding:"5px"}}>
                                    <h1 style={{fontFamily:'Times New Roman'}}>Sign in with email</h1>
                                </div>
                                <div>
                                    <p style={{fontSize:"12.5px", padding:"10px", color:"gray"}}>Enter the email address associated with your account, and we'll send a magic link to your inbox.</p>
                                </div>
                                <div>
                                    <Form onSubmit={this.onSubmit} style={{padding:"25px"}}>
                                        <Form.Field>
                                            <input placeholder='Your E-mail' type='text' value={this.state.email} onChange={this.onChangeEmail}/>
                                        </Form.Field>
                                        <Form.Field>
                                            <input placeholder='Password' type='password' value={this.state.password} onChange={this.onChangePassword}/>
                                        </Form.Field>
                                        <Button  size='small' color='black' type='submit'>Continue</Button>
                                    </Form>
                                </div>
                                <div>
                                  <p style={{padding:"15px"}}>
                                    <Link to="/Regis" style={{color:'green'}}><Icon name='angle left' />All Sign in options</Link>
                                  </p>
                                </div>
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

    title: {
        textAlign:"center",
        
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
        paddingLeft: "56px",
        height: "550px"
    }

};


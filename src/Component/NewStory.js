import React, {Component} from 'react';
import { Container, Grid, Segment, Button, Icon, List, Image, Form} from 'semantic-ui-react'
import Header from '../Header';
import {Link} from 'react-router-dom';
import '../css/Article.css';
import CommentList from '../Component/CommentList';

export default class NewStory extends Component {
    render() {
        return(
            <div>
                <Container fluid>
                    <Header/>
                </Container>
            </div>
        );
    }
}
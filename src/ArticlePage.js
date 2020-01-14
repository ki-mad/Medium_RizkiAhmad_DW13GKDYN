import React, {Component} from 'react';
import { Container, Grid, Menu,Responsive, Image, List, Divider} from 'semantic-ui-react'
import Header from './Header';
import {Link} from 'react-router-dom';
import ArticleContent from './Component/ArticleContent';
import Follow from './Component/Follow';
import RelatedArticle from './Component/RelatedArticle';
import { connect } from 'react-redux';
import { getArticlePage } from "./_actions/articlePage"

class ArticlePage extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     article_content: []
        // }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // axios.get(`http://localhost:5000/api/v1/articleComment/${id}`).then(res => {
        //     this.setState({ article_content: res.data })   
        // }
        // )

        this.props.dispatch(getArticlePage(id));
    }
    

     render() {
         const article_content = this.props.articlePage.dataArticlePage;
        //  const ids = this.props.category_id
        console.log(article_content)
         return(
            <div>
                 <Container fluid  >
                     <div >
                        <Header/>
                        <Divider/>
                        <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                            <Container>
                                <Responsive>
                                    <Grid >
                                        <Grid.Column>
                                            <Menu secondary compact>
                                                <Menu.Menu>
                                                    <Menu.Item>
                                                        <Link><Image alt="Mission.org" class="" src="https://miro.medium.com/max/432/1*IPEsgX_bZKP_7OubdnI7-Q.png" width="216" height="36"></Image></Link>
                                                    </Menu.Item>
                                                </Menu.Menu>
                                            </Menu>
                                            <List celled horizontal>
                                                        <List.Item><Link style={{color:"gray"}}>MISSION ORIGINAL</Link></List.Item>
                                                        <List.Item><Link style={{color:"gray"}}>SUBSCRIBE</Link></List.Item>
                                            </List>
                                        </Grid.Column>
                                    </Grid>
                                </Responsive>
                            </Container>
                        </div>
                        <Container> 
                                <ArticleContent
                                image={article_content.image}
                                content={article_content.content}
                                />
                            <Follow/>
                        </Container>
                        {article_content.category_id && <RelatedArticle
                                categoryid = {article_content.category_id}
                            />}
                            
                                {/* {console.log(article_content.id)} */}

                     </div>
                 </Container>
            </div>
         );
     }
 }

 const mapStateToProps = state => {
    return {
      articlePage: state.articlePage
    };
  }

export default connect(mapStateToProps)(ArticlePage);
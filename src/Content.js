import React, {Component, createRef} from 'react';
import {Icon, Grid,Image, Sticky, Ref, Rail , Item, Container, Divider, List} from 'semantic-ui-react'
import MiniArtikel from './Component/MiniArtikel';
import Bottomartikel from './Component/Bottomartikel';
import Popular from './Component/Popular';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import {getArticles, getLatestArticles} from "./_actions/article";


class Content extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     bottom_article: [],
        //     popular: []
        // };
    }

    componentDidMount() {
        this.props.dispatch(getArticles());
        this.props.dispatch(getLatestArticles());

        // axios.get(`http://localhost:5000/api/v1/latest_article`).then(res => {
        //   // this.setState({categories: res.data})
        //   this.setState({ popular: res.data })
        // })
    }

    contextRef = createRef()
    render() {
        const bottomarticle = this.props.article.dataArticle;
        const popular = this.props.article.dataLatestArticle;
        
        const miniartikel = [
            {
               id: 1,
               title: "Your Family's Behavioral Patterns Are In Your DNA",
                subtitle: "Anna Graham Hunter in Human Parts",
                info: "Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/focal/100/100/50/51/0*VahBqXSpvucxy1JF"
            },
            {
                id: 2,
                title: "Your Family's Behavioral Patterns Are In Your DNA",
                 subtitle: "Anna Graham Hunter in Human Parts",
                 info: "Feb 19 2017 - 7 min read",
                 img: "https://cdn-images-1.medium.com/focal/100/100/50/51/0*VahBqXSpvucxy1JF"
            },
            {
                id: 3,
                title: "Your Family's Behavioral Patterns Are In Your DNA",
                 subtitle: "Anna Graham Hunter in Human Parts",
                 info: "Feb 19 2017 - 7 min read",
                 img: "https://cdn-images-1.medium.com/focal/100/100/50/51/0*VahBqXSpvucxy1JF"
            },
        ]

       let number = 1;
       
        return(
            <div>
                <Grid columns={3} style={{paddingLeft:"20%", paddingRight:"20%", height:"350px"}}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <article>
                                <div className="Artikel1">
                                    <Image src="https://miro.medium.com/max/2000/1*-T8oo_JoKkMxfnPKLt_Ciw.jpeg" height="155vh" width="400vh"></Image>
                                </div>
                                <div className="postContent" style={{textAlign:"left", marginLeft:"70px"}}>
                                    <div className="titleClamp" >
                                        <Link to="/ArticlePage">
                                            <h3 style={{color:"black", fontSize:"22px"}}>If You Only Read A Few Books In 2018, Read These</h3>
                                        </Link>
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
                                <Grid.Row>
                                    {miniartikel.map(item => 
                                        <MiniArtikel
                                            title={item.title}
                                            subtitle={item.subtitle}
                                            info={item.info}
                                            img={item.img}
                                            />)}
                                </Grid.Row>
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
                            <article>
                                <div>
                                    <a href="#" style={{color:"green" ,float:"right", paddingRight:"23%", paddingTop:"10%"}}><strong>SEE ALL FEATURED</strong><Icon name="angle right"></Icon> </a>
                                </div>
                            </article>
                        </Grid.Column>
                    </Grid.Row>

                    <Container>
                        <Divider />
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={5}>
                                  <Grid.Row>
                                      
                                  <Ref innerRef={this.contextRef}>
                                      <Rail>
                                        <Sticky context={this.contextRef}>
                                        <div style={{marginTop:"10%"}}>
                                            <h3>Latest Article On Medium</h3>
                                            <Divider/>
                                        </div>
                                        {popular.reverse().slice(0,6).map(item => 
                                                    <Popular
                                                        title={item.title}
                                                        author={item.userId.fullname}
                                                        time={item.time}
                                                        number={number++}
                                                        />)}
                                        <div>
                                            <Divider/>
                                            <List horizontal link>
                                                <List.Item href='#'>Help</List.Item>
                                                <List.Item href='#'>Status</List.Item>
                                                <List.Item href='#'>Writers</List.Item>
                                                <List.Item href='#'>Blog</List.Item>
                                                <List.Item href='#'>Careers</List.Item>
                                                <List.Item href='#'>Privacy</List.Item>
                                                <List.Item href='#'>Terms</List.Item>
                                                <List.Item href='#'>About</List.Item>
                                            </List>
                                        </div>
                                        </Sticky>
                                      </Rail>
                                    </Ref>
                                    
                                  </Grid.Row>
                                </Grid.Column>
                                <Grid.Column width={10}>
                                <Item.Group>
                                    {bottomarticle.map(item => 
                                            <Bottomartikel
                                                id={item.id}
                                                title={item.title}
                                                content={item.content}
                                                image={item.image}
                                                waktu={item.waktu}
                                                user={item.userId.fullname}
                                                penulis={item.penulis}
                                                />)}
                                </Item.Group>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      article: state.article
    };
  };
  
export default connect(mapStateToProps)(Content);

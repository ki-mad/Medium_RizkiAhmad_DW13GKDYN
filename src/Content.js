import React, {Component, createRef} from 'react';
import {Icon, Grid,Image, Sticky, Ref, Rail , Item, Container, Divider, List} from 'semantic-ui-react'
import MiniArtikel from './Component/MiniArtikel';
import Bottomartikel from './Component/Bottomartikel';
import Popular from './Component/Popular';

export default class Content extends Component {
    contextRef = createRef()
    render() {
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

        const bottomartikel = [
            {
                id:1,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:2,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:3,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:4,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:5,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:6,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:7,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            },
            {
                id:8,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://cdn-images-1.medium.com/fit/c/152/156/1*hNRK_zr3qrTORJXD3pwuZA.png"
            }
        ]

        const popular = [
            {
                id:1,
                number: "01",
                title:" The Abusyrd Story Behind China's Biggest Bank Robbery",
                penulis: "David Gauvey Herbert in Marker",
                waktu : "Dec 4 - 28 min read"
            },
            {
                id:2,
                number: "02",
                title:" The Abusyrd Story Behind China's Biggest Bank Robbery",
                penulis: "David Gauvey Herbert in Marker",
                waktu : "Dec 4 - 28 min read"
            },
            {
                id:3,
                number: "03",
                title:" The Abusyrd Story Behind China's Biggest Bank Robbery",
                penulis: "David Gauvey Herbert in Marker",
                waktu : "Dec 4 - 28 min read"
            },
            {
                id:4,
                number: "04",
                title:" The Abusyrd Story Behind China's Biggest Bank Robbery",
                penulis: "David Gauvey Herbert in Marker",
                waktu : "Dec 4 - 28 min read"
            },
            {
                id:5,
                number: "05",
                title:" The Abusyrd Story Behind China's Biggest Bank Robbery",
                penulis: "David Gauvey Herbert in Marker",
                waktu : "Dec 4 - 28 min read"
            }
        ]
        

        return(
            <div>
                <Grid divided='vertically' columns={3} style={{paddingLeft:"15%", paddingRight:"15%", height:"350px"}}>
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
                                            <h3>Popular On Medium</h3>
                                            <Divider/>
                                        </div>
                                        {popular.map(item => 
                                                    <Popular
                                                        title={item.title}
                                                        id={item.id}
                                                        penulis={item.penulis}
                                                        waktu={item.waktu}
                                                        number={item.number}
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
                                    {bottomartikel.map(item => 
                                            <Bottomartikel
                                                title={item.title}
                                                subtitle={item.subtitle}
                                                info={item.info}
                                                img={item.img}
                                                waktu={item.waktu}
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

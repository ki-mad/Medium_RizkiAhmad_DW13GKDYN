import React, {Component} from 'react';
import { Container, Grid} from 'semantic-ui-react'
import Header from './Header';
import Footer from './Footer';
import CategoryTop from './Component/CategoryTop';
import CategoryMid from './Component/CategoryMid';
import CategoryBottom from './Component/CategoryBottom';
import CategoryArtikel from './Component/CategoryArtikel';

export default class CategoryPage extends Component{

     render() {
        const categorymid = [
            {
                id:1,
                img1: "https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg",
                img2: "https://miro.medium.com/max/1512/1*MDxT8MJL3DmelDMv3-gd9A.gif",
                title1: "The Influencer and the Hit Man",
                title2: "A Googler Explains Exactly How the Pixel 4 Caputers the Night Sky",
                subtitle1:"How a years-long domain name feud ended in a bloddy shootout",
                subtitle2: "We went stargazing with project manager Alex Schiffhauer to learn more about the new phone's asrophotograpy mode",
                name1: "Ian Frisch",
                name2: "Aaron Gell",
                info1:"Dec 10 - 24 min read",
                info2:"Dec - 13 min read",
                warna1: "blue",
                warna2:"white"
            },
            {
                id:2,
                img1: "https://miro.medium.com/max/1512/1*jOvu1hK1XTrBswWU7hHcMg.jpeg",
                img2: "https://miro.medium.com/max/1512/1*MDxT8MJL3DmelDMv3-gd9A.gif",
                title1: "The Influencer and the Hit Man",
                title2: "A Googler Explains Exactly How the Pixel 4 Caputers the Night Sky",
                subtitle1:"How a years-long domain name feud ended in a bloddy shootout",
                subtitle2: "We went stargazing with project manager Alex Schiffhauer to learn more about the new phone's asrophotograpy mode",
                name1: "Ian Frisch",
                name2: "Aaron Gell",
                info1:"Dec 10 - 24 min read",
                info2:"Dec - 13 min read",
                warna1: "purple",
                warna2:"white"
            }
        ]

        const categoryartikel = [
            {
                id:1,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://miro.medium.com/max/756/1*uNgmHEUZHeBejN0JKd_m8A.gif"
            },
            {
                id:2,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://miro.medium.com/max/756/1*uNgmHEUZHeBejN0JKd_m8A.gif"
            },
            {
                id:3,
                info:"BASED ON YOUR READING HISTORY",
                title:"Concepts to become an advanced React Developer",
                subtitle:"Increase you react level by using these techniques!",
                penulis:"Dhanraj Acharya in wineofbits",
                waktu:"Feb 19 2017 - 7 min read",
                img: "https://miro.medium.com/max/756/1*uNgmHEUZHeBejN0JKd_m8A.gif"
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
         return(
             <div>
                 <Container fluid  >
                     <div style={{boxShadow:"rgba(0, 0, 0, 0.05) 0px 4px 12px 0px"}}>
                     <Header/>
                     </div>
                 </Container>
                 <Container fluid style={{marginTop:"15px"}}>
                     <Container fluid >
                        <CategoryTop/>
                        {categorymid.map(item => 
                        <CategoryMid
                            title1={item.title1}
                            title2={item.title2}
                            subtitle1={item.subtitle1}
                            subtitle2={item.subtitle2}
                            name1={item.name1}
                            name2={item.name2}
                            info1={item.info1}
                            info2={item.info2}
                            img1={item.img1}
                            img2={item.img2}
                            warna1={item.warna1}
                            warna2={item.warna2}
                        />)}
                        <CategoryBottom/>
                 </Container>
                 <Container fluid>
                        {categoryartikel.map(item => 
                        <CategoryArtikel
                            title={item.title}
                            subtitle={item.subtitle}
                            img={item.img}
                            waktu={item.waktu}
                            penulis={item.penulis}
                        />)}
                        <Footer/>
                 </Container>
                 </Container>
                 
                       
            </div>
         );
     }
 }
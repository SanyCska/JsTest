import React, { Component } from 'react'
import axios from 'axios'
import NewsBlock from './NewsBlock';

class News extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             news: []
        }
    }

    componentDidMount(){
        let api_key = '2c4377d92b6f4bcb9b0a38559c91a12c';
        let url = 'https://newsapi.org/v2/everything?q=javascript&from=2020-17-05&sortBy=publishedAt&apiKey=' + api_key;
        axios.get(url)
        .then(response => {
            console.log(response.data.articles)
            this.setState({news: response.data.articles})
        })
        .catch(error => {
            console.log(error)
        })
        
    }
    

    render() {
        const {news} = this.state;
        // debugger
        // const newsList = 
        // const newsList = newsResponse.map(one_new => <NewsBlock newsBlock={one_new}></NewsBlock>)
        // const newsList = 'News'
        return (
            <div>
                {
                    news.length ?
                    news.map((one_new, index) => <NewsBlock key={index} newsBlock={one_new} ></NewsBlock>) :
                    null
                } 
            </div>
        )
    }
}

export default News





// class News {

//     constructor() {

//         var request = new XMLHttpRequest();
//         let api_key = '2c4377d92b6f4bcb9b0a38559c91a12c';
//         let url = 'https://newsapi.org/v2/everything?q=javascript&from=2020-04-03&sortBy=publishedAt&apiKey=' + api_key;

//         // Open a new connection, using the GET request on the URL endpoint
//         request.open('GET', url, true);

//         request.onload = function () {
//             let html = '';
//             let data = JSON.parse(this.responseText);

//             console.log(data.articles);

//             if (request.status >= 200 && request.status < 400) {
//                 data.articles.forEach(function (news_block, iterator) {
//                     if (iterator < 10) {
//                         html += `
//                         <div class="innerNews">
//                             <div class="date">${news_block.publishedAt}</div>
//                             <div class="author">${news_block.author}</div>
//                             <div class="descr"><a href=${news_block.url}>${news_block.title}</a></div>
//                         </div>
//                         `
//                     } else {
//                         return;
//                     }

//                 });

//             } else {
//                 console.log('error')
//             }


//             let results = document.getElementById('listNews');
//             results.innerHTML += html;
//         }
//         request.send()
//     }

// }

// const news = new News();

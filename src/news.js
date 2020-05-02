export default class News {

    constructor() {
        // const NewsAPI = require('newsapi');
        // const newsapi = new NewsAPI('2c4377d92b6f4bcb9b0a38559c91a12c');
        // // To query /v2/top-headlines
        // // All options passed to topHeadlines are optional, but you need to include at least one of them
        // newsapi.v2.topHeadlines({
        //     q: 'bitcoin',
        //     category: 'business',
        //     language: 'en',
        //     country: 'us'
        // }).then(response => {
        //     console.log(response);
        // /*
        //     {
        //     status: "ok",
        //     articles: [...]
        //     }
        // */
        // });

        var request = new XMLHttpRequest();
        let api_key = '2c4377d92b6f4bcb9b0a38559c91a12c';
        let url = 'https://newsapi.org/v2/everything?q=javascript&from=2020-04-02&sortBy=publishedAt&apiKey=' + api_key;

        // Open a new connection, using the GET request on the URL endpoint
        request.open('GET', url, true);

        request.onload = function () {
            let html = '';
            let data = JSON.parse(this.responseText);

            console.log(data.articles);

            if (request.status >= 200 && request.status < 400) {
                data.articles.forEach(function (news_block, iterator) {
                    if (iterator < 10) {
                        html += `
                        <div class="innerNews">
                            <div class="date">${news_block.publishedAt}</div>
                            <div class="author">${news_block.author}</div>
                            <div class="descr"><a href=${news_block.url}>${news_block.title}</a></div>
                        </div>
                        `
                    } else {
                        return;
                    }

                });

            } else {
                console.log('error')
            }


            let results = document.getElementById('listNews');
            results.innerHTML += html;
        }

        // Send request
        request.send()

        // var data = null;

        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.onload = function () {
        //     if (this.readyState === this.DONE) {
        //         console.log(this.responseText);
        //         let html;
        //         var data = JSON.parse(this.response);

        //         // console.log(data);

        //         if (request.status >= 200 && request.status < 400) {
        //             data.forEach(function(news_block, iterator) {
        //                 if(iterator < 10){
        //                     html += `
        //                     <div class="innerNews">
        //                         <div class="date">12.01.2013</div>
        //                         <div class="descr">Привет! Это просто, главное старание ))</div>
        //                     </div>
        //                     `
        //                 } else {
        //                     return;
        //                 }

        //             });
        //         }
        //     }
        // };

        // xhr.open("POST", "https://newsapiraygorodskijv1.p.rapidapi.com/getArticles");
        // xhr.setRequestHeader("x-rapidapi-host", "NewsAPIraygorodskijV1.p.rapidapi.com");
        // xhr.setRequestHeader("x-rapidapi-key", "37d9cc75d9msh06747c58112daa2p1e4d10jsn19f74e83d740");
        // xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

        // xhr.send(data);

    }

}

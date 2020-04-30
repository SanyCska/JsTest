export default class News{

    constructor(){
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI('2c4377d92b6f4bcb9b0a38559c91a12c');
        // To query /v2/top-headlines
        // All options passed to topHeadlines are optional, but you need to include at least one of them
        newsapi.v2.topHeadlines({
            q: 'bitcoin',
            category: 'business',
            language: 'en',
            country: 'us'
        }).then(response => {
            console.log(response);
        /*
            {
            status: "ok",
            articles: [...]
            }
        */
        });

        html = `
        <div class="innerNews">
            <div class="date">12.01.2013</div>
            <div class="descr">Привет! Это просто, главное старание ))</div>
        </div>
        `
        results = document.getElementById('listNews');
        results.innerHTML += html;


        
    }
}

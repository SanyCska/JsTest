import React from 'react'

export default function NewsBlock(newsBlock, key) {
    return (
        <div class="innerNews" key={key}>
            <div class="date">{newsBlock.newsBlock.publishedAt}</div>
            <div class="author">{newsBlock.newsBlock.author}</div>
            <div class="descr"><a href= {newsBlock.newsBlock.url}> {newsBlock.newsBlock.title}</a></div>
        </div>
    )
}


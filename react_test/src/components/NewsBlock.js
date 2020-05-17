import React from 'react'

export default function NewsBlock(newsBlock, key) {
    console.log(newsBlock)
    console.log(key)
    return (
        <div class="innerNews" key={key}>
            <div class="date">{newsBlock.publishedAt}</div>
            <div class="author">{newsBlock.author}</div>
            <div class="descr"><a href= {newsBlock.url}> {newsBlock.title}</a></div>
        </div>
    )
}


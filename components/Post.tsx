import { stringify } from 'querystring'
import React from 'react'

interface iPost {
    title: string
    content: string
    date: string
}

function Post({title, content, date}:iPost) {
  return (
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <p>{date}</p>
    </div>
  )
}

export default Post
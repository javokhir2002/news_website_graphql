import { fetch, fetchAll } from '../../lib/postgres.js'

// NEWS
const NEWS = `
select 
* 
from news
`
const news = () => {
    try{
        return  fetchAll(NEWS)
    }catch(error){
        throw error;
    }
}

// POST
const POST = `
    insert into news (
        news_title,
        news_body, 
        lang_id, 
        author_id, 
        category_id
    ) values ($1, $2 , $3, $4, $5)
    RETURNING *
`
const post = ({newsTitle, newsBody, langId, authorId, categoryId}) => {
    try{
        return  fetchAll(POST,newsTitle, newsBody, langId, authorId, categoryId)
    }catch(error){
        throw error;
    }
}
// PUT
const PUT = `
with old_data as (
    select
        news_id,
        news_title,
        news_body,
        news_views,
        lang_id,
        author_id,
        category_id
    from news
    where news_id = $1
) update news n set
    news_title = (
    case
        when length($2) > 1 THEN $2
        else o.news_title
    end),
    news_body = (
        case
            when length($3) > 1 THEN $3
            else o.news_body
        end),
    news_views = (
    case
        when $4 > 1 THEN $4
        else o.news_views
    end),
    lang_id = (
        case
            WHEN $5 > 0 THEN $5
            ELSE o.lang_id
        end),
    author_id = (
        case
            WHEN $6 > 0 THEN $6
            ELSE o.author_id
        end),
    category_id = (
        case
            WHEN $7 > 0 THEN $7
            ELSE o.category_id
        end)
from old_data o
where n.news_id = $1
returning n.*
`

const put = ({ newsId, newsTitle = '', newsBody = '', newsViews = 0 ,langId = 0, authorId = 0, categoryId = 0})=>{
    try{
        return  fetch(PUT,newsId,newsTitle, newsBody, newsViews ,langId, authorId, categoryId)
    }catch(error){
        throw error;
    }
}


// DELETE
const DELETE = `

    delete from news
    where news_id = $1
    returning *

`

const deleteC = ({news_id})=>{
    try{
        return fetch(DELETE,news_id)
    }catch(error){
        throw error;
    }
}

export default {
    news,
    post,
    put,
    deleteC
}
import { fetch, fetchAll } from '../../lib/postgres.js'

// CATEGORIES
const CATEGORIES = `
    select 
    * 
    from categories
    where
    case
        WHEN $1 > 0 THEN  lang_id = $1
        ELSE true
    end
`
const categories = ({langId = 0}) => {
    try{
        return  fetchAll(CATEGORIES,langId)
    }catch(error){
        throw error;
    }
}

// POST
const POST = `
    insert into categories (
        category_name, 
        lang_id
    ) values ($1, $2)
    RETURNING *
`
const post = ({categoryName,langId}) => {
    try{
        return  fetchAll(POST,categoryName,langId)
    }catch(error){
        throw error;
    }
}
// PUT
const PUT = `
    with old_data as (
        select
            category_id,
            category_name,
            lang_id
        from categories
        where category_id = $1
    ) update categories c set
        category_name = (
        case
            when length($2) > 1 THEN $2
            else o.category_name
        end),
        lang_id = (
        case
            WHEN $3 > 0 THEN $3
            ELSE o.lang_id
        end)
    from old_data o
    where c.category_id = $1
    returning c.*
`

const put = ({categoryId,categoryName,langId})=>{
    try{
        return  fetch(PUT,categoryId,categoryName,langId)
    }catch(error){
        throw error;
    }
}


// DELETE
const DELETE = `

    delete  from categories where category_id = $1
    returning *

`

const deleteC = ({categoryId})=>{
    try{
        return fetch(DELETE, categoryId)
    }catch(error){
        throw error;
    }
}

export default {
    categories,
    post,
    put,
    deleteC
}
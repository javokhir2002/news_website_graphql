import { fetch, fetchAll } from '../../lib/postgres.js'

// getUsers
const USERS = `
   select * from users
   
`
const users = () => {
    try{
        return  fetchAll(USERS)
    }catch(error){
        throw error;
    }
}

// register
const REGISTER = `
insert into users (
    first_name,
    last_name,
    email,
    pass_word,
    specialist
) values ($1, $2, $3, $4, $5)
RETURNING *
`

const registerPost = ({firstName, lastName, email, password, specialist})=>{
    try{
        return  fetch(REGISTER,firstName, lastName, email, password, specialist)
    }catch(error){
        throw error;
    }
}


// login
const LOGIN = `

    select 
        * 
    from users u
    where 
    case
        when u.pass_word = $2 and u.email = $1 then true
        else false
    end

`

const loginPost = ({email, password})=>{
    try{
        return fetch(LOGIN, email, password)
    }catch(error){
        throw error;
    }
}

export default {
    registerPost,
    loginPost,
    users,
}
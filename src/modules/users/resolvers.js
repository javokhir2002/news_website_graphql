import validate from '../../lib/joi.js'
import jwt from '../../lib/jwt.js'
import model from './model.js'


export default {
    Query:{
        users: async (_)=> await model.users()
    },
    Mutation:{
        register:async(_,args)=>{
            try{
                
                let {error} = validate.schema.validate(args)
		
                let user 
                if(error){
                    throw error
                }else{
                    user = await model.registerPost(args)
                }

                if(user){
                    return{
                        status:201,
                        message:"Registered in!",
                        data:jwt.sign({userId:user.user_id})
                    }
                }else throw new Error("There is an error !")
            }catch(error){
                return{
                    status:400,
                    message:error,
                    data:null
                }
            }
        },
        login:async(_,args)=>{
            try{
                let user = await model.loginPost(args)
                if(user){
                    return{
                        status:201,
                        message:"Logged in!",
                        data:jwt.sign({userId:user.user_id})
                    }
                }else throw new Error("There is an error !")
            }catch(error){
                return{
                    status:400,
                    message:error,
                    data:null
                }
            }
        },
    },
    User:{
        userId:global => global.user_id, 
        firstName:global => global.first_name, 
        lastName:global => global.last_name,
        password:global => global.pass_word 
    }
   
}
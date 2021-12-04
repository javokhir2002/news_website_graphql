import model from './model.js'


export default {
    Query:{
        categories: async (_,args)=> await model.categories(args)
    },
    Mutation:{
        postCategory:async(_,args)=>{
            try{
                
                let category = await model.post(args)

                if(category){
                    return{
                        status:201,
                        message:"Added !",
                        data:category
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
        putCategory:async(_,args)=>{
            try{
                let category = await model.put(args)
                if(category){
                    return{
                        status:201,
                        message:"Udated!",
                        data:category
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
        deleteCategory:async(_,args)=>{
            try{
                let category = await model.deleteC(args)
                if(category){
                    return{
                        status:201,
                        message:"Deleted!",
                        data:category
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
    Category:{
        categoryId:global => global.category_id, 
        categoryName:global => global.category_name, 
        langId:global => global.lang_id
    }
   
}
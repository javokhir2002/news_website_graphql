import model from './model.js'


export default {
    Query:{
        news: async ()=> await model.news()
    },
    Mutation:{
        postNews:async(_,args)=>{
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
        putNews:async(_,args)=>{
            
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
        deleteNews:async(_,args)=>{
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
    News:{
        newsId:global => global.news_id,
        newsTitle:global => global.news_title,
        newsBody:global => global.news_body,
        newsViews:global => global.news_views,
        langId:global => global.lang_id,
        authorId:global => global.author_id,
        categoryId:global => global.category_id
    }
   
}
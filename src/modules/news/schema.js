import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        news:[News!]!
    }

    extend type Mutation {
        postNews(newsTitle:String!,newsBody:String! , newsViews:Int ,langId:Int! ,authorId:Int! ,categoryId:Int!):MutationResponse!
        putNews(newsId:Int, newsTitle:String,newsBody:String , newsViews:Int ,langId:Int ,authorId:Int ,categoryId:Int):MutationResponse!
        deleteNews(newsId:ID!):MutationResponse!
    } 

    type News {
        newsId:Int!
        newsTitle:String!
        newsBody:String!
        newsViews:Int!
        langId:Int!
        authorId:Int!
        categoryId:Int!
    }

`
import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        categories(langId:ID):[Category!]!
    }

    extend type Mutation {
        postCategory(categoryName:String!,langId:ID!):MutationResponse!
        putCategory(categoryId:ID!,categoryName:String!,langId:ID!):MutationResponse!
        deleteCategory(categoryId:ID!):MutationResponse!
    } 

    type Category {
        categoryId:ID!
        categoryName:String!
        langId:ID!
    }

`
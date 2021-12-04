import { gql } from 'apollo-server'

export default gql`

    extend type Query {
        users:[User!]!
    }

    extend type Mutation {
        register(firstName:String!,lastName:String!,email:String!,password:String!,specialist:String!):MutationResponse!
        login(email:String! password:String!):MutationResponse!
    } 

    type User {
        userId:ID!
        firstName:String!
        lastName:String!
        email:String!
        password:String!
        specialist:String!
    }

`
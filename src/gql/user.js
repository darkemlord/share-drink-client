import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation Mutation($input: userInput) {
    register(input: $input) {
      name
      username
      email
      password
      createdAt
    }
  }
`

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

export const LOGIN = gql`
  mutation Login($input: loginInput) {
  login(input: $input) {
    token
  }
}
`

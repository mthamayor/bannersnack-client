import { ApolloQueryResult, FetchResult, gql } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

type ISignup = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}

type ISignin = {
    email: string,
    password: string,
}

type ICreateRecord = {
    title: string
}

class Api {
    static signupUser({ firstName, lastName, email, password }: ISignup): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> {
        return apolloClient
            .mutate({
                mutation: gql`
          mutation {
            signupUser(
                data: {
                    firstName: "${firstName}",
                    lastName: "${lastName}",
                    email: "${email}",
                    password: "${password}",
                }
            ) {
                token
                id
                firstName
                lastName
                email
            }
          }
        `,
            })
    }

    static resetUserPassword({ email, password }: ISignin): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> {
        return apolloClient
            .mutate({
                mutation: gql`
          mutation {
            resetUserPassword(
                data: {
                    email: "${email}",
                    password: "${password}",
                }
            )
          }
        `,
            })
    }

    static getRecords(): Promise<ApolloQueryResult<any>> {
        return apolloClient
            .query({
                query: gql`
          query {
            getRecords {
                id
                title
                user {
                    id
                    firstName
                    lastName
                }
                createdAt
            }
          }
        `,
            })
    }

    static createRecord({ title }: ICreateRecord): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> {
        return apolloClient
            .mutate({
                mutation: gql`
          mutation {
            createRecord(
                title: "${title}"
            ) {
                id
                title
                user {
                    id
                    firstName
                    lastName
                }
                createdAt
            }
          }
        `,
            })
    }

    static signinUser({ email, password }: ISignin): Promise<FetchResult<any, Record<string, any>, Record<string, any>>> {
        return apolloClient
            .query({
                query: gql`
          query {
            signinUser(
                data: {
                    email: "${email}",
                    password: "${password}",
                }
            ) {
                token
                id
                firstName
                lastName
                email
            }
          }
        `,
            })
    }
}

export default Api;
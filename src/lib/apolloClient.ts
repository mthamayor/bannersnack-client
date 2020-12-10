import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import storage from "./storage";

const uri = process.env.NODE_ENV === 'production' ?
    "https://bannersnack-server.herokuapp.com/graphql"
    :
    "http://localhost:4000/graphql";

const httpLink = createHttpLink({
    uri
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = storage.getToken();
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default apolloClient;
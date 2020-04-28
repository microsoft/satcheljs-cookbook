import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { maxRateResolver } from './maxRateResolver';

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        );
    }

    if (networkError) {
        console.log(`[Network error]: ${networkError}`);
    }
});

const httpLink = new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    credentials: 'same-origin',
});

export const client = new ApolloClient({
    link: ApolloLink.from([onErrorLink, httpLink]),
    cache: new InMemoryCache(),
    resolvers: {
        Query: {
            maxRate: maxRateResolver,
        },
    },
});

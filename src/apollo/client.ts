import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { NativeLink } from './NativeLink';

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

const nativeLink = new NativeLink();

export const client = new ApolloClient({
    link: ApolloLink.from([onErrorLink, nativeLink]),
    cache: new InMemoryCache(),
});

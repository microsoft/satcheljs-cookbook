import { ApolloLink, Operation, Observable, FetchResult } from 'apollo-link';
import { print } from 'graphql/language/printer';

const fakeData = {
    data: {
        rates: [
            {
                currency: 'ABC',
                rate: '123.456',
                __typename: 'ExchangeRate',
            },
            {
                currency: 'XYZ',
                rate: '987.654',
                __typename: 'ExchangeRate',
            },
        ],
    },
};

export class NativeLink extends ApolloLink {
    private nextId = 0;

    request(operation: Operation) {
        const requestId = this.nextId++;

        console.log(`[NativeLink] Starting request (${requestId})`, operation);

        const rawQuery = print(operation.query);
        console.log(`[NativeLink] Raw query (${requestId})`, rawQuery);

        return new Observable<FetchResult>(observer => {
            setTimeout(() => {
                console.log(`[NativeLink] Returning data (${requestId})`, fakeData);
                observer.next(fakeData);
                observer.complete();
            }, 500);
        });
    }
}

import gql from 'graphql-tag';

const EXCHANGE_RATES = gql`
    query GetRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

export const maxRateResolver = (obj: any, args: any, context: any) => {
    const client = context.client;
    return client.query({ query: EXCHANGE_RATES }).then((result: any) => {
        console.log('Got EXCHANGE_RATES result', result);

        const maxRate = result.data.rates.reduce((acc: any, value: any) => {
            if (!acc) {
                return value;
            } else if (value.rate > acc.rate) {
                return value;
            } else {
                return acc;
            }
        }, null);

        console.log('Derived maxRate', maxRate);
        return maxRate;
    });
};

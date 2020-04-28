import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const MAX_RATE = gql`
    query MaxRate {
        maxRate @client {
            currency
            rate
        }
    }
`;

interface MaxRateResult {
    maxRate: ExchangeRate;
}

interface ExchangeRate {
    currency: string;
    rate: number;
}

export function ExchangeRates() {
    const { loading, error, data } = useQuery<MaxRateResult>(MAX_RATE);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    const { currency, rate } = (data as any).maxRate;

    return (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    );
}

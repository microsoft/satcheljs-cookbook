import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const EXCHANGE_RATES = gql`
    {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

interface ExchangeRateResult {
    rates: ExchangeRate[];
}

interface ExchangeRate {
    currency: string;
    rate: number;
}

export function ExchangeRates() {
    const { loading, error, data } = useQuery<ExchangeRateResult>(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error || !data) return <p>Error :(</p>;

    return (
        <div>
            {data.rates.map(({ currency, rate }) => (
                <div key={currency}>
                    <p>
                        {currency}: {rate}
                    </p>
                </div>
            ))}
        </div>
    );
}

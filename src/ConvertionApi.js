const GetUSDConvertion = async currency =>  {
    const response = await fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${currency}.json`); 
    const convertion = await response.json();
    return convertion[currency]
}

export { GetUSDConvertion };
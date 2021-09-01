import { GetUSDConvertion } from '../ConvertionApi'
import { GetDarksteelConvertion, GetDracoPrice } from '../Mir4Api'
import React, { useEffect, useState } from 'react'

const Converter = () => {

    var [darksteel, SetDarksteel] = useState(0)
    var [DracoPriceInDarksteel, SetDracoPriceInDarksteel] = useState({ DS: "100015" })
    var [DracoPriceInDollar, SetDracoPriceInDollar] = useState({ USDDracoRate: "2.0307830637612381", DracoPriceWemix: "3.48" })
    var [DollarInBRL, SetdollarInBRL] = useState(0.0)
    var [ConvertedValue, SetConvertedValue] = useState({ draco: 0, value: "0" })

    useEffect(() => {
        GetUSDConvertion('brl').then(SetdollarInBRL)
        GetDracoPrice().then(SetDracoPriceInDollar)
        GetDarksteelConvertion().then(value => {
            SetDracoPriceInDarksteel(value)
            SetDarksteel(value.DS)
        })
    }, [])

    useEffect(() => {
        SetConvertedValue(ConvertDarksteelToCurrency(darksteel, DracoPriceInDarksteel.DS, DracoPriceInDollar.USDDracoRate))
    }, [darksteel, DracoPriceInDarksteel, DracoPriceInDollar])

    const UpdateData = () => {
        GetUSDConvertion('brl').then(SetdollarInBRL)
        GetDracoPrice().then(SetDracoPriceInDollar)
        GetDarksteelConvertion().then(value => {
            SetDracoPriceInDarksteel(value)
            SetDarksteel(value.DS)
        })
    }
    return (
        <div className="converter">
            <div className="card">
                <div className="darksteel">
                    <img src="./images/darksteel.png" alt="darksteel" />
                </div>
                <h3>Check how much your darksteel is worth</h3>
                <div className="card-input">
                    <input type='number' value={darksteel} onChange={({ target: { value } }) => SetDarksteel(value)} />
                    <button onClick={UpdateData}>Update Data</button>
                </div>
                <div className="card-result">
                    <strong>Draco: {ConvertedValue.draco}</strong>
                </div>
                <div className="card-result">
                    <strong>USD: {ConvertedValue.value}</strong>
                </div>
                <div className="card-result">
                    <strong>BRL: {(ConvertedValue.value * DollarInBRL).toFixed(5)}</strong>
                </div>
                <strong>Disclaimer:</strong>
                <small>1. You can only trade a whole draco, broken numbers for comparisson only.</small>
                <small>2. For every {DracoPriceInDarksteel.DS} you need to pay the fee of 1000 darksteel not included in the calculation.</small>
            </div>
        </div>
    )
}

const ConvertDarksteelToCurrency = (currentAmount, DracoPriceInDarksteel, DracoPriceInDollar) => {
    var draco = currentAmount / DracoPriceInDarksteel;
    var value = draco * DracoPriceInDollar
    return { draco, value: value.toFixed(5) }
}
export default Converter;
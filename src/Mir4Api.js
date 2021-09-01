const GetDracoPrice = async () => {
    const response = await fetch('https://api.mir4global.com/wallet/prices/draco', { method: "POST" });
    const DracoPrices = await response.json();
    return DracoPrices.Data.lastest
}

const GetDarksteelConvertion = async () => {
    const response = await fetch('https://api.mir4global.com/wallet/prices/derby', { method: "POST" });
    const darksteel = await response.json();
    const newst = new Date(Math.max(...darksteel.Data.map(e => new Date(e.CreatedDate))));
    return darksteel.Data.find(dk => {
        var created = new Date(dk.CreatedDate);
        return created.getFullYear() === newst.getFullYear() &&
            created.getMonth() === newst.getMonth() &&
            created.getDate() === newst.getDate()
    })
}


export { GetDracoPrice, GetDarksteelConvertion }
var data = {
    name: "Sagar",
    addresses: [
        {city: "hyd", state: "TS"},
        {city: "MUM", state: "MH"},
        {city: "BLR", state: "KA"}
    ]
}



for (var i = 0 ; i < data.addresses.length;i++) {
    console.log(data.addresses[i].city);
}

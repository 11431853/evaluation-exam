var people = [
    {
        city: "ABC",
        first_name: "CDE",
        country: "Russia",
    },
    {
        city: "LMN",
        first_name: "OPQ",
        country: "India",
    },
    {
        city: "XYZ",
        first_name: "FGH",
        country: "India",
    },
]

var res = people.filter( function(item) {
    return (item.country === "India")
})

console.log(res);

for ( var i=0;i<res.length;i++) {
    console.log(res[i].first_name);
    // console.log(res[i].first_name[0]);
}
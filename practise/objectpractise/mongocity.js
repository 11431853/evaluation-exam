var data = {
    name:{
         first: "Alan",
         last: "Turing" 
    },
    addresses: [
        {city: "BLR", state: "KA"},
        {city: "MUM", state: "MH"},
        {city: "KOL", state: "WB"},
    ],
    statesList : function() {
        console.log(this.addresses.length);
        var states = [];
        for (var i=0;i<this.addresses.length;i++) {
            states.push(this.addresses[i].state);
        }
        return states;
    },
    addAdress: function(city, state) {
        var ads = {city: city, state: state};
        this.addresses.push(ads);
    },
    deleteState: function(s) {
        // var newAdress = [];
        // for(var i=0;i<this.addresses.length;i++) {
        //   if (this.addresses[i].state !=s) {
        //       newAdress.push(this.addresses[i]);
        //   }
        // }
        // this.addresses = newAdress;
        var nA = this.addresses.filter(function(el) {
            console.log(el);
            console.log(s);
            return el.state !=s;
        })
        this.addresses = nA;
    }
 }

 console.log(data.statesList());
//  data.addAdress("MAD", "TN");
//  data.addAdress("LKO", "UP");
//  console.log(data.statesList());
//  var s = data.statesList();
//  console.log(s.sort());
//  data.deleteState("UP");
//  console.log(data.addresses);
//  console.log(Object.values(data));
//  console.log(Object(data));

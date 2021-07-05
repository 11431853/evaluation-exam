// var data = {
//     name: { first: "Alan", last: "Turing" },
//     contact: { phone: { type: "cell", number: "111-222-3333" } },

//  }

 var data = {
    name:{
         first: "Alan",
         last: "Turing" 
    },
    contact: 
    { phone: 
        { type: "cell", number: "111-222-3333" } 
    },

 }

//  console.log(data.name.last);
//  console.log(data.contact.phone.number);

 for(key in data) {
     console.log(key);
     if (typeof(data[key])=="object") {
       for (k in data[key]) {
           console.log(k);
           if (typeof(data[key][k])=="object") {
             for (keys in data[key][k]) {
               console.log(keys);
               console.log(data[key][k][keys]);
             }
            }
            else {
              console.log(data[key][k]);
            }
        }
    }
    else {
      console.log(data[key]);
    }
    //  console.log(typeof(data[key]));
}


var phoneBook = {
    
    Tinku: 21345,
    Rohith: 89456,
    Vikram: 98764,
    Bhargav: 89462,

    phoneNumberOf: function (s) {
        // console.log(s, phoneBook[s])

        if (phoneBook[s] == undefined) {
          return "No user found";
        }
        else {
          return phoneBook[s];
        }
    },
};

console.log(phoneBook.phoneNumberOf("Vikram"));
console.log(phoneBook.phoneNumberOf("Srikar"));
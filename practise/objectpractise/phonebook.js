var phoneBook = {
    data: [
        ["Sagar", 15555],
        ["Ramu", 56876],
        ["sonu", 89457],
        ["Jyothi", 321654],
    ],
    query : function (name) {
      for (var i=0;i<this.data.length;i++) {
        if (this.data[i][0] == name) {
          return this.data[i][1];
        }
      }
      return "No user found";
    }
}

console.log(phoneBook.query("Ramu"));

console.log(phoneBook["query"]("Sagar"));

console.log(phoneBook.query("Ramya"));
var data = ["assignment", "problem", "media", "upload"];

var res = data.forEach(function(el){
    for (i=0;i<el.length;i++) {
      if (el[0]=="a" || el[el.length-1]=="a") {
        console.log(el);
        break;
      }
    }
})
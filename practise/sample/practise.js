var items = [1, 6, 7, 4, 2, 5, 9, 2];



function findn(items) {
    for (var i=0;i<items.length;i++) {
      if (items[i]==2 && i!=items.length-1) {
      result = "" + items[i+1];
      }
    }
    return result;
}
  


function lastn(items) {
    for (var i=0;i<items.length;i++) {
      if (items[items.length-1]==2 || items[i]!=2) {
        result = "" + -1;

      }
    }
    return result;
}

        
function foo(){
    console.log(a)
 }
 function boo(){
     var a = 3;
     foo()
 }
 var a = 2;
 boo();            

    


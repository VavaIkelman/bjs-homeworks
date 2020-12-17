function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }
   function compareArrays(arr1, arr2){
       if (arr1.length === arr2.length){
         return arr1.every((item, i) => item === arr2[i]);
       }else {
         return false
       }
   }
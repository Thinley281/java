function reverseString(str){
  let reverse="";
  //let i=0;
  for(i=str.length-1;i>=0;i--)
    {
       reverse =  reverse + str[i] ;

    } 
    return reverse; 
}
console.log(reverseString("hello"));
console.log(reverseString("bhutan"));
console.log("a");
console.log(reverseString(""));
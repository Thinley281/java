function leafYear(year){
  if(year % 400 ===0){
    return true;
  }  else if(year%100===0){
    return false;
  }else if(year % 4===0){
    return true;
  }else{
    return false;
  }
}

console.log(leafYear(2024));
console.log(leafYear(2023));
console.log(leafYear(1900));
console.log(leafYear(2000));

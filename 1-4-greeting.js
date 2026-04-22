function greet(name,hour){
    if(hour>12){
        return "Good morning," + name ;
    }else if(hour<18){
        return "Good Afternoon," + name ;
    }else{
        return "Good Evening!," + name ;
    }
}

console.log(greet("karma", 9));
console.log(greet("dorji", 14));
console.log(greet("sonam", 20));
function classifyBMI(weightkg, heightM){
    const massindex= weightkg/heightM**2;
   {
    if(massindex > 30){
        return "obese";
    }else if(massindex >= 25 && massindex <= 29.9 ){
        return "overweight";
    }else if(massindex >= 18.5 && massindex <=24.9){
        return "normal";
    }else{
        return "underweight";
    }
   } 

}
console.log(classifyBMI(55,1.70));
console.log(classifyBMI(95,1.175));

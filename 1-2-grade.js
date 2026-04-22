function getGrade(score) 
{ 
    if(score>90)
{
    return "A";
}
else if (score<=89 && score>=75) {
    return "B";
}
else if(score<=74 && score>=60){
    return "C";
} else    
{
    return "F";
}
}
console.log(getGrade(95));
console.log(getGrade(78));
console.log(getGrade(45));
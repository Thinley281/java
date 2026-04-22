function splitBill(total, people, tipPercent){
    const tipamount= total * (tipPercent/100);
    const billamount= total + tipamount;
     return billamount/people;
}
console.log(splitBill(1000,4,10));
console.log(splitBill(500,2,10));
console.log(splitBill(600,5,0));

function cheaperPerUnit(priceA, qtyA,priceB, qtyB){
    const unitA= priceA/qtyA;
    const unitB= priceB/qtyB;
    if(unitA < unitB){
        return "A";
    }else if(unitA > unitB){
        return "B";
    }else{
        return "same";
    }
}
console.log(cheaperPerUnit(100,2,120,3));
console.log(cheaperPerUnit(60,3,100,4));
console.log(cheaperPerUnit(50,1,100,2));
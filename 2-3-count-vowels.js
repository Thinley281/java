function countVowels(str){
    const vowels= "aeiouAEOIU";
    let count=[0];

    for(i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
        count++;
    }    
    }
    return count;

}
console.log(countVowels("GELEPHU"));
console.log(countVowels("BHUTAN"));
console.log(countVowels("xyz"));
console.log(countVowels(""));

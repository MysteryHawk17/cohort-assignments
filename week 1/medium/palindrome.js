/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  let nstr="";
  let s1="abcdefghijklmnopqrstuvwxyz"
  for(let i=0;i<str.length;i++){
    if(s1.includes(str[i])){
      nstr=nstr+str[i];
    }
  }
  for(let i=0;i<nstr.length/2;i++){
    if(nstr[i]!==nstr[nstr.length-1-i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;

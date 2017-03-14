function reverseString(str){

    if(typeof str === 'string'){
    //Spliting each character of the string into an Array
    var str_arr = str.split("");
    var reverse_Str = str_arr.reverse();
    //Join back the split string
    var join_Str = reverse_Str.join("");
    //Checks for empty string
    if(str === ''){
        return null;
    }else if(str === 'NaN') {
        return true;
        //Checking for palindrome (if the string and its reverse are the same)
    }else if(join_Str === str){
        return true;
        
    }else{
        return join_Str;
    }
    }  
}
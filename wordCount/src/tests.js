function words(str) {
    //Spliting the string to array of strings
    var words = str.split(/\s+/);
    var json = {};
    //Adding properties to the json Object literal
    for(let i = 0; i < words.length; i += 1){
        if(!json.hasOwnProperty([words[i]])){
            json[words[i]] = 1;
        }else{
            json[words[i]] += 1;
        }
    }
    return json;
}
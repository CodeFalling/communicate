function getMostWord(wordsAry){
    // TODO: 请完成实现
    var current = wordsAry[0];
    var help = 1;
    for(var i=1;i<wordsAry.length;i++){
        if(wordsAry[i] === current){
            help++;
        }else{
            help--;
            if(help < 0){
                current = wordsAry[i];
                help = 1;
            }
        }
    }
    return current;
}
console.log(getMostWord(["a","b","c","a","d","e","a","a","b","a","f","a","a","a","b"])); //"a"

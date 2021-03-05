var numbers = [3, 5, 6, 7, 2, 11, 3, 3];
var uniqueName = [];
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}

console.log(uniqueName);
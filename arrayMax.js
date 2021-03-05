var marks = [75, 65, 98, 60, 85, 81];
var max = marks[0];

for(var i = 0; i < marks.length; i++){
    var element = marks[i];
    console.log(element);
    if(element > max){
        max = element;
    }
}

console.log("Highest value is: ", max);
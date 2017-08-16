var favFoods = ["ham", "lettuce", "takis"]
//array of foods//
var newFood = prompt("What do you want to replace ham with?");
// asked user for new food to replace ham on the array//
favFoods[0] = newFood;
//replaced ham with users requsest//
window.alert(favFoods[0] + " " + favFoods[1] + " " + favFoods[2])
//popped up array with new values/foods//

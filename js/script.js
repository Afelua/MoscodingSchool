for (i=0; i<3; i++){
  console.log(i);
}

var name = "Света";

function Sum(a, b){
  console.log(a * b);
}

console.log(name);
Sum(3, 7);

Sum(1, 2);

Sum(2, 5);




function ShowName(){
  var manName = "Сергей";

  console.log(name);
}

ShowName();



var user = {
  name: 'Василика',
  isAdmin: true,
  writeName(){
    alert('Привет, ' + this.name);
  }
}


user.writeName()

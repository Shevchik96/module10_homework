let value = +prompt('введите своё значение')
value = Number(value); 
console.log (value)
typeof value;
if(value%2===0) {
    console.log('чётное');
}
else {
    console.log('нечётное');
}
if(typeof value==='number'){
    alert(value);
}
else{
    alert('Упс,кажется,вы ошиблись');
}
if (isNaN(value)) {
  alert("Упс, кажется, вы ошиблись");
} 
else {
  console.log(value);
}
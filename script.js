//your code here
let a= document.getElementById("evaluatedText");
let b= document.getElementById("letterCount");

a.addEventListener('input', ()=> {
	let str= a.value;
	b.innerHTML= `${str.length}`;
})
//your code here
let a= document.getElementById("evaluatedText");
let b= document.getElementById("letterCount");

a.addEventListener('inp', ()=> {
	let str= a.value;
	b.innerHTML= `${str.length}`;
})
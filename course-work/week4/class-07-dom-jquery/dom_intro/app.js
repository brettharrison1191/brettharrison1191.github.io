// window.onload = function(){
// 	alert('loaded!')
// }

// alert('still loading!');

var helloEl = document.getElementById('hello');
console.log(helloEl);
helloEl.innerHTML = 'what is good in this hood?';

var pEl = document.querySelector('p')
console.log(pEl)

var listEls = document.querySelectorAll('li');
console.log(listEls)

//click event

document.getElementById('my-btn').onclick = function(event){
	console.log(event);
}

var input = (document.getElementById('my-input').value)
// Users should be able to:
// 1. Enter an item into #new-item
// 2. Submit the form #item-form (remember to prevent the form's default behavior!)
// 3. New item is appended as a <li> element to the #list
// 4. After item is added, the text inside #new-item should clear


// Bonus: Focus on #new-item after the item is added
// Itermediate Bonus: If the value of #item is blank, do not append the <li> and alert user
// Legendary Bonus: Remove individual <li> elements when they are clicked

// similar to window.onload
$(document).ready(function () {
	// YOUR CODE HERE
})


// INIT TEMPLATES APPEND

var initTodos = {
	todos:['Data types',
			'array',
			'objects',
			'functions',
			]
}

//2: get template and compile using handlebars

var todosSource = $('#init-template').html();
var todosCompile = Handlebars.compile(todosSource);
var todosTemplate = todosCompile(initTodos);
console.log(todosSource);
console.log(todosCompile);
console.log(todosTemplate);
$('#list').append(todosTemplate);



$('#clickme').click(function(){
	event.preventDefault();
	var input = $('#new-item').val().trim();
	// 	if(input === ''){
	// 	alert('Hey man, that is blank, do it again,');
	// 	} else{
	// 	$('#list').append('<li>' + input + '<li>');
	// 	$('#new-item').val('').focus();
	// }
});


$(document).on('click','#list li', function(){
	$(this).remove();
})

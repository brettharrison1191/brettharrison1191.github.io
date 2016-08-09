/* Independent Practice

Making a favorites list: jQuery

You'll add the ability to complete tasks in your favorite things list. Your program must complete the following rules:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing").
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through).
- Each new item added by the user needs to also have the "complete task" link at the end.

*/
// append click here text to each list item

var completeTask = ("<b> Complete Task! </b>");
$(".fav-thing").append(completeTask);

// make it so when you click here that the corresponding li gets a line through it
$("b").click(function(){
	$(this).parent().addClass("completed");
});


//create new value with the complete task 

$("#new-thing-button").click(function(event){
	event.preventDefault();
	var input = $("#new-thing").val();
	$("#fav-list").append("<li>" + input + completeTask + "</li>");	
	$("#fav-list li b").click(function(){
		$(this).parent().addClass("completed");
	});	
});


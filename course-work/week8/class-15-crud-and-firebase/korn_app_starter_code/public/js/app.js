$(document).ready(function(){
	
	// Store a reference to your Firebase DB
	var messageAppReference = firebase.database();
	
	// YOU NEED TO ADD event INTO THE FUNCTION - so EVENT.preventDefault can reference it
	$('.btn').click(function(event){
		// PREVENT DEFAULT
		event.preventDefault()
		// Grab value from DOM
		var message = $('#message').val();

		// create a messages reference in your firebase DB
		var messagesReference = messageAppReference.ref('messages');
		// Push the
		messagesReference.push({
			message: message,
			votes: 0
		})

		// Clear text input
		$('#message').val('');
	})

	function getFanMessages() {
    	messageAppReference.ref('messages').on('value', function (results) {
    		// 
    		$('.message-board').empty();

      		results.forEach(function (msg) {
      			console.log(msg);
      		// store the firesbase objects with unique ID (willbe used for updating and deleting)
      		var id = msg.key
      		// Use .val() to obtain the actual JS obj from the Firebas obj
      		// note: .val(), used in this context, is not the same as jQuery.val()
			var message = msg.val();

			// Store message attributes as variables
			var votes = message.votes;
			var messageText = message.message;

			// create the li
        	var $li = $('<li>')

        	// create up vote element
			var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>');

			$upVoteElement.on('click', function () {
				updateMessage(id, ++votes);
			})

			// create down vote element
			var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');

			$downVoteElement.on('click', function () {
				updateMessage(id, --votes);
			})

			// create delete element
			var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');

			$deleteElement.on('click', function () {
				deleteMessage(id);
			})

			// add message to the Li
        	$li.text(messageText);


			// add voting elements to $li
			$li.append($upVoteElement);
			$li.append($downVoteElement);
			$li.append($deleteElement);

			// Render the vote count
        	$li.append('<div class="pull-right">' + votes + '</div>');
        	// append the lis to the message board
        	$('.message-board').append($li);


      })
    })
  }

  // Update
  function updateMessage (id, votes) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference = messageAppReference.ref('messages/' + id);

    // update votes property
    messageReference.update({
      votes: votes
    })
  }

  // DELETE

  function deleteMessage (id){
  	var messageReference = messageAppReference.ref('messages/' + id);

  	messageReference.remove();


  }












  // Kick off the app
  getFanMessages();
})

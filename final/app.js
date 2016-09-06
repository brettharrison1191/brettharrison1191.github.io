$(document).ready(function(){{
	$('button').click(function(){
		// grab values from the input

		var $first = $('.first').val()
		var $last = $('.last').val() 
		var $firstLetter = $('.first').val().substr(0, 1);
		var $firstLetterLast = $('.last').val().substr(0, 1);
		var $domain = $('.domain').val()
		var gmail = 'gmail.com'

		// use those values to generate email
		
		var emailArray = [
		$first+'.'+$last+'@'+$domain,
		$firstLetterLast+'.'+$first+'@'+$domain,
		$firstLetter+'.'+$last+'@'+$domain,
		$first+$last+'@'+$domain,
		$first+'@'+$domain,
		$last+'@'+$domain,
		$firstLetter+$last+'@'+$domain,
		$last+$first+'@'+$domain,
		$firstLetter+ $firstLetterLast+'@'+$domain,
		$first+'.'+$firstLetterLast+'@'+$domain
		
		]

		console.log(emailArray);
		var email= $first+$last+'@'+$domain;	
		// Create the div
		var $div = $('<div>')

		// add the div to the container
		// $(".body").append($div);

		// clear the inputs
		$('input').val('');

		//function 
		var count = 0;

		function ajax (email){
			$.ajax({
				url: "https://api.fullcontact.com/v2/person.json",
				data: {
   					email: email,
        			apiKey: "badb663f94e74726"
    			},
    			dataType: "jsonp",
    			
    			success: function(data, textStatus, jqXHR){
    			

    			var emailResult = emailArray[count];
				var $paragraph = $('<p>' + emailResult + '</p>');
    			// if there's a success and we return an object, console.log the data
    			
    			if (data.status = 200){
    				console.log(count);
    				count +=1;
    				console.log(data);
    				console.log(count);
    			}
    			// if there is an error, increase count and run it again
    			else if (data.message='"Queued for search. Please retry your query within about 2 minutes. Prefer not to re-submit queries? Try using our webhook option, documented at: http://www.fullcontact.com/developer/docs/person/#webhook-email"')    								
    				{count +=1;
    				 console.log((emailArray[count]));
    				 console.log(count);
    			}
    			// if nothing happens or anything else apart from success or error, increase count, run again
    			else{
    				count +=1;
    				 console.log((emailArray[count]));
    				 console.log(count);
    			}

    			console.log(count);
     			console.log(data.status);
     			console.log(emailArray[count]);

     			data.photos.forEach(function(photo){
     					console.log(photo);

     				})


     			var photo = data.photos[0].url;
     			var $div = $('<div>')				

				$div.addClass('circle');
				$div.css('background-image', 'url(' + photo + ')');

				// add the div to the container
						
						
     			

				// add the div to the container
				$("#results").append($div);
				
				$paragraph.addClass('emailResults')
				$div.append($paragraph);

				$('.person').addClass('displayNone');
				
				
				// $div.append(data.contactInfo.fullName + ' '+ data.demographics.gender);
   		 		// if (count<8){
   		 		// 	ajax (emailArray[count]);}	


   		 		},

   		 	// If there's an error, increase the count, run it again
    			error: function(jqXHR, textStatus, errorThrown){        		
        			 count +=1;
    					ajax (emailArray[count]);		
    			}
			});
		}
		ajax (emailArray[count]);

	})
}});





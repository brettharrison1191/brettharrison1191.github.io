    module.exports = function(robot) {

        robot.hear(/hello|hi/i, function(res) {
                return res.send("Hello, World!");
        });

        robot.hear(/cat/i, function(res){
        	return res.send("dude, cats kinda suck.")

        });

        robot.respond(/how are you?/i, function(res){
        	return res.send("I am feeling pretty good dude")
        });

        robot.respond(/my name is (.*)/i, function(res){
        	var name = res.match[1];
        	res.reply('Hello, ' + name);
        });

        // res can be msg, it can be anything, just needs to match inside the function.
        // really all that's happening here is that the wild card1 and wild card2 are placeholders, holding a place within this object - 
        // it's so I can grab them in the function through the res.match[1] - see above, res doesn't matter .match is just some name within the object
        //

        robot.hear(/add (.*) and (.*)/i, function(res){
        	var x = parseInt(res.match[1]);
	  		var y = parseInt(res.match[2]);
	  		var sum = x + y;
	  		return res.send(x + "+" + y + " = " + sum);
        });

        robot.hear(/Come up with a random number between (.*) and (.*)/i, function(res){
        	var lower = parseInt(res.match[1]);
	  		var upper = parseInt(res.match[2]);
	  		if ( upper < lower){
	  			res.send("Hey give me the lower number first.");
	  		}else{
	  		var randomNumber = Math.floor(Math.random()*(upper-lower+1)+lower);
	  		return res.send(randomNumber + " is a random number between " + lower + " and " + upper);
     		}
     	});

     	robot.respond(/my favorite band is (.*)/i, function(res){
        	var band = res.match[1];
	  		if ( band === "Radiohead" ){
	  			res.reply("No Way! " + band + " is my favorite too!");
	  		}else if (band === "LCD Soundsystem"){
	  			res.reply("No Way! " + band + " is my favorite too!");
     		}else if (band === "The Beatles"){
	  			res.reply("No Way! " + band + " is my favorite too!");
     		}else if (band === "The Eagles"){
	  			res.reply("Man, come on I had a rough night, and I hate the fucking Eagles, man.");
     		}else {
     			res.reply("No worries, I will not tell anyone that " + band + " is your favorite band.");
     		}
     	});

     	 robot.hear(/(.*)/i, function(res){
        	var place = res.match[1];
	  		if ( place === "Montana" ){
	  			res.send("Did I just hear someone say " + place + "? That is like my favorite place in the world!");
	  		}else if (place === "Chile"){
	  			res.send("Did I just hear someone say " + place + "? That is like my favorite place in the world!");
     		}else if (place === "Japan"){
	  			res.send("Did I just hear someone say " + place + "? That is like my favorite place in the world!");
     		}else if (place === "Boston"){
	  			res.send("Did I just hear someone say " + place + "? I do not really like that area!");
     		}
     	});




    }
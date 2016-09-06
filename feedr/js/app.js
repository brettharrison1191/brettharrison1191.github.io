/*
  Please add all Javascript code to this file.
*/

$(document).ready(function(){
	var diggUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';
	var redditUrl = 'https://www.reddit.com/top.json'
	var mashableUrl = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json';
	var arr = [diggUrl, redditUrl, mashableUrl]
	var urls = $.each(arr, function(item, index){
		// console.log(index);
	});

var $article = $('<article>')
var $articleImage = $('<section>').addClass('featuredImage');
var $articleTitle = $('<section>').addClass('articleContent');
var $articleScore = $('<section>').addClass('impressions');
var $articleClear = $('<div>').addClass('clearfix');


var urls = ['https://www.reddit.com/top.json','https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json','https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json'];

$.each(urls, function(i,u){ 
     $.ajax(u, 
       { type: 'GET',
         success: function (response) {
             console.log(urls[i]);
         } 
       }
     )});

     $.ajax({
		url: diggUrl,
		type: 'GET',
		success: function(response){ //response is the name of the object, it can be anything - 


		// CONSTRUCT AN OBJECT
		function Article (title, category, point, summary, image){
		this.title = title;
		this.category = category;
		this.point = point;
		this.summary = summary;
		this.image = image;
		}

		//CALL AN OBJECT - this can also be done by going like this.title = response.data.feed[0].content.title_alt, for each attribute

		function DiggArticle (){
			Article.call(this, 
				// TITLE
				response.data.feed[0].content.title_alt, 
				// CATEGORY
				response.data.feed[0].content.description, 
				// DIGGS
				response.data.feed[0].diggs.count,
				// DESCRIPTION
				response.data.feed[0].content.tags[0].display, 
				// IMAGE
				response.data.feed[0].content.media.images[8].url
				)
		}

		// Not sure exactly why you have to do this....

		DiggArticle.prototype = Article();

		var digg = new DiggArticle();
		console.log(digg);
		console.log(digg.title);
		
		$article.addClass('article').attr('id','articleOne');
		$article.appendTo('#main');
		$articleImage.appendTo($article);

		// $('#main')
		// .appendTo($article)
		// .appendTo($articleTitle)
		// .appendTo($articleImage)
		// .appendTo($articleScore)
		// .appendTo($articleClear);




		// $('#articleOne')
		// 	.append($articleTitle)
		// 	.html(digg.title)
		// 	.append(digg.category)
		// 	.append(digg.point)
		// 	.append(digg.summary);
		$('#main').append($articleTitle);

		}
		
		
})



});




// //sample helper function
// var help = models
// help.hello("world")

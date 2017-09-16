var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {

  //var newQuote=data.quoteText;
  var colorBox=["#DC143C","#8B636C","#FC913A","#45ADA8","#C06C84","#6C5B7B","#355C7D","#FE4365","#594F4F"];
  var colorIndex=Math.floor(Math.random()*10);
  //alert(colorIndex);
  $("body").css("background-color",colorBox[colorIndex]);

  //var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }


    $("#quote").html(data.quoteText);
    $("#quote-author").html("- "+data.quoteAuthor);



  //$(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {

  $.getJSON(url, getQuote, 'jsonp');

  $("#nextquote").on( "click", function(){
   //alert("inside");

    $.ajaxSetup({
    cache: false
    });
    $.getJSON(url, getQuote, 'jsonp');

  });
  $("#tweetquote").on( "click", function(e){
   //alert("inside tweetbutton");

		 event.preventDefault();
		 window.open("https://twitter.com/intent/tweet?text=" +$("#quote").text() + $("#quote-author").text());

  });

});

$(document).ready(function() {
  $('#stock_search').keypress(function(e) {
       if(e.which == 13) {
           jQuery(this).blur();
           jQuery('#stockBtn').focus().click();
           return false
       }
   });


$("#stockBtn").click(function(){
    stock = $('#stock_search').val();
    jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $.ajax({
      url: 'http://dev.markitondemand.com/Api/v2/Lookup/jsonp?',
      data: {'input': stock},
      jsonp: "callback",
      dataType: "jsonp",
      success: function(jsonResult1){
        if (jsonResult1.length >=1){
      $.ajax({
        url: 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?',
        data: {'symbol': jsonResult1[0].Symbol},
        jsonp: "callback",
        dataType: "jsonp",
        success: function(jsonResult2){
          $("#resultsFail").hide()
          $("#results").prepend("<br>Last Updated: " + jsonResult2.Timestamp+'<br>');
          $("#results").prepend("<br>Today's Opening Price: $" + jsonResult2.Open.toFixed(2));
          $("#results").prepend("<br>Today's Low: $" + jsonResult2.Low.toFixed(2));
          $("#results").prepend("<br>Today's High: $" + jsonResult2.High.toFixed(2));
          $("#results").prepend("<br>Current Price: $" + jsonResult2.LastPrice.toFixed(2));
          $("#results").prepend("<br>Symbol: " + jsonResult2.Symbol);
          $("#results").prepend("<br><font color= '#28CFB3'>" + jsonResult2.Name+'</font>');
        }
      });
    }
    else {$("#resultsFail").show()
        $("#resultsFail").prepend("<font color= '#CB233A'>"+"Company info not available. Try a different company."+"</font>")
      }
      }
      });
});
$("#clearBtn").click(function(){
    $("#resultsFail").empty();
    $("#results").empty();
  });
});

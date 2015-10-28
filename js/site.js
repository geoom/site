$(document).ready(function() {
  "use strict";

  $('.button-collapse').sideNav();

  $(".determinate").each(function () {
    var width = $(this).text();
    $(this).css("width", width)
      .empty()
      .append("<i class='fa fa-circle'></i>");
  });

  var height = $('.caption').height();
  if ($(window).width()) {
    $('#featured').css('height', height);
    $('#featured img').css('height', height);
  }


  $('.tooltipped').tooltip({delay: 50});

});


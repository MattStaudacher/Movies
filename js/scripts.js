function Movie(title, time, adult, child, senior) {
  this.title = title;
  this.time = time;
  this.adult = adult;
  this.child = child;
  this.senior= senior;
}

Movie.prototype.total = function() {

  return adultPrice*inputAdultTickets+childPrice*inputChildTickets+seniorPrice*inputSeniorTickets;
}

//userI

$(document).ready(function() {
  $("form#form-movies").submit(function(event) {
      event.preventDefault();

      Movie.prototype.total = function() {

        return adultPrice*inputAdultTickets+childPrice*inputChildTickets+seniorPrice*inputSeniorTickets;
      }

      var inputAdultTickets =parseInt($("input#adult-tickets").val());
      var inputChildTickets = parseInt($("input#child-tickets").val());
      var inputSeniorTickets = parseInt($("input#senior-tickets").val());
      var selectedTime = $("input:radio[name=times]:checked").val();
      var selectedMovie = $("select#movie-titles").val();
      var total= "";
      console.log(selectedTime);

      var newMovie = new Movie (selectedMovie, selectedTime,inputAdultTickets,inputChildTickets,inputSeniorTickets)

      var adultPrice = 12;
      var childPrice = 7;
      var seniorPrice = 5;








      $("ul#movie-purchase").append(
     "<li><span class='movieInfo'>" + newMovie.title + "</span></li>");
   $(".movieInfo").last().click(function(){
     $("#show-movie").show();
     $("#show-movie h2").text(newMovie.title);
     $(".movie-name").text(newMovie.title);
     $(".movie-time").text(newMovie.time);
     $(".number-of-children").text(newMovie.child);
     $(".number-of-seniors").text(newMovie.adult);
      $(".number-of-seniors").text(newMovie.senior);
     $(".total").text(newTicket.total);
    //$(".city-name").text(newTicket.cityName);
   //  $(".state-name").text(newTicket.stateName);
   });



   $("select#movie-titles").val("");
   $(".times").val("");
   $("input#adult-tickets").val("");
   //$("input#new-city-name").val("");
   $("input#child-tickets").val("");
   $("input#senior-tickets").val("");
   $(".total").val("");
 });
 });

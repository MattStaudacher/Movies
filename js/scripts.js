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
  $("#new-movie").submit(function(event) {
      event.preventDefault();

      Movie.prototype.total = function() {

        return adultPrice*inputAdultTickets+childPrice*inputChildTickets+seniorPrice*inputSeniorTickets;
      }

      var inputAdultTickets = $("input#adult-tickets").val();
      var inputChildTickets = $("input#child-tickets").val();
      var inputSeniorTickets = $("input#senior-tickets").val();
      var selectedTime = $("input:radio[name=times]:checked").val();
      var selectedMovie = $("select#movie-titles").val();
      var total= "";

      var newMovie = new Movie (selectedMovie, selectedTime,inputAdultTickets,inputChildTickets,inputSeniorTickets)

      var adultPrice = 12;
      var childPrice = 7;
      var seniorPrice = 5;








      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
          $("#show-movie").show();
          $("#show-movie h2").text(newContact.fullName());
          $(".movie-name").text(newContact.firstName);
          $(".movie-time").text(newContact.lastName);
          $(".number-of-ticket").text("");
          $(".movie-cost").text(newContact.lastName);


      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
        newContact.addresses.push(newAddress)
      });

});

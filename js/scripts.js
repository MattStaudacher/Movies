$(document).ready(function() {
  $("#new-movie").submit(function(event) {
      event.preventDefault();

      var inputAdultTickets = $("input#adult-tickets").val();
      var inputChildTickets = $("input#child-tickets").val();
      var inputSeniorTickets = $("input#senior-tickets").val();

      var inputAdultTickets = 12;
      var inputChildTickets = 7;
      var inputSeniorTickets= 5;

      var total=






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

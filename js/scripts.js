$(document).ready(function() {
  $("form").submit(function(event) {
    let name = $("input#name").val();
    $("#output").text(name);
    $(".first").hide();
    $(".letter").show();

    event.preventDefault();
  });
});
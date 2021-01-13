$(document).ready(function() {
  $(".input-group").submit(function() {
    let name = $("input.form-control").val();
    $("#name").text(name);
    $(".letter").show();
    event.preventDefault();
  })
});
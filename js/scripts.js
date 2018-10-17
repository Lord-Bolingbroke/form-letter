$(document).ready(function() {
  $("#Name").submit(function(event) {
    var Name1Input = $("input#Name1").val();

    $(".Name1").text(Name1Input);

    $("#Letter").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    let resultInput = $("input#result").val();
    $("#return").text(resultInput.toUpperCase())
    $("#return").show();
    });
})
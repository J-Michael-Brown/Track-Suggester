$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var foodInput = $("input:radio[name=food-type]:checked").val();
    var animalInput = $("input:radio[name=animal-type]:checked").val();
    var hobbyInput = $("input:radio[name=hobby-type]:checked").val();


    var shaggy = 0;
    var monster = 0;
    var snow = 0;

    if (foodInput === "burgs-n-dogs") {
      shaggy += 1;
    } else if (foodInput === 'Cookies') {
      monster += 1;
    } else if (foodInput === 'Apples') {
      snow += 1;
    }
    if (animalInput === "dogs") {
      shaggy += 1;
    } else if (animalInput === 'muppets') {
      monster += 1;
    } else if (animalInput === 'forest') {
      snow += 1;
    }
    if (hobbyInput === "mysteries") {
      shaggy += 1;
    } else if (hobbyInput === 'eating') {
      monster += 1;
    } else if (hobbyInput === 'cleaning') {
      snow += 1;
    }

    $(".result-area").show();
    if (shaggy > monster+snow) {
      $(".result").hide();
      $("#shaggy").show();
    } else if (monster > shaggy+snow) {
      $(".result").hide();
      $("#monster").show();
    } else if (snow > shaggy+monster) {
      $(".result").hide();
      $("#snow").show();
    } else {
      $(".result").hide();
      $("#no-one").show();
    }

  });

});

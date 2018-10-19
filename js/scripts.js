var match  = function(subject1, subject2, subject3, subject4) {
  var sub1 = subject1;
  var sub2 = subject2;
  var sub3 = subject3;
  var sub4 = subject4;
  // var sub5 = parseInt($("subject5").val()); No info for CSS/Design yet

  $(".result").hide();
  if (sub1 === sub2 && sub1 === sub3 && sub1 === sub4) {
    $(".result#unsure").show();
  } else if ()


}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var companyInput = $("input:radio[name=company-type]:checked").val();
    var endInput = $("input:radio[name=end-type]:checked").val();
    var appInput = $("input:radio[name=app-type]:checked").val();
    var fourInput = $("input:radio[name=four-type]:checked").val();
    var fifthInput = $("input:radio[name=four-type]:checked").val();

    var rubyRails = 0;
    var phpDrupal = 0;
    var javaAndroid = 0;
    // var cssDesign = 0;
    var CsharpDotNet = 0;

    if (companyInput === "big") {
      CsharpDotNet += 1;
    } else if (companyInput === "upstart") {
      rubyRails += 1;
    } else if (companyInput === "flex") {
      phpDrupal += 1;
    }
    if (endInput === "front") {
      rubyRails += 1;
    } else if (endInput === "back") {
      CsharpDotNet += 1;
      phpDrupal += 1;
    } else if (endInput === "unsure") {
      javaAndroid += 1;
    }
    if (appInput === "android") {
      javaAndroid += 1;
    } else if (appInput === "solve") {
      CsharpDotNet += 1;
      phpDrupal += 1;
    } else if (appInput === "interactive") {
      rubyRails += 1;
    }
    if (fourInput === "one") {

    } else if (appInput === "two") {

    } else if (appInput === "three") {

    }
    if (fifthInput === "one") {

    } else if (appInput === "two") {

    } else if (appInput === "three") {

    }

    match(rubyRails, CsharpDotNet, phpDrupal, javaAndroid);
    // $(".result-area").show();
    // if (shaggy > monster+snow) {
    //   $(".result").hide();
    //   $("#shaggy").show();
    // } else if (monster > shaggy+snow) {
    //   $(".result").hide();
    //   $("#monster").show();
    // } else if (snow > shaggy+monster) {
    //   $(".result").hide();
    //   $("#snow").show();
    // } else {
    //   $(".result").hide();
    //   $("#no-one").show();
    // }

  });

});

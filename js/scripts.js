var match  = function(ruby, java, cSharp, php) {
  // var sub5 = parseInt($("subject5").val()); No info for CSS/Design yet

  $(".result").hide();


  if (ruby === java && ruby === cSharp && ruby === php) {
    $(".result#unsure").show();
  } else {
    if (ruby >= java+cSharp+php) {
      if ((ruby*ruby) > (java*java) + (cSharp*cSharp) + (php*php)) {
        $("#rubyRails").show();
      } else if (ruby === java) {
        $("#rubyRails").show();
        $("#javaAndroid").show();
      } else if (ruby === cSharp) {
        $("#rubyRails").show();
        $("#CsharpDotNet").show();
      } else if (ruby === php) {
        $("#rubyRails").show();
        $("#phpDrupal").show();
      } else {
        $("#unsure").show();
        debugger;
      }
    }
    if (php >= java+cSharp+ruby) {
      if ((php*php) > (java*java) + (cSharp*cSharp) + (ruby*ruby)) {
        $("#phpDrupal").show();
      } else if (php === java) {
        $("#phpDrupal").show();
        $("#javaAndroid").show();
      } else if (php === cSharp) {
        $("#phpDrupal").show();
        $("#CsharpDotNet").show();
      } else if (php === ruby) {
        $("#phpDrupal").show();
        $("#rubyRails").show();
      } else {

        debugger;
      }
    }
    if (cSharp >= java+php+ruby) {
      if ((cSharp*cSharp) > (java*java) + (php*php) + (ruby*ruby)) {
        $("#CsharpDotNet").show();
      } else if (cSharp === java) {
        $("#CsharpDotNet").show();
        $("#javaAndroid").show();
      } else if (cSharp === php) {
        $("#CsharpDotNet").show();
        $("#phpDrupal").show();
      } else if (cSharp === ruby) {
        $("#CsharpDotNet").show();
        $("#rubyRails").show();
      } else {

        debugger;
      }
    }
    if (java >= cSharp+php+ruby) {
      if ((java*java) > (cSharp*cSharp) + (php*php) + (ruby*ruby)) {
        $("#javaAndroid").show();
      } else if (java === cSharp) {
        $("#javaAndroid").show();
        $("#CsharpDotNet").show();
      } else if (java === php) {
        $("#javaAndroid").show();
        $("#phpDrupal").show();
      } else if (java === ruby) {
        $("#javaAndroid").show();
        $("#rubyRails").show();
      } else {
        debugger;
      }
    }
  }
  // need to check for three way tie
  debugger;

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

var match  = function(ruby, java, cSharp, php) {

  $("#footer").show();
  $(".result").hide();
  $(".one-match").hide();
  $(".two-match").hide();

  var rubyInput = $("span#rubyRails").text();
  var cInput = $("span#CsharpDotNet").text();
  var phpInput = $("span#phpDrupal").text();
  var javaInput = $("span#javaAndroid").text();

  if (ruby === 0 && php === 0 && java === 0 && cSharp === 0) {
    $("#nothing").show();
  } else if (ruby > php && ruby === java && ruby === cSharp || ruby > java && ruby === php && ruby === cSharp || ruby > cSharp && ruby === java && ruby === php || php > ruby && php === java && php === cSharp || php > java && php === ruby && php === cSharp || php > cSharp && php === java && php === ruby || ruby === java && ruby === cSharp && ruby === php) {
    $(".result#unsure").show();

  } else {
    if (ruby >= java && ruby >= cSharp && ruby >= php) {
      if (ruby > java && ruby > cSharp && ruby > php) {
        $(".one-match").show();
        $(".result-one").text(rubyInput);
      } else if (ruby === java) {
        $(".two-match").show();
        $(".result-one").text(rubyInput);
        $(".result-two").text(javaInput);
      } else if (ruby === cSharp) {
        $(".two-match").show();
        $(".result-one").text(rubyInput);
        $(".result-two").text(cInput);
      } else if (ruby === php) {
        $(".two-match").show();
        $(".result-one").text(rubyInput);
        $(".result-two").text(phpInput);
      } else {
        $("#error").show();

      }
    }
    if (php >= java && php >= cSharp && php >= ruby) {
      if (php > java && php > cSharp && php > ruby) {
        $(".one-match").show();
        $(".result-one").text(phpInput);
      } else if (php === java) {
        $(".two-match").show();
        $(".result-one").text(javaInput);
        $(".result-two").text(phpInput);
      } else if (php === cSharp) {
        $(".two-match").show();
        $(".result-one").text(cInput);
        $(".result-two").text(phpInput);
      } else {
        $("#error").show();

      }
    }
    if (java >= cSharp && java >= php && java >= ruby) {
      if (java > cSharp && java > php && java > ruby) {
        $(".one-match").show();
        $(".result-one").text(javaInput);
      } else if (java === cSharp) {
        $(".two-match").show();
        $(".result-one").text(cInput);
        $(".result-two").text(javaInput);
      } else {
        $("error").show();
      }

    }
    if (cSharp >= java && cSharp >= php && cSharp >= ruby) {
      if (cSharp > java && cSharp > php && cSharp > ruby) {
        $(".one-match").show();
        $(".result-one").text(cInput);
      } else {
        $("error").show();

      }
    }
  }
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $("#formOne").slideToggle(600);

    $("#result-area").show();
    var companyInput = $("input:radio[name=company-type]:checked").val();
    var endInput = $("input:radio[name=end-type]:checked").val();
    var appInput = $("input:radio[name=app-type]:checked").val();
    var fourthInput = $("input:radio[name=four-type]:checked").val();
    var fifthInput = $("input:radio[name=five-type]:checked").val();

    var rubyRails = 0;
    var phpDrupal = 0;
    var javaAndroid = 0;
    var cSharpDotNet = 0;

    if (companyInput === "big") {
      cSharpDotNet += 1;
    } else if (companyInput === "upstart") {
      rubyRails += 1;
    } else if (companyInput === "flex") {
      phpDrupal += 1;
    }

    if (endInput === "front") {
      rubyRails += 1;
    } else if (endInput === "back") {
      cSharpDotNet += 1;
      phpDrupal += 1;
    } else if (endInput === "unsure") {
      javaAndroid += 1;
    }

    if (appInput === "android") {
      javaAndroid += 1;
    } else if (appInput === "solve") {
      cSharpDotNet += 1;
      phpDrupal += 1;
    } else if (appInput === "interactive") {
      rubyRails += 1;
    }

    if (fourthInput === "CnN") {
      cSharpDotNet += 2;
    } else if (fourthInput === "JnA") {
      javaAndroid += 2;
    } else if (fourthInput === "PnD") {
      phpDrupal += 2;
    } else if (fourthInput === "RnR") {
      rubyRails += 2;
    }

    if (fifthInput === "what") {
      javaAndroid += 1;
    } else if (fifthInput === "who") {
      rubyRails += 1;
    } else if (fifthInput === "how") {
      phpDrupal += 1;
      cSharpDotNet += 1;
    }

    match(rubyRails, javaAndroid, cSharpDotNet, phpDrupal);

  });

  $("#formTwo").submit(function(event) {
    $("#formOne").toggle();
  });
});

var match  = function(ruby, java, cSharp, php) {
  // No info for CSS/Design yet

  $(".result").hide();

  if (ruby > php && ruby === java && ruby === cSharp || ruby > java && ruby === php && ruby === cSharp || ruby > cSharp && ruby === java && ruby === php || php > ruby && php === java && php === cSharp || php > java && php === ruby && php === cSharp || php > cSharp && php === java && php === ruby || ruby === java && ruby === cSharp && ruby === php) { // accounts for three way ties that include ruby or php
    $(".result#unsure").show();
  } else {
    if (ruby >= java && ruby >= cSharp && ruby >= php) {
      if (ruby > java && ruby > cSharp && ruby > php) {
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
        $("#error").show();

      }
    }
    if (php >= java && php >= cSharp && php >= ruby) {
      if (php > java && php > cSharp && php > ruby) {
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
        $("#error").show();

      }
    }
    if (cSharp >= java && cSharp >= php && cSharp >= ruby) {
      if (cSharp > java && cSharp > php && cSharp > ruby) {
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
        $("error").show();

      }
    }
    if (java >= cSharp && java >= php && java >= ruby) {
      if (java > cSharp && java > php && java > ruby) {
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
        $("error").show();
      }

    }
  }
}


$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    $("#result-area").show();
    var companyInput = $("input:radio[name=company-type]:checked").val();
    var endInput = $("input:radio[name=end-type]:checked").val();
    var appInput = $("input:radio[name=app-type]:checked").val();
    var fourthInput = $("input:radio[name=four-type]:checked").val();
    var fifthInput = $("input:radio[name=five-type]:checked").val();

    var rubyRails = 0;
    var phpDrupal = 0;
    var javaAndroid = 0;
    // var cssDesign = 0;
    var cSharpDotNet = 0;

    if (companyInput === "big") {
      cSharpDotNet += 1;
    }
    if (companyInput === "upstart") {
      rubyRails += 1;
    }
    if (companyInput === "flex") {
      phpDrupal += 1;
    }

    if (endInput === "front") {
      rubyRails += 1;
    }
    if (endInput === "back") {
      cSharpDotNet += 1;
      phpDrupal += 1;
    }
    if (endInput === "unsure") {
      javaAndroid += 1;
    }

    if (appInput === "android") {
      javaAndroid += 1;
    }
    if (appInput === "solve") {
      cSharpDotNet += 1;
      phpDrupal += 1;
    }
    if (appInput === "interactive") {
      rubyRails += 1;
    }

    if (fourthInput === "CnN") {
      cSharpDotNet += 2;
    }
    if (fourthInput === "JnA") {
      javaAndroid += 2;
    }
    if (fourthInput === "PnD") {
      phpDrupal += 2;
    }
    if (fourthInput === "RnR") {
      rubyRails += 2;
    }

    if (fifthInput === "what") {
      javaAndroid += 1;
    }
    if (fifthInput === "who") {
      rubyRails += 1;
    }
    if (fifthInput === "how") {
      phpDrupal += 1;
      cSharpDotNet += 1;
    }

    match(rubyRails, javaAndroid, cSharpDotNet, phpDrupal);

  });

});

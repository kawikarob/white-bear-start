$(document).ready(function () {
   $("#sign-up-activate").toggle();
});

$("#sign-up-button").click(function () {
   $("#sign-up-button").toggle();
   $("#sign-up-activate").toggle();
});

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#error-imagery").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

//https://stackoverflow.com/a/6003829

function moveCaretToEnd(el) {
   if (typeof el.selectionStart == "number") {
      el.selectionStart = el.selectionEnd = el.value.length;
   } else if (typeof el.createTextRange != "undefined") {
      el.focus();
      var range = el.createTextRange();
      range.collapse(false);
      range.select();
   }
}

var textarea = document.getElementById("test");

// textarea.onfocus = function () {
//    moveCaretToEnd(textarea);

//    // Work around Chrome's little problem
//    window.setTimeout(function () {
//       moveCaretToEnd(textarea);
//    }, 1);
// };

$("#delete-checkbox").click(function () {
   $("#delete-card").toggleClass("invisible");
});

$("#letsGo").click(function () {
   var emailInput = $("#emailText").val();
   if (emailInput == "") {
      $("#warningEmail").show();
      $("#emailText").addClass("is-invalid");
   } else {
      $("#emailText").removeClass("is-invalid");
      $("#emailText").addClass("is-valid");
      $("#warningEmail").hide();
   }
});

$("#letsGo").click(function () {
   var passwordInput = $("#passwordText").val();
   if (passwordInput.length === 0) {
      $("#warningPassword").show();
      $("#passwordText").addClass("is-invalid");
   } else if (passwordInput.length <= 9) {
      $("#warningLength").show();
      $("#warningPassword").hide();
      $("#passwordText").addClass("is-invalid");
   } else {
      $("#passwordText").removeClass("is-invalid");
      $("#passwordText").addClass("is-valid");
      $("#warningLength, #warningPassword").hide();
   }
});

$(function () {
   $("#countUp").keyup(function () {
      $("#count1").text($(this).val().length); // #countUp can replace $(this)
      var wordCount = $("#countUp").val();
      if (wordCount.length > 0 && wordCount.length <= 240) {
         $("#nextButton").removeClass("disabled");
      } else {
         $("#nextButton").addClass("disabled");
      }
      var limitReached = $("#countUp").val();
      if (limitReached.length > 240) {
         $("#overLimit").addClass("text-danger");
      } else {
         $("#overLimit").removeClass("text-danger");
      }
   });
});

// $("#letsGo").click(function () {
//    var passwordLength = $("#passwordNine").val();
//    if (passwordLength.length <= 9) {
//       $("#warningLength").show();
//       $("#passwordNine").addClass("is-invalid");
//    } else {
//       $("#passwordNine").removeClass("is-invalid");
//       $("#passwordNine").addClass("is-valid");
//       $("#warningLength").hide();
//    }
// });

// //
// else {
//    $("#passwordText").removeClass("is-invalid");
//    $("#passwordText").addClass("is-valid");
//    $("#warningPassword").hide();
// }

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

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

$("#delete-checkbox").click(function () {
   $("#delete-card").toggleClass("invisible");
});

// card 1 - email
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

// card 1 - password
$("#letsGo").click(function () {
   var passwordInput = $("#passwordText").val();
   var emailInput = $("#emailText").val();
   if (passwordInput.length === 0) {
      $("#warningPassword").show(); // shows warning need pw
      $("#passwordText").addClass("is-invalid"); // shows invalid
   } else if (passwordInput.length < 9) {
      $("#warningLength").show(); // shows that pw needs min of 9 char
      $("#warningPassword").hide(); // hides input pw warning
      $("#passwordText").addClass("is-invalid");
   } else if (passwordInput == emailInput) {
      $("#warningSameAsLocal").show(); // shows cannot be same as email
      $("#warningLength").hide(); // hides the pw <=9 warning
      $("#warningPassword").hide();
      $("#passwordText").addClass("is-invalid");
   } else {
      $("#passwordText").removeClass("is-invalid");
      $("#warningSameAsLocal").removeClass("is-invalid");
      $("#passwordText").addClass("is-valid");
      $("#warningLength, #warningPassword").hide();
   }

   var obj = {
      _id: 678123,
      email: emailInput,
      password: passwordInput,
      createdOn: 200620222659,
   };
   console.log(obj);
});

// card 2 - email - NEED TO ADD FUNTIONS!
// $("#letsGo").click(function () {
//    var emailInput = $("#existingEmail").val();
//    if (emailInput == "") {
//       $("#warningEmail").show();
//       $("#existingEmail").addClass("is-invalid");
//    } else {
//       $("#existingEmail").removeClass("is-invalid");
//       $("#existingEmail").addClass("is-valid");
//       $("#warningEmail").hide();
//    }
// });

$("#answerInput").keyup(function () {
   var input = $("#answerInput").val(); // what the user entered to the text area
   var charCount = input.length; //how many characters the user input
   $("#charNum").text(charCount);
   // console.log(charCount);
   if (charCount > 0 && charCount <= 240) {
      $("#nextButton").removeClass("disabled");
   } else {
      $("#nextButton").addClass("disabled");
   }
   if (charCount > 240) {
      $("#overLimit").addClass("text-danger");
   } else {
      $("#overLimit").removeClass("text-danger");
   }
});
// practice markup -- NEED TO DELETE AFTER
// $("#letsGo").click(function () {
//    var passwordInput = $("#passwordText").val();
//    if (passwordInput.length === 0) {
//       $("#warningPassword").show(); // shows warning need pw
//       $("#passwordText").addClass("is-invalid"); // shows invalid
//    } else if (passwordInput.length <= 9) {
//       $("#warningLength").show(); // shows that pw needs min of 9 char
//       $("#warningPassword").hide(); // hides input pw warning
//       $("#passwordText").addClass("is-invalid");
//       } else if (passwordInput === emailInput) {
//          $("#warningSameAsLocal").show(); // shows cannot be same as email
//          $("#warningLength").hide(); // hides the pw <=9 warning
//          $("#passwordText").addClass("is-invalid");
//       } else {
//       $("#passwordText").removeClass("is-invalid");
//       $("#passwordText").addClass("is-valid");
//       $("#warningLength, #warningPassword").hide();
//    }
// });

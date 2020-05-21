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

// CARD 1 - EMAIL
$("#letsGo").click(function () {
   var isValidEamil = false;
   var isValidPassword = false;
   var emailInput = $("#emailText").val();
   if (emailInput == "") {
      $("#warningEmail").show();
      $("#emailText").addClass("is-invalid");
   } else {
      $("#emailText").removeClass("is-invalid");
      $("#emailText").addClass("is-valid");
      $("#warningEmail").hide();
      isValidEmail = true;
   }
   // PASSWORD
   var isValidPassword = false;
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
      $("#warningLength").hide(); // hides the pw <9 warning
      $("#warningPassword").hide();
      $("#passwordText").addClass("is-invalid");
   } else {
      $("#passwordText").removeClass("is-invalid");
      $("#warningSameAsLocal").removeClass("is-invalid");
      $("#passwordText").addClass("is-valid");
      $("#warningLength, #warningPassword, #warningSameAsLocal").hide();

      isValidPassword = true;
   }

   var userStamp = {
      _id: 678123,
      email: emailInput,
      password: passwordInput,
      createdOn: 200508232659,
   };
   // if user email and password is valid
   if (isValidEmail === true && isValidPassword === true) {
      console.log(userStamp);
   }

   // PADDING FOR DATES
   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num); // add 0 to single digits
      } else {
         return num;
      }
   }
   // GETS CREATEDON VALUE
   var todaysDate = new Date(); // current date
   var todaysYear = todaysDate.getYear() - 100;
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 based
   var todaysDay = todaysDate.getDate();
   var todaysHour = todaysDate.getHours();
   var todaysMin = todaysDate.getMinutes();
   var todaysSec = todaysDate.getSeconds();
   var todaysMilli = todaysDate.getMilliseconds();
   var todaysDateTime =
      "" +
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   userStamp.createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the user object, createdOn property

   // _id VALUE
   function idPadding(num) {
      if (String(num).length === 4) {
         return "00" + String(num);
      } else if (String(num).length === 5) {
         return "0" + String(num);
      } else {
         return num;
      }
   }
   var randomNumber = Math.floor(Math.random() * 1000);
   var milliRandomNumber =
      "" + idPadding(todaysMilli) + idPadding(randomNumber);
   userStamp._id = milliRandomNumber;
});

///// CREATE IMAGERY/////
$("#saveImagery").click(function () {
   console.log({
      _id: 002045,
      imagery:
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
      answer:
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: 200508232659,
      lastAttemptedOn: 200508232659, // same as createdOn
   });

   // creates padding for the dates and adds a 0 if they are one digit
   function addPadding(num) {
      if (String(num).length < 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }
   // GETS CREATEDON VALUE
   var todaysDate = new Date(); // current date
   var todaysYear = todaysDate.getYear() - 100;
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 based
   var todaysDay = todaysDate.getDate();
   var todaysHour = todaysDate.getHours();
   var todaysMin = todaysDate.getMinutes();
   var todaysSec = todaysDate.getSeconds();
   var todaysMilli = todaysDate.getMilliseconds();
   var todaysDateTime =
      "" +
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the user object, createdOn property
   var createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the user object, createdOn property
   console.log(createdOn);

   // _id VALUE
   function idPadding(num) {
      if (String(num).length === 1) {
         return "00" + String(num);
      } else if (String(num).length === 2) {
         return "0" + String(num);
      } else {
         return num;
      }
   }

   var randomNumber = Math.floor(Math.random() * 1000);
   var idNumber2 = "" + idPadding(todaysMilli) + idPadding(randomNumber);
   console.log(idNumber2);
});

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

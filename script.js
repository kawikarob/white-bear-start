$(document).ready(function () {
   $("#sign-up-activate").toggle();
});

$("#sign-up-button").click(function () {
   $("#sign-up-button").toggle();
   $("#sign-up-activate").toggle();
});

// Most popular password with x, y, z
let popularPasswords = [
   "x002tp00",
   "x4ww5qdr",
   "x72jhhu3z",
   "xaccess2",
   "xakep1234",
   "xboxlive",
   "xcalibur",
   "xcountry",
   "xenocide",
   "xenogear",
   "xenophobia",
   "xenophobic",
   "xenophon",
   "xexeylhf",
   "xianzong",
   "xiaoping",
   "xiaoyua123",
   "xinjiang",
   "xohzi3g4",
   "xpressmusic",
   "xsvnd4b2",
   "xsw21qaz",
   "xsw23edc",
   "xthtgfirf",
   "xtutdfhf",
   "xuanzang",
   "xuanzong",
   "xufrgemw",
   "xxx12345",
   "xxxp455w0rd5",
   "xxxxxxx1",
   "xyh28af4",
   "xylophone",
   "xzsawq21",
   "y'knowwhati'msayin",
   "y'understand",
   "yachting",
   "yaglasph",
   "yakovlev",
   "yakushova",
   "yamagata",
   "yamaha12",
   "yamahar1",
   "yamahar6",
   "yamakasi",
   "yamamoto",
   "yamanashi",
   "yamashita",
   "yammering",
   "yangzhou",
   "yankeemp",
   "yankees0",
   "yankees1",
   "yankees2",
   "yankees3",
   "yankees4",
   "yankees7",
   "yankees9",
   "yankovic",
   "yanochka",
   "yanshi1982",
   "yanukovych",
   "yarborough",
   "yarbrough",
   "yardbird",
   "yardbirds",
   "yardstick",
   "yarmouth",
   "yaroslav",
   "yaroslavl",
   "yasacrac",
   "yasuhiro",
   "ybrbnbyf",
   "ybrbnf_25",
   "ybrbnjcbr",
   "ybrjkftd",
   "ybrjkftdbx",
   "ybrjkftdyf",
   "ycwvrxxh",
   "yeahbaby",
   "yeahrigh",
   "yeahright",
   "year2000",
   "year2005",
   "yearbook",
   "yearbooks",
   "yearning",
   "yearnings",
   "yekaterinburg",
   "yelburton",
   "yelena03",
   "yellow12",
   "yellow22",
   "yellowhead",
   "yellowish",
   "yellowknife",
   "yellowstone",
   "yelverton",
   "yemenite",
   "yengeese",
   "yeomanry",
   "yes90125",
   "yeshivas",
   "yessenia",
   "yesterda",
   "yesterday",
   "yesterdays",
   "yfcnfcmz",
   "yfcntymrf",
   "yfcnz123",
   "yfcnzvjz",
   "yfcnzyfcnz",
   "yfdbufnjh",
   "yfeiybrb",
   "yfgjktjy",
   "yfhrjnbrb",
   "yfltymrf",
   "yfnfitymrf",
   "yfxfkmybr",
   "ygfxbkgt",
   "yggdrasi",
   "yielding",
   "yildirim",
   "yingling",
   "yingyang",
   "yitzchak",
   "yjdbrjdf",
   "yjdjcnbf",
   "yjdsqgfhjkm",
   "yjdsqujl",
   "yjdujhjl",
   "yjhbkmcr",
   "ym3cautj",
   "yogibear",
   "yogyakarta",
   "yohannan",
   "yokohama",
   "yokosuka",
   "yokozuna",
   "yorkshir",
   "yorkshire",
   "yorktown",
   "yorkville",
   "yosemite",
   "yoshihiro",
   "youandme",
   "youlanda",
   "youngblood",
   "youngest",
   "youngman",
   "youngone",
   "youngster",
   "youngsters",
   "youngstown",
   "yourmama",
   "yourmom1",
   "yourname",
   "yourself",
   "yourselves",
   "yousuck1",
   "youthful",
   "yoyodyne",
   "ypsilanti",
   "yqlgr667",
   "yqmbevgk",
   "yr8wdxcq",
   "ytdxz2ca",
   "ytngfhjkz",
   "ytnhjufnm",
   "ytrhjvfyn",
   "ytyfdbcnm",
   "yudhoyono",
   "yugoslav",
   "yugoslavia",
   "yugoslavian",
   "yuitre12",
   "yujyd360",
   "yuletide",
   "yushchenko",
   "yvelines",
   "yvtte545",
   "yxkck878",
   "yy5rbfsc",
   "yyyyyyy1",
   "yzerman1",
   "z1234567",
   "z123456789",
   "z123456z",
   "z1x2c3v4",
   "z1x2c3v4b5",
   "z1x2c3v4b5n6m7",
   "z1z2z3z4",
   "z3cn2erv",
   "zacatecas",
   "zacharia",
   "zachariah",
   "zacharias",
   "zachary1",
   "zaharova",
   "zakamatak",
   "zalewski",
   "zalgiris",
   "zamarripa",
   "zambales",
   "zamboanga",
   "zambrano",
   "zamindar",
   "zamoyski",
   "zanesville",
   "zantopia",
   "zanzibar",
   "zapatista",
   "zaphod42",
   "zaporizhia",
   "zapruder",
   "zaq!2wsx",
   "zaq11qaz",
   "zaq12345",
   "zaq123wsx",
   "zaq12qaz",
   "zaq12wsx",
   "zaq1xsw2",
   "zaq1xsw2cde3",
   "zaqwsx123",
   "zaqwsxcde",
   "zaqwsxcderfv",
   "zaqxsw123",
   "zaqxswcde",
   "zaragoza",
   "zaratustra",
   "zarzuela",
   "zasranec",
   "zatunica",
   "zawahiri",
   "zaxscdvf",
   "zbigniew",
   "zcfvfzkexifz",
   "zcxfcnkbdf",
   "zcxfcnkbdfz",
   "zealander",
   "zealanders",
   "zebra123",
   "zechariah",
   "zeebrugge",
   "zeitgeist",
   "zeitschrift",
   "zeljeznicar",
   "zemanova",
   "zendejas",
   "zenit2011",
   "zeppelin",
   "zeringue",
   "zerocool",
   "zesyrmvu",
   "zhaozong",
   "zhejiang",
   "zhengzhou",
   "zhjckfdf",
   "zhongguo",
   "zhongshan",
   "zhongshu",
   "zhongzong",
   "zhytomyr",
   "zidane10",
   "ziegfeld",
   "zielinski",
   "zigazaga",
   "ziggy123",
   "zildjian",
   "zillions",
   "zimbabwe",
   "zimbabwean",
   "zimmerma",
   "zimmerman",
   "zimmermann",
   "zinedine",
   "zinfandel",
   "zinoviev",
   "zionists",
   "zipdrive",
   "zippy123",
   "zirconia",
   "zirconium",
   "zjses9evpa",
   "zldej102",
   "zoidberg",
   "zolushka",
   "zombie13",
   "zookeeper",
   "zoological",
   "zoologist",
   "zooplankton",
   "zootsuit",
   "zoroaster",
   "zoroastrian",
   "zoroastrianism",
   "zoroastrians",
   "zorro123",
   "zpflhjn1",
   "zqjphsyf6ctifgu",
   "zrjdktdf",
   "zse45rdx",
   "zse4xdr5",
   "zsecyus56",
   "zucchero",
   "zucchini",
   "zuckerberg",
   "zuckerman",
   "zukowski",
   "zulfikar",
   "zulfiqar",
   "zvonareva",
   "zweibrucken",
   "zx123456",
   "zx123456789",
   "zxasqw12",
   "zxc12345",
   "zxc123456",
   "zxc123zxc",
   "zxcasd123",
   "zxcasdqw",
   "zxcasdqwe",
   "zxcasdqwe123",
   "zxcqweasd",
   "zxcv1234",
   "zxcv4321",
   "zxcvasdf",
   "zxcvb123",
   "zxcvb1234",
   "zxcvb12345",
   "zxcvbasdfg",
   "zxcvbn12",
   "zxcvbn123",
   "zxcvbn123456",
   "zxcvbnm.",
   "zxcvbnm1",
   "zxcvbnm12",
   "zxcvbnm123",
   "zxcvbnm123456789",
   "zxcvbnma",
   "zxcvbnmm",
   "zxcvbnmz",
   "zxcvfdsa",
   "zxcvvcxz",
   "zz123456",
   "zz8807zpl",
   "zzxxccvv",
   "zzzxxxccc",
   "zzzzxxxx",
   "zzzzzzz1",
];
// filter most common popular passwords beginning with x, y, z
let popularEightCharPasswords = popularPasswords.filter(
   (passwords) => passwords.length > 8 // filters through pw array above & returns pw > 8 char
);

/// LANDING PAGE ///
// CARD 1 - EMAIL
$("#letsGo").click(function () {
   // the let's go button has the id of letsGo. when button is clicked, the code below will run
   var isValidEmail = false;
   var isValidPassword = false;

   var emailInput = $("#emailRequired").val();
   if (emailInput == "") {
      // if email address box value is blank when the button lets go is clicked
      $("#warningEmail").show(); // shows warning text of "please enter your email addess" is shown
      $("#emailRequired").addClass("is-invalid"); // Bootstrap class is-invalid will border the email address box to red
   } else {
      // if email address box value does conatins an email
      $("#emailRequired").removeClass("is-invalid"); // Bootstrap class is-invaild is removed
      $("#emailRequired").addClass("is-valid"); // Bootstrap class is-valid turns email address box border green
      $("#warningEmail").hide(); // warning sign of "please enter your email address" hides
      isValidEmail = true;
   }
   // CARD 1 - PASSWORD
   var isValidPassword = false;

   var passwordInput = $("#passwordInput").val();
   if (passwordInput.length === 0) {
      // if the pw box value is blank
      $("#warningPassword").show(); // shows warning text of "please enter your password"
      $("#passwordInput").addClass("is-invalid"); // Bootstrap class is-invalid will border the pw box to red
   } else if (passwordInput.length < 9) {
      // if the pw value is less than 9 char
      $("#warningLength").show(); // warning text of "your password must be at least 9 characters" shows
      $("#warningPassword").hide(); // hides previous warning text
      $("#passwordInput").addClass("is-invalid"); // Bootstrap class is-invalid will border the pw box to red
   } else if (passwordInput == emailInput) {
      // if the value of email address and pw are the same
      $("#warningSameAsLocal").show(); // warning text of "your email address cannot be used in your password" is shown
      $("#warningLength, #warningPassword").hide(); // hides previous warning text for pw length < 9 & blank pw
      $("#passwordInput").addClass("is-invalid"); // Bootstrap class is-invalid will border the pw box to red
   } else if (popularEightCharPasswords.includes(passwordInput)) {
      // if pw contains popular pw
      $("#warningStrongerPassword").show(); // warning text of "Please enter a stronger password" shows
      $("#warningPassword, #warningLength, #warningSameAsLocal").hide(); // hides all prev warning text
      $("#passwordInput").addClass("is-invalid"); // removes red boarder
   } else {
      // if everything from above is valid
      $("#passwordInput").removeClass("is-invalid"); // removes previous Bootstrap is-invalid red boarder
      $("#passwordInput").addClass("is-valid"); // Bootstrap class is-valid turns pw box border green
      $(
         "#warningLength, #warningPassword, #warningSameAsLocal, #warningStrongerPassword"
      ).hide(); // hides all previous warning text

      isValidPassword = true;
   }

   var userStamp = {
      _id: milliRandomNumber,
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
         return "0" + String(num); // add 0 to single digits numbers
      } else {
         return num;
      }
   }
   // GETS CREATEDON VALUE -- maybe can make a function to use for both cards to clean it up
   var todaysDate = new Date(); // current date
   var todaysYear = todaysDate.getYear() - 100; // year >= 2000, needs to sub 100 for current year
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 based, need to +1 for currtent month
   var todaysDay = todaysDate.getDate(); // current day
   var todaysHour = todaysDate.getHours(); // current hour
   var todaysMin = todaysDate.getMinutes(); // current minute
   var todaysSec = todaysDate.getSeconds(); // current second
   var todaysMilli = todaysDate.getMilliseconds(); // current milisecond
   var todaysDateTime =
      "" +
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   userStamp.createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the createdOn property

   // _id VALUE
   function idPadding(num) {
      if (String(num).length === 4) {
         // if length of number is 4 (digits)
         return "00" + String(num); // returns number with two 0s infront of the number
      } else if (String(num).length === 5) {
         // if lenght of number is 5 (digits)
         return "0" + String(num); // returns number with one 0 infront of the number
      } else {
         return num;
      }
   }
   var randomNumber = Math.floor(Math.random() * 1000); // rounds random number down and multiplies it by 1000
   var milliRandomNumber =
      "" + idPadding(todaysMilli) + idPadding(randomNumber);
   userStamp._id = milliRandomNumber;
});

///// CREATE IMAGERY/////
$("#saveImagery").click(function () {
   var userStamp2 = {
      _id: "",
      imagery:
         "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
      answer:
         "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
      levelNum: 1,
      successfulAttemptsNum: 0,
      createdOn: 200508232659,
      lastAttemptedOn: 200508232659, // same as createdOn
   };

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
   var todaysYear = todaysDate.getYear() - 100; // current year
   var todaysMonth = todaysDate.getMonth() + 1; // months are 0 based
   var todaysDay = todaysDate.getDate(); // current day
   var todaysHour = todaysDate.getHours(); // current hour
   var todaysMin = todaysDate.getMinutes(); // current minute
   var todaysSec = todaysDate.getSeconds(); // current second
   var todaysMilli = todaysDate.getMilliseconds(); // current milisecond
   var todaysDateTime =
      "" +
      addPadding(todaysYear) +
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   userStamp2.createdOn = todaysDateTime; // pushes the string of todaysDateTiome to the userStamp2 createdOn property
   userStamp2.successfulAttemptsNum = todaysDateTime;

   // _id VALUE
   function idPadding(num) {
      if (String(num).length === 1) {
         return "00" + String(num); // if number length is 1, then adds two 0s infront of the number
      } else if (String(num).length === 2) {
         return "0" + String(num); // if number length is 2, then adds one 0 infront of the number
      } else {
         return num;
      }
   }

   var randomNumber = Math.floor(Math.random() * 1000);
   var milliRandomNumber =
      "" + idPadding(todaysMilli) + idPadding(randomNumber);
   userStamp2._id = milliRandomNumber;

   console.log(userStamp2);
});

$("#answerInput").keyup(function () {
   var input = $("#answerInput").val(); // what the user entered to the text area
   var charCount = input.length; //how many characters the user input
   $("#charNum").text(charCount);
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

$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#error-imagery").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#delete-checkbox").click(function () {
   $("#delete-card").toggleClass("invisible");
});

// ///  CHALENGE ///
// $("#clickIt").click(function () {
//    // the button click has the id of clickIt. When the buttton is clicked, the code below will run.
//    var todaysDate = new Date(); // current date
//    var todaysMilli = todaysDate.getMilliseconds(); // current date's milliseconds
//    var todaysMilliWholeNumber = Math.floor(todaysMilli); // rounds the current date's millisec down so it can be a whole number
//    if (todaysMilliWholeNumber % 2 == 0) {
//       // dividing the millisec whole number by 2 and getting the remainder
//       $("#clickIt").addClass("btn-danger"); // if there is no remainder (0), then the number is even. the button will then turn red
//    } else {
//       $("#clickIt").addClass("btn-info"); // if they is a remainder, then the number is odd. the button will turn blue.
//       $("#clickIt").removeClass("btn-danger"); // this will remove the btn-danger class
//    }
//    console.log(todaysMilliWholeNumber);
// });

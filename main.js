//GETTING AND CREATING DEFAULT VALUES
var formValue = document.forms["formValue"];
let inputTextValue = document.getElementById("inputTextValue");
let outputTextValue = document.getElementById("outputTextValue");
let outputValue = document.getElementById("outputValue");
let imgNoText = document.getElementById("imgNoText");
const message = "You must enter a text";
const errorTextMessage = "You must enter a text without special characters";
const copyMessage = "Copied to Clipboard";
var textValue = "";
var counter = 1;

const firstKey = "ai"; //a
const secondKey = "enter"; //e
const thirdKey = "imes"; //i
const fourthKey = "ober"; //o
const fifthKey = "ufat"; //u

const aa = "a";
const ee = "e";
const ii = "i";
const oo = "o";
const uu = "u";

var textEncrypted = [];
const numFilter = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", "@", "$", "%", "^", "&", "*", "(", ")", "_", "+", "/", ];
var finalResult;

function filterAlpha(prosses) {
  var action;
  formValue.onsubmit = function (e) {
    e.preventDefault();
    textValue = document.formValue.textValue.value.toLowerCase();
    for (let a = 0; a < numFilter.length; a++) {
      const e = numFilter[a];
      for (let i = 0; i < textValue.length; i++) {
        const o = textValue[i];
        if (o == e) {
          action = false;
          document.getElementById("alert_message").innerHTML = `<b>${counter++} ERROR!</b> ${errorTextMessage}`;
          return;
        } else {
          action = true;
        }
      }
    }
    if (action) {
        if (prosses) {
            actionValue(prosses);
        } else {
            actionValue(prosses);
        }
    }
  };
}

function actionValue(bool) {
  var newValue = null;
  finalResult = null;
  //console.log(textValue);
  if (textValue) {
    document.getElementById("alert_message").innerHTML = "";
    document.getElementById("copied_message").innerHTML = "";
    if (bool) {
      console.log("Encrypting");
      for (let i = 0; i < textValue.length; i++) {
        const e = textValue[i];
        if (e === aa) {
          textEncrypted.push(firstKey);
        } else if (e === ee) {
          textEncrypted.push(secondKey);
        } else if (e === ii) {
          textEncrypted.push(thirdKey);
        } else if (e === oo) {
          textEncrypted.push(fourthKey);
        } else if (e === uu) {
          textEncrypted.push(fifthKey);
        } else {
          textEncrypted.push(e);
        }
      }
      newValue = textEncrypted.toString();
      finalResult = newValue.replace(/,/gm, "");
      formValue.reset();
      //console.log(finalResult);
    } else {
      console.log("Decrypt");
      var stepOne = textValue.replace(/ai/g, aa);
      var stepTwo = stepOne.replace(/enter/g, ee);
      var stepThree = stepTwo.replace(/imes/g, ii);
      var stepFour = stepThree.replace(/ober/g, oo);
      var stepFive = stepFour.replace(/ufat/g, uu);
      finalResult = stepFive;
    }

    document.getElementById("outputValue").innerHTML = finalResult;
    inputTextValue.className = "ct-flex-none";
    outputTextValue.className = "ct-flex-flex";
    checkInput();

    //I NEED TO BE SURE TO CLEAR EVERYTHING ;)
    document.getElementById("formValue").reset();
    textValue = "";
    textEncrypted = [];
  } else {
    document.getElementById("alert_message").innerHTML = message;
    checkInput();
  }
}

function goBack() {
  outputTextValue.className = "ct-flex-none";
  inputTextValue.className = "ct-flex-flex";
  document.getElementById("copied_message").innerHTML = "";
  finalResult = null;
  checkInput();
}

function copyToClipboard() {
  navigator.clipboard.writeText(finalResult);
  document.getElementById("copied_message").innerHTML = copyMessage;
}

function newCode() {
  document.getElementById("copied_message").innerHTML = "";
  document.getElementById("outputValue").innerHTML = "";
  finalResult = null;
  checkInput();
}

function checkInput() {
  if (finalResult) {
    console.log("Showing textarea");
    outputValue.className = "ct-desktop-flex";
    imgNoText.className = "ct-desktop-none";
  } else {
    console.log("Showing img");
    outputValue.className = "ct-desktop-none";
    imgNoText.className = "ct-desktop-flex";
  }
}

function showDialog(name) {
  window.mydialog.show();
}

function closeDialog() {
  var dialog = name;
  //window.`${dialog}`.close();
}
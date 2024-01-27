//GETTING AND CREATING DEFAULT VALUES
var formValue = document.forms['formValue'];
let inputTextValue = document.getElementById("inputTextValue");
let outputTextValue = document.getElementById("outputTextValue");
const message = "You must enter a text";
const copyMessage = "Copied to Clipboard";

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
var finalResult;

function actionValue(bool) {
    formValue.onsubmit = function(e) {
        e.preventDefault();
        var newValue = null;
        finalResult = null;
        let textValue = document.formValue.textValue.value.toLowerCase();
        //console.log(textValue);
        if (textValue) {
            if (bool) { 
                console.log('Encrypting');
                for (let i = 0; i < textValue.length; i++) {
                    const e = textValue[i];
                    if(e === aa){
                        textEncrypted.push(firstKey);
                    } else if (e === ee){
                        textEncrypted.push(secondKey);
                    } else if (e === ii){
                        textEncrypted.push(thirdKey);
                    } else if (e === oo){
                        textEncrypted.push(fourthKey);
                    } else if ( e === uu){
                        textEncrypted.push(fifthKey);
                    } else {
                        textEncrypted.push(e);
                    }
                }
                newValue = textEncrypted.toString();
                finalResult = newValue.replace(/,/gm,'');
                formValue.reset();
                //console.log(finalResult);
            } else {
                console.log('Decrypt');
                var stepOne = textValue.replace(/ai/g, aa);
                var stepTwo = stepOne.replace(/enter/g, ee);
                var stepThree = stepTwo.replace(/imes/g, ii);
                var stepFour = stepThree.replace(/ober/g, oo);
                var stepFive = stepFour.replace(/ufat/g, uu);
                finalResult = stepFive;
            }
    
            console.log(finalResult);
            document.getElementById('outputValue').innerHTML = finalResult;
            inputTextValue.className = "ct-flex-none";
            outputTextValue.className = "ct-flex-flex";
    
            //I NEED TO BE SURE TO CLEAR EVERYTHING ;)
            document.getElementById("formValue").reset();
            textValue = "";
            textEncrypted = [];
        } else {
            document.getElementById('alert_message').innerHTML = message;
        }

    }
}

function goBack(){
    outputTextValue.className = "ct-flex-none";
    inputTextValue.className = "ct-flex-flex";
    document.getElementById('copied_message').innerHTML = "";
}

function copyToClipboard(){
    navigator.clipboard.writeText(finalResult);
    document.getElementById('copied_message').innerHTML = copyMessage;
}
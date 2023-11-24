// pin section start
function pin(){
    const getPin = pinGenerate();
    const string = getPin + '';
    if (string.length === 4){
        return getPin;
    }
    else {
        return pin();
    }
}

function pinGenerate(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('btn-pin').addEventListener('click', function(){
    const getPin = pin();

    const pinField = document.getElementById('pin-input');
    pinField.value = getPin;
});
// pin section end

// submit section start
document.getElementById('calculator').addEventListener('click', function (event){
    const  number = event.target.innerText;
    const typeNumber = document.getElementById('calculator-input');
    const previousNumber = typeNumber.value;

    if (isNaN(number)){
        if (number === 'C'){
            typeNumber.value = '';
        }
    }
    else {
       const newNumber = previousNumber + number ;
       typeNumber.value = newNumber;
    }
});

document.getElementById('button').addEventListener('click', function(){
    const oldPin = document.getElementById('pin-input');
    const newPin = oldPin.value;

    const oldNumberType = document.getElementById('calculator-input');
    const newNumberType = oldNumberType.value;


    if (newNumberType === newPin){
        alert ('Pin Match');
    }
    else{
        alert ('Pin Didnot Match');
    }

});
// submit section end




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
})




// pin section end
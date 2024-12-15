const inputField = document.getElementById('inputField')

function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (/mobile|android|iphone|ipad|tablet/.test(userAgent)) {
        console.log("You're using a mobile or tablet.");
        
        inputField.addEventListener('input', function(e) {
            setInterval(() => {}, 100);
            const currentValue = inputField.value[inputField.value.length - 1];
            inputField.placeholder = `${currentValue} : ${currentValue.charCodeAt(0)}`;
            inputField.value = '';
        });
        
        inputField.focus();
    }
    else {
        console.log("You're using a laptop or PC.");

        inputField.disabled = true;
        
        window.addEventListener('keydown', function(e) {
            inputField.placeholder = `${e.key} : ${e.key.charCodeAt(0)}`;
            // this.document.getElementsByTagName('input')[0].value = '';
        });
    }
}

// Run on page load
window.onload = detectDevice;
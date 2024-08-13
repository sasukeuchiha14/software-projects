var clickCount = 0;

function openFullscreen() {
    clickCount++;
    if (clickCount % 2 != 0) {
        const elem = document.documentElement;
    
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }
        document.getElementById("smallscreen").classList.remove("hide");
        document.getElementById("fullscreen").classList.add("hide");
    }
    else{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        document.getElementById("fullscreen").classList.remove("hide");
        document.getElementById("smallscreen").classList.add("hide");
    }
}

var actions = [
    ['.',"Reading your data"],
    ['.',"Password Cracking"],
    ['.',"Stealing your money"],
    ['.',"Hacking Complete"],
    ['!',"Cleaning Residue"],
];    

function blinkDots(wait, dot) {
    let dots_count = 0;
    let interval = setInterval(() => {
        document.getElementById("terminal").innerText += dot;
        dots_count++;
        if (dots_count == 3) {
            clearInterval(interval);
        }    
    }, wait * 250);    
}    

function delay(action, wait, dots) {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById("terminal").innerText += "\n" + action;
            resolve();
        }, wait * 1000);    
        blinkDots(wait, dots);
    });    
}

function clean() {
    setTimeout(() => {
        document.getElementById("terminal").innerText = "";
    }, 2000);
}

function blinkCutsor() {
    setInterval(() => {
        let terminal = document.getElementById("terminal");
        if (terminal.innerText[terminal.innerText.length - 1] == "_") {
            terminal.innerText = terminal.innerText.slice(0, -1);
        } else {
            terminal.innerText += "_";
        }    
    }, 500);
}

async function runActions() {
    for (var i = 0; i < actions.length; i++) {
        let wait = Math.floor(Math.random() * 7) + 1;
        await delay(actions[i][1], wait, actions[i][0]);
    }
    clean();
    blinkCutsor();
}    

runActions();

var actions = [
    "Initializing Hacking",
    "Reading your data",
    "Password Cracking",
    "Stealing your money",
    "Hacking Complete"
];

function delay(action, wait) {
    return new Promise(resolve => {
        setTimeout(() => {
            document.getElementById("terminal").innerText += "\n" + action;
            resolve();
        }, wait * 1000);
    });
}

async function runActions() {
    for (var i = 0; i < actions.length; i++) {
        let wait = Math.floor(Math.random() * 7) + 1;
        await delay(actions[i], wait);
    }
}

runActions();

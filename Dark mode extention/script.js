// Fetch the code file
fetch('E:\\College\\Crazzy_Stuff\\Dark mode extention\\code.js')
    .then(response => response.text())
    .then(code => {
        // Execute the code
        eval(code);
    })
    .catch(error => {
        console.error('Error loading code file:', error);
    });

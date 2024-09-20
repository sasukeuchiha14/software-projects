window.addEventListener('keydown', function(e) {
    this.document.getElementsByClassName('container')[0].innerHTML = `${e.key} : ${e.key.charCodeAt(0)}`;
});
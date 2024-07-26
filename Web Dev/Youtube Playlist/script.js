function only_num(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode>31 && ( charCode<48 || charCode>57 )) {
        return false
    }
    return true
}

function only_num_col(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode!=58 && charCode>31 && ( charCode<48 || charCode>57 )) {
        return false
    }
    return true
}

function show(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = 'block';
    }
}

function redirect(link) {
    window.open(link, '_blank');
    // window.location.href = link; To change existing page's link
}

function check_vid_length(time) {
    let timeArr = time.split(':');
    let hours = parseInt(timeArr[0]);
    let minutes = parseInt(timeArr[1]);
    let seconds = parseInt(timeArr[2]);

    if (timeArr[0].length != 2 || timeArr[1].length != 2 || timeArr[2].length != 2 || hours > 24 || minutes > 59 || seconds > 59 || hours < 0 || minutes < 0 || seconds < 0) {
        return false;
    }

    return true;
}

function views_short(views) {
    let shortForm = "";

    if (views >= 1000000000) {
        shortForm = (views / 1000000000).toFixed(2) + "B";
    } else if (views >= 1000000) {
        shortForm = (views / 1000000).toFixed(2) + "M";
    } else if (views >= 1000) {
        shortForm = (views / 1000).toFixed(2) + "K";
    } else {
        shortForm = views.toString();
    }

    if (shortForm[shortForm.length - 2] == '0') {
        shortForm = shortForm.slice(0, shortForm.length - 2) + shortForm.slice(shortForm.length - 1);
    }
    if (shortForm[shortForm.length - 2] == '0') {
        shortForm = shortForm.slice(0, shortForm.length - 2) + shortForm.slice(shortForm.length - 1);
    }
    if (shortForm[shortForm.length - 2] == '.') {
        shortForm = shortForm.slice(0, shortForm.length - 2) + shortForm.slice(shortForm.length - 1);
    }

    // if (shortForm[2] == '.') {
    //     shortForm = shortForm.slice(0, 4) + shortForm.slice(5);
    // }
    // if (shortForm[3] == '.') {
    //     shortForm = shortForm.slice(0, 3) + shortForm.slice(6);
    // }
    // Also need to add approx 2 decimal places to the number if want to use this code

    return shortForm;
}

var NumberOfCards = 0;

function addVideo(img_link, video_link, time, title, channelName, channelLink, views, monthsOld) {
    NumberOfCards++;

    let views_inshort = views_short(views);
    
    text = `<div class="card">` +
                `<div class="number">${NumberOfCards}</div>` +
                `<div class="img" onclick="redirect('${video_link}')">` +
                    `<img src="${img_link}">` +
                    `<div class="time">${time}</div>` +
                '</div>' +
                '<div class="about">' +
                    `<p class="page_title" onclick="redirect('${video_link}')">${title}</p>` +
                    `<p class="page_vid_info"><a href="${channelLink}">${channelName}</a> • ${views_inshort} views • ${monthsOld} months ago</p>` +
                    '<p>&nbsp;</p>' +
                '</div>' +
            '</div>'
    ;

    if (document.getElementById('cards').innerHTML == '') {
        document.getElementById('cards').innerHTML = text;
    }
    else {
        document.getElementById('cards').innerHTML += '<br>' + text;
    }
}

function validateFunc(event) {
    event.preventDefault();

    let img_link = document.getElementById('img_link')
    let video_link = document.getElementById('video_link')
    let video_length = document.getElementById('video_length')
    let title = document.getElementById('title')
    let channelName = document.getElementById('channel_name')
    let channelLink = document.getElementById('channel_link')
    let views = document.getElementById('views')
    let monthsOld = document.getElementById('old')

    img_link.style.backgroundColor = 'black';
    video_link.style.backgroundColor = 'black';
    video_length.style.backgroundColor = 'black';
    title.style.backgroundColor = 'black';
    channelName.style.backgroundColor = 'black';
    channelLink.style.backgroundColor = 'black';
    views.style.backgroundColor = 'black';
    monthsOld.style.backgroundColor = 'black';

    if (document.getElementById('img_link').value.length == 0) {
        alert("Please Enter Image Link")
        document.getElementById('img_link').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('img_link').focus()
        return false
    }

    if (document.getElementById('video_link').value.length == 0) {
        alert("Please Enter Your Video Link")
        document.getElementById('video_link').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('video_link').focus()
        return false
    }

    if (document.getElementById('video_length').value.length == 0 || !check_vid_length(document.getElementById('video_length').value)) {
        alert("Please Enter Your Video Length Properly")
        document.getElementById('video_length').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('video_length').focus()
        return false
    }

    if (document.getElementById('title').value.length == 0) {
        alert("Please Enter Your Video Title")
        document.getElementById('title').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('title').focus()
        return false
    }

    if (document.getElementById('channel_name').value.length == 0) {
        alert("Please Enter Your Channel Name")
        document.getElementById('channel_name').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('channel_name').focus()
        return false
    }

    if (document.getElementById('channel_link').value.length == 0) {
        alert("Please Enter Your Channel Link")
        document.getElementById('channel_link').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('channel_link').focus()
        return false
    }

    if (document.getElementById('views').value.length == 0) {
        alert("Please Enter Your Video Views")
        document.getElementById('views').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('views').focus()
        return false
    }

    if (document.getElementById('old').value.length == 0) {
        alert("Please Enter Your Video Age (Months)")
        document.getElementById('old').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('old').focus()
        return false
    }

    // const formData = new FormData(event.target);
    // const formObject = Object.fromEntries(formData.entries());
    
    // console.log(formObject);

    addVideo(img_link.value, video_link.value, video_length.value, title.value, channelName.value, channelLink.value, views.value, monthsOld.value);

    return false;
}
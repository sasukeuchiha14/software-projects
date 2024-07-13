function conv_two_digit(num) {
    if (num<10) {
        return '0'+num.toString();
    }
    return num;
}

function only_num_collon(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode != 58 && charCode>31 && ( charCode<48 || charCode>57 )) { // Add askii value of ':'
        return false
    }
    return true
}

function display(id) {
    for (i=0;i<id.length;i++) {
        if (document.getElementById(id[i]).style.visibility == 'hidden') {
            document.getElementById(id[i]).style.visibility = 'visible';
        }
        else {
            document.getElementById(id[i]).style.visibility = 'hidden';
        }
    }
}

var alarm_times = [];

function alarm(id) {
    var alarm_time = document.getElementById(id).value
    if (alarm_time.length == 5 && alarm_time[2] == ":" && !alarm_times.includes(alarm_time)) {
        alert(`Alarm set at ${alarm_time}`)
        alarm_times.unshift(alarm_time)
        console.log(alarm_times)
    }
}

setInterval(() => {;
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var hr_1 = conv_two_digit(hr);
    var min_1 = conv_two_digit(min);
    var sec_1 = conv_two_digit(sec);
    
    var hr_2 = 30 * hr + min /2;
    var min_2 = 6*min;
    var sec_2= 6*sec;

    document.getElementById('hour').innerHTML = hr_1;
    document.getElementById('minute').innerHTML = min_1;
    document.getElementById('second').innerHTML = sec_1;
    
    document.getElementById('hour_2').style.transform = `rotate(${hr_2}deg)`;
    document.getElementById('minute_2').style.transform = `rotate(${min_2}deg)`;
    document.getElementById('second_2').style.transform = `rotate(${sec_2}deg)`;
    
    for (i=0 ; i<alarm_times.length ; i++) {
        time_check = alarm_times[i];
        time_rn = String(hr)+':'+String(min)
        if (time_check == time_rn && sec == 0) {
            alert('Time has come')
        }
    }

},1000)

function conv_two_digit(num) {
    if (num<10) {
        return '0'+num.toString();
    }
    return num;
}

function only_num_collon(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode != 58 && charCode>31 && ( charCode<48 || charCode>57 )) {
        return false
    }
    return true
}

function alarm_background(id) {
    if (document.getElementById(id).className == 'alarm_background_1') {
        document.getElementById(id).className = 'alarm_background_2';
    }
    else {
        document.getElementById(id).className = 'alarm_background_1';
    }
}

function display(id) {
    for (i=0;i<id.length;i++) {
        if (document.getElementById(id[i]).style.display == 'block') {
            document.getElementById(id[i]).style.display = 'none';
        }
        else {
            document.getElementById(id[i]).style.display = 'block';
        }
    }
}

function alarm_history(time,status) {
    if (document.getElementById("alarm_history").innerHTML == "Empty") {
        if (status == true) {
            document.getElementById("alarm_history").innerHTML = `Alarm set at ${time}`;
        }
        else {
            document.getElementById("alarm_history").innerHTML = `Alarm removed at ${time}`;
        }
    }
    else {
        if (status == true) {
            document.getElementById("alarm_history").innerHTML += "<br>" + `Alarm set at ${time}`;
        }
        else {
            document.getElementById("alarm_history").innerHTML += "<br>" + `Alarm removed at ${time}`;
        }
    }
}

function display_alarms() {
    alarm_times.sort()
    document.getElementById('alarms').innerHTML = "";
    for (i=0;i<alarm_times.length;i++) {
        if (document.getElementById('alarms').innerHTML == "") {
            document.getElementById('alarms').innerHTML = `Alarm ${i+1}: ${alarm_times[i]}` + `<button class="alarm_remove_button" onclick="alarm_remove('${alarm_times[i]}')">×</button>`;
        }
        else {
            document.getElementById('alarms').innerHTML += "<br>" + `Alarm ${i+1}: ${alarm_times[i]}` + `<button class="alarm_remove_button" onclick="alarm_remove('${alarm_times[i]}')">×</button>`;
        }
    }
}

var alarm_times = [];

function alarm_add(id) {
    let alarm_time = document.getElementById(id).value
    if (alarm_time.length == 5 && !alarm_times.includes(alarm_time) && alarm_time[0]+alarm_time[1]<24 && alarm_time[2] == ":" && alarm_time[3]+alarm_time[4]<60) {
        alarm_times.push(alarm_time);
        console.log(alarm_times);
        alarm_history(alarm_time,true);
        display_alarms();
        alert(`Alarm set at ${alarm_time}`);
    }
}

function alarm_remove(alarm_time) {
    if (alarm_time.length == 5 && alarm_time[0]+alarm_time[1]<24 && alarm_time[2] == ":" && alarm_time[3]+alarm_time[4]<60) {
        let index = alarm_times.indexOf(alarm_time);
        if (index == -1) {
            alert(`No alarm was set at ${alarm_time}`);
        }
        else {
            alarm_times.splice(index,1);
            alarm_history(alarm_time,false);
            display_alarms();
            alert(`Alarm removed at ${alarm_time}`);
        }
        console.log(alarm_times)
    }
}

function alarm(hr,min,sec) {
    let windowSpecifications = `width=350,height=300,left=${window.innerWidth/2 - 350/2},top=${window.innerHeight/2 - 300/2},toolbar=no`;
    let alarm_window = window.open('about:blank', 'Alarm', windowSpecifications);
    if (alarm_window) {
        alarm_window.document.write(
            `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Alarm</title>
                <style>
                    .alarm_clock{
                        width: 204px;
                        height: 204px;
                        margin-top: 50px;
                        margin-left: 65px;
                        transition: all .3;
                    }
                    .alarm_clock *{
                        border: 2px solid black;
                    }

                    .extra_ear{
                        position: absolute;
                        z-index: -1;
                        width: 70px;
                        height: 70px;
                        border-radius: 35px;
                        background-color: black;
                    }
                    .extra_leg{
                        position: absolute;
                        z-index: -1;
                        width: 90px;
                        height: 90px;
                        border-radius: 35px;
                        background-color: black;
                    }
                    #ear_1{
                        margin-top: -10px;
                        margin-left: 20px;
                    }
                    #ear_2{
                        margin-top: -10px;
                        margin-left: 100px;
                    }
                    #leg_1{
                        margin-top: 120px;
                        margin-left: 10px;
                    }
                    #leg_2{
                        margin-top: 120px;
                        margin-left: 100px;
                    }

                    #main_clock{
                        width: 200px;
                        height: 200px;
                        border-radius: 100px;
                        background-color: rgba(85, 255, 255);
                    }

                    .dots{
                        position: absolute;
                        width: 180px;
                        height: 180px;
                        border: 2px dotted black;
                        border-radius: 90px;
                        margin: 8px;
                    }

                    #clock_hour,#clock_minute {
                        position: absolute;
                        background-color: black;
                        transform-origin: bottom;
                    }
                    #clock_hour{
                        width: 2.0%;
                        height: 20%;
                        top: 30%;
                        left: 48.85%;
                        opacity: 0.8;
                    }
                    #clock_minute{
                        width: 1.5%;
                        height: 30%;
                        top: 19%;
                        left: 48.9%;
                        opacity: 0.8;
                    }
                </style>
            </head>
            <body>
                <div class="alarm_clock">
                    <div class="extra_ear" id="ear_1"></div>
                    <div class="extra_ear" id="ear_2"></div>
                    <div class="extra_leg" id="leg_1"></div>
                    <div class="extra_leg" id="leg_2"></div>
                    <div id="main_clock">
                        <div class="dots">
                            <div id="clock_hour"></div>
                            <div id="clock_minute"></div>
                        </div>
                    </div>
                </div>
                <audio src="assets/audio/tune.mp3" autoplay loop></audio>
                <script>
                    var clock_hr = 30 * ${hr} + ${min}/2 + ${sec}/120;
                    var clock_min = 6 * ${min} + ${sec}/10;` +

                    "document.getElementById('clock_hour').style.transform = `rotate(${clock_hr}deg)`;" +
                    "document.getElementById('clock_minute').style.transform = `rotate(${clock_min}deg)`;" +

                    `document.getElementsByClassName('alarm_clock')[0].style.transform = 'rotate(2.5deg)';

                    var check = 0;
                    setInterval(() => {
                        if ((check%2) == 0) {document.getElementsByClassName('alarm_clock')[0].style.transform = 'rotate(5deg)';}
                        else {document.getElementsByClassName('alarm_clock')[0].style.transform = 'rotate(-5deg)';}
                        check++;
                    },150)
                    
                </script>
            </body>
            </html>`
        );
    };
}

setInterval(() => {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();

    var hr_1 = conv_two_digit(hr);
    var min_1 = conv_two_digit(min);
    var sec_1 = conv_two_digit(sec);
    
    var hr_2 = 30 * hr + min/2 + sec/120;
    var min_2 = 6*min + sec/10;
    var sec_2= 6*sec;

    document.getElementById('hour').innerHTML = hr_1;
    document.getElementById('minute').innerHTML = min_1;
    document.getElementById('second').innerHTML = sec_1;
    
    document.getElementById('hour_2').style.transform = `rotate(${hr_2}deg)`;
    document.getElementById('minute_2').style.transform = `rotate(${min_2}deg)`;
    document.getElementById('second_2').style.transform = `rotate(${sec_2}deg)`;
    
    for (i=0 ; i<alarm_times.length ; i++) {
        time_check = alarm_times[i];
        time_rn = String(hr)+':'+String(min);
        if (time_check == time_rn && sec == 0) {
            alarm(String(hr),String(min),String(sec))
            let index = alarm_times.indexOf(time_check);
            alarm_times.splice(index,1);
            alarm_history(time_check,false);
            display_alarms();
        }
    }

},1000)
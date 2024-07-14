function only_num(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode>31 && ( charCode<48 || charCode>57 )) {
        return false
    }
    return true
}

function only_num_dot(event) {
    let charCode = (event.witch) ? event.witch : event.keyCode;
    if ( charCode!=46 && charCode>31 && ( charCode<48 || charCode>57 )) {
        return false
    }
    return true
}

function display(name,id,index) {
    if (document.getElementsByName(name)[index].checked == true){
        document.getElementById(id).style.visibility = "visible";
    }
    else {
        document.getElementById(id).style.visibility = "hidden";
    }
}

var test_center_arr = [
    ['anp',['Andhra.P.1','Andhra.P.2']],
    ['aan',['A&N1','A&N2']],
    ['arp',['Arunachal.P.1','Arunachal.P.2']],
    ['ass',['Assam1','Assam2']],
    ['del',['Delhi1','Delhi2']],
    ['har',['Haryana1','Haryana2']],
    ['hip',['Himachal.P.1','Himachal.P.2']],
    ['kar',['Karnataka1','Karnataka2']],
    ['kas',['Kashmir1','Kashmir2']],
    ['ker',['Kerla1','Kerla2']],
    ['mah',['Maharashtra1','Maharashtra2']],
    ['odi',['Odisha1','Odisha2']],
    ['raj',['Rajasthan1','Rajasthan2']],
    ['sik',['Sikkim1','Sikkim2']],
    ['tam',['T.N.1','T.N.2']],
    ['tel',['Telangana1','Telangana2']],
    ['utp',['U.P.1','U.P.2']],
];

function tc_options(state_value) {
    let test_center_select = document.getElementById('test_center');
    while (test_center_select.length != 0) {
        test_center_select.removeChild(test_center_select.lastChild);
    }
    test_center_arr.forEach(
        function(item) {
            if (item[0] == state_value) {
                for (i=0;i<item[1].length;i++) {
                    var opt = document.createElement('option');
                    opt.value = item[1][i];
                    opt.text = item[1][i];
                    test_center_select.options.add(opt);
                }
            }
        }
    );
}

function validateFunc_multipleNames(name) {
    let name_arr = document.getElementsByName(name)
    for (i=0;i<name_arr.length;i++) {
        if (name_arr[i].checked == true) {
            return true
        }
    }
    return false
}

function validateFunc() {
    
    document.getElementById('security_answer').style.backgroundColor = 'white'
    document.getElementById('security_question').style.backgroundColor = 'white'
    document.getElementById('pass2').style.backgroundColor = 'white'
    document.getElementById('pass1').style.backgroundColor = 'white'
    document.getElementById('pass2').style.backgroundColor = 'white'
    document.getElementById('pass1').style.backgroundColor = 'white'
    document.getElementById('exam_name').style.backgroundColor = 'white'
    document.getElementById('pass12_school_type').style.backgroundColor = 'white'
    document.getElementById('pass10_year').style.backgroundColor = 'white'
    document.getElementById('m_number').style.backgroundColor = 'white'
    document.getElementById('e_mail').style.backgroundColor = 'white'
    document.getElementById('pin_code').style.backgroundColor = 'white'
    document.getElementById('state').style.backgroundColor = 'white'
    document.getElementById('distirct').style.backgroundColor = 'white'
    document.getElementById('place').style.backgroundColor = 'white'
    document.getElementById('locality').style.backgroundColor = 'white'
    document.getElementById('address').style.backgroundColor = 'white'
    document.getElementById('aadhaar_number').style.backgroundColor = 'white'
    document.getElementById('DOB').style.backgroundColor = 'white'
    document.getElementById('p_number').style.backgroundColor = 'white'
    document.getElementById('m_name').style.backgroundColor = 'white'
    document.getElementById('f_name').style.backgroundColor = 'white'
    document.getElementById('c_name').style.backgroundColor = 'white'
    
    if (document.getElementById('c_name').value.length == 0) {
        alert("Please Enter your Name")
        document.getElementById('c_name').style.backgroundColor = 'rgb(255, 221, 221)';
        document.getElementById('c_name').focus()
        return false
    }
    
    if (document.getElementById('f_name').value.length == 0) {
        alert("Please Enter your Father's Name")
        document.getElementById('f_name').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('f_name').focus()
        return false
    }
    
    if (document.getElementById('m_name').value.length == 0) {
        alert("Please Enter your Mother's Name")
        document.getElementById('m_name').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('m_name').focus()
        return false
    }
    
    if (document.getElementById('p_number').value.length != 10) {
        alert("Please Enter your Phone Number Properly")
        document.getElementById('p_number').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('p_number').focus()
        return false
    }
    
    if (document.getElementById('DOB').value.length == 0) {
        alert("Please Select your Date of Birth")
        document.getElementById('DOB').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('DOB').focus()
        return false
    }
    
    if (!validateFunc_multipleNames('gender')) {
        alert("Please select your Gender")
        document.getElementsByName('gender')[2].focus()
        return false
    }
    
    if (!validateFunc_multipleNames('category')) {
        alert("Please select your Category")
        document.getElementsByName('category')[4].focus()
        return false
    }
    
    if (!validateFunc_multipleNames('residency')) {
        alert("Please select your Residency")
        document.getElementsByName('category')[0].focus()
        return false
    }
    
    if (document.getElementById('aadhaar_number').value.length == 0) {
        alert("Please enter your Aadhaar Number")
        document.getElementById('aadhaar_number').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('aadhaar_number').focus()
        return false
    }
    
    if (document.getElementById('address').value.length == 0) {
        alert("Please enter your Address")
        document.getElementById('address').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('address').focus()
        return false
    }
    
    if (document.getElementById('locality').value.length == 0) {
        alert("Please enter your Locality")
        document.getElementById('locality').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('locality').focus()
        
        return false
    }
    
    if (document.getElementById('place').value.length == 0) {
        alert("Please enter your Place")
        document.getElementById('place').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('place').focus()
        return false
    }
    
    if (document.getElementById('distirct').value.length == 0) {
        alert("Please enter your Distirct")
        document.getElementById('distirct').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('distirct').focus()
        return false
    }
    
    if (document.getElementById('state').value.length == 0) {
        alert("Please enter your State")
        document.getElementById('state').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('state').focus()
        return false
    }
    
    if (document.getElementById('pin_code').value.length != 6) {
        alert("Please enter your Pin Code properly")
        document.getElementById('pin_code').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pin_code').focus()
        return false
    }
    
    if (document.getElementById('e_mail').value.length == 0 || !document.getElementById('e_mail').value.includes('@') || !document.getElementById('e_mail').value.includes('.com') ) {
        alert("Please enter your E-mail properly")
        document.getElementById('e_mail').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('e_mail').focus()
        return false
    }
    
    if (document.getElementById('m_number').value.length != 10) {
        alert("Please enter your Mobile Number Properly")
        document.getElementById('m_number').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('m_number').focus()
        return false
    }
    
    if (document.getElementById('pass10_year').value.length != 0) {
        alert("Please enter your Passing Year properly")
        document.getElementById('pass10_year').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass10_year').focus()
        return false
    }
    
    if (document.getElementById('pass12_school_type').value.length == 0) {
        alert("Please Enter your School Board")
        document.getElementById('pass12_school_type').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass12_school_type').focus()
        return false
    }
    
    if (document.getElementById('exam_name').value.length == 0) {
        alert("Please Enter The Name of the Qualifying Exam")
        document.getElementById('exam_name').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('exam_name').focus()
        return false
    }
    
    if (!validateFunc_multipleNames('pass12_place')) {
        alert("Please select your Place of Class 12th Schooling")
        document.getElementsByName('pass12_place')[0].focus()
        return false
    }
    
    if (!validateFunc_multipleNames('pass12_improvement')) {
        alert("Please select that if you appeared for Improvement in Class 12")
        document.getElementsByName('pass12_improvement')[0].focus()
        return false
    }
    
    if (!validateFunc_multipleNames('pass12_institution_type')) {
        alert("Please select your type of Institution of Class 12th")
        document.getElementsByName('pass12_institution_type')[0].focus()
        return false
    }
    
    if (!validateFunc_multipleNames('12pass_prep_type')) {
        alert("Please select your mode of Preperation")
        document.getElementsByName('12pass_prep_type')[0].focus()
        return false
    }
    
    if (document.getElementById('pass1').value.length == 0) {
        alert("Please enter your Password")
        document.getElementById('pass1').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass1').focus()
        return false
    }
    
    if (document.getElementById('pass2').value.length == 0) {
        alert("Please enter your Confirmation Password")
        document.getElementById('pass2').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass2').focus()
        return false
    }
    
    if (document.getElementById('pass1').value != document.getElementById('pass2').value) {
        alert("Password Doesn't Match. Please try Again.");
        document.getElementById('pass1').value = "";
        document.getElementById('pass2').value = "";
        document.getElementById('pass1').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass2').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('pass1').focus()
        return false;
    }
    
    if (document.getElementById('security_question').value.length == 0) {
        alert("Please enter your Security Question")
        document.getElementById('security_question').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('security_question').focus()
        return false
    }
    
    if (document.getElementById('security_answer').value.length == 0) {
        alert("Please enter your Security Answer")
        document.getElementById('security_answer').style.backgroundColor = 'rgb(255, 221, 221)'
        document.getElementById('security_answer').focus()
        return false
    }
}


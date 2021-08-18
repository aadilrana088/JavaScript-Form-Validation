      	// Document is ready
$(document).ready(function () { 
     

     //Validate CardName
     $('#cardnamecheck').hide();    
    let cardCheckError = true;
    $('#cardname').keyup(function () {
        validateUsername();
    });

     function validateCardName() {
      let usernameValue = $('#cardname').val();
      if (usernameValue.length == '') {
      $('#cardnamecheck').show();
          cardCheckError = false;
          return false;
      } 
      else if((usernameValue.length < 3)|| 
              (usernameValue.length > 10)) {
          $('#cardnamecheck').show();
          $('#cardnamecheck').html
("length of first name must be between 3 and 10");
          cardCheckError = false;
          return false;
      } 
      else {
          $('#cardnamecheck').hide();
      }
    }
// Validate Username
    $('#usercheck').hide();    
    let usernameError = true;
    $('#usernames').keyup(function () {
        validateUsername();
    });


    function validateUsername() {
      let usernameValue = $('#usernames').val();
      if (usernameValue.length == '') {
      $('#usercheck').show();
          usernameError = false;
          return false;
      } 
      else if((usernameValue.length < 3)|| 
              (usernameValue.length > 10)) {
          $('#usercheck').show();
          $('#usercheck').html
("**length of username must be between 3 and 10");
          usernameError = false;
          return false;
      } 
      else {
          $('#usercheck').hide();
      }
    }

    // Validate Card Number
    const cardNumber = 
        document.getElementById('cardNumber');
    cardNumber.addEventListener('blur', ()=>{
      var visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  var amexpRegEx = /^(?:3[47][0-9]{13})$/;
  var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  let cnvalue = cardNumber.value;
  if (visaRegEx.test(cnvalue)) {
    cardNumber.classList.remove(
                'is-invalid');
          cardNumberError = true;
  } else if(mastercardRegEx.test(cnvalue)) {
    cardNumber.classList.remove(
                'is-invalid');
          cardNumberError = true;
  } else if(amexpRegEx.test(cnvalue)) {
    cardNumber.classList.remove(
                'is-invalid');
          cardNumberError = true;
  } else if(discovRegEx.test(cnvalue)) {
    cardNumber.classList.remove(
                'is-invalid');
          cardNumberError = true;
  }
  else{
            cardNumber.classList.add(
                  'is-invalid');
            cardNumberError = false;
        }
        
    })


    // Validate Phone Number
    const phone = 
        document.getElementById('phone');
    phone.addEventListener('blur', ()=>{
       let phonereg =
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
       let s = phone.value;
       if(phonereg.test(s)){
          phone.classList.remove(
                'is-invalid');
          phoneError = true;
        }
        else{
            phone.classList.add(
                  'is-invalid');
            phoneError = false;
        }
    })
  
   // Validate Email
    const email = 
        document.getElementById('email');
    email.addEventListener('blur', ()=>{
       let regex =
/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
       let s = email.value;
       if(regex.test(s)){
          email.classList.remove(
                'is-invalid');
          emailError = true;
        }
        else{
            email.classList.add(
                  'is-invalid');
            emailError = false;
        }
    })
      
   // Validate Password
    $('#passcheck').hide();
    let passwordError = true;
    $('#password').keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwrdValue = 
            $('#password').val();
        if (passwrdValue.length == '') {
            $('#passcheck').show();
            passwordError = false;
            return false;
        } 
        if ((passwrdValue.length < 3)|| 
            (passwrdValue.length > 10)) {
            $('#passcheck').show();
            $('#passcheck').html
("**length of your password must be between 3 and 10");
            $('#passcheck').css("color", "red");
            passwordError = false;
            return false;
        } else {
            $('#passcheck').hide();
        }
    }
          
// Validate Confirm Password
    // $('#conpasscheck').hide();
    // let confirmPasswordError = true;
    // $('#conpassword').keyup(function () {
    //     validateConfirmPasswrd();
    // });
    // function validateConfirmPasswrd() {
    //     let confirmPasswordValue = 
    //         $('#conpassword').val();
    //     let passwrdValue = 
    //         $('#password').val();
    //     if (passwrdValue != confirmPasswordValue) {
    //         $('#conpasscheck').show();
    //         $('#conpasscheck').html(
    //             "**Password didn't Match");
    //         $('#conpasscheck').css(
    //             "color", "red");
    //         confirmPasswordError = false;
    //         return false;
    //     } else {
    //         $('#conpasscheck').hide();
    //     }
    // }
      
// Submitt button
    $('#submitbtn').click(function () {
      console.log("Validate")
        validateCardName();
        validateUsername();
        validatePassword();
        // validateConfirmPasswrd();
        // validateEmail();
        // validatePhone();
        if ((usernameError == true) && 
            (passwordError == true) && 
            (cardCheckError == true) && 
            (confirmPasswordError == true) && 
            (emailError == true)) {
            error_free= true
        return true
        } else {
          error_free = false
            return false;
        }
        if(document.querySelectorAll('input').nodeValue== null) {
          if (!error_free){
          event.preventDefault(); 
          alert("Please fill correct details")
        }
        else{
          alert('No errors: Form will be submitted');
        }
        }
    });
});
const firstname = document.getElementById('name');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const msg = document.getElementById('msg');
const btn = document.getElementById('btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    const checkIfEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value !== '' && email.value.match(checkIfEmailValid)){
        emailDetails();
    }
    else {
        alert('Email can not be empty');
    }
});


function emailDetails(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Your username of email", 
        Password : "Your password of email",
        To : 'When someone sends an email here you can specify your email to get that email',
        From : email.value,
        Subject : subject.value,
        Body : `Name: ` + firstname.value + '<br>' + 'Last Name: ' + lastname.value + '<br>' + 
         'Email: ' + email.value + '<br>' +  'Subject: ' + subject.value + '<br>' + 'Message: ' + msg.value
    }).then(msg => alert(msg));
};
// about me //

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
};


// contact me //




function letstalk() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let message = document.getElementById("txt");

    if (username.value !== '' && email.value !== '' && message.value !== '') {
        let signup = {
            "username": username.value,
            "email": email.value,
            "txt": message.value,
        };

        console.log(letstalk);

        let formdetails = localStorage.getItem('formdetails') ? JSON.parse(localStorage.getItem('formdetails')) : [];
        formdetails.push(signup);
        localStorage.setItem('formdetails', JSON.stringify(formdetails));
        window.location.href = 'main.html';
    }
    
    else {
        alert('Please complete the form');
    }
}













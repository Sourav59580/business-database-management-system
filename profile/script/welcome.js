//url copy paste security
function url_secure() {
    if (sessionStorage.length <= 0) {
        var page = document.getElementById("profile-bag");
        page.style.display = "none";
        document.body.style.background = "black";
        document.body.innerHTML = "<h1 style='color:white;text-align:center;font-size:100px;font-family:sans-serif;'>Illigal action perfomed</h1>"
    }
}
url_secure();

//start upload picture coding
function upload_pic() {
    var input = document.getElementById("profile-pic-upload");
    var freader = new FileReader;
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function (event) {
        var img_url = event.target.result;
        var show = document.getElementById("upload-container");
        var upload_text = document.getElementById("i");
        show.style.background = "url(" + event.target.result + ")";
        show.style.backgroundRepeat = "no-repeat";
        show.style.backgroundSize = "cover";
        upload_text.style.opacity = "0";
        var next_icon = document.getElementById("next-btn");
        next_icon.style.display = "block";
        next_icon.onclick = function () {
            var hide_uploadbox = document.getElementById("profile-bag");
            hide_uploadbox.style.display = "none";
            localStorage.setItem(sessionStorage.getItem('user_mail') + 'img_url', img_url);
            window.location = location.href;


        }
    }
}
//display user name coding

function user_name() {
    var result = document.getElementById("welcome");
    var user_mail = sessionStorage.getItem('user_mail');
    var user_details = localStorage.getItem(user_mail);
    var user_data = JSON.parse(user_details);
    var name = user_data.name;
    result.innerHTML = "Mr. " + name;
}
user_name();
//stop picture upload coding
function stop_upload() {
    if (localStorage.getItem(sessionStorage.getItem('user_mail') + 'img_url') != null) {
        var hide_uploadbox = document.getElementById("profile-bag");
        hide_uploadbox.style.display = "none";



    }
}
stop_upload();
//start profile interface coding
function showing_profile() {
    //DP showing coding   
    var dp_url = localStorage.getItem(sessionStorage.getItem('user_mail') + 'img_url');
    var dp_container = document.getElementById("profileInterfaceDp");
    dp_container.style.backgroundImage = "url(" + dp_url + ")";
    dp_container.style.backgroundRepeat = "no-repeat";
    dp_container.style.backgroundSize = "cover";
    //name show coding
    var userSessionMail = sessionStorage.getItem('user_mail');
    var userDetials = localStorage.getItem(userSessionMail);
    var UserData = JSON.parse(userDetials);
    var dpname = UserData.name;
    var profileName = document.getElementById("profilename");
    profileName.innerHTML = dpname;
}
showing_profile();
//logout coding
function logout() {
    sessionStorage.clear();
    var profile_notice = document.getElementById("profile-notice");
    profile_notice.style.display = "block";
    setTimeout(function () {
        window.location = "../index.html"
    }, 2000);
}
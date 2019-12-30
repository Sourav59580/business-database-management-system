//start signup and login coding
function signup() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    if (name, email, password, mobile != "") {
        var user_input = {
            name: name,
            email: email,
            password: password,
            mobile: mobile
        };
        var user_data = JSON.stringify(user_input);
        localStorage.setItem(email, user_data);
        document.getElementById("signup_success").innerHTML = "Signup success ";
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("mobile").value = "";
        setTimeout(function () {
            document.getElementById("signup_success").innerHTML = ""
        }, 2000)
        return false;

    }
}

function usercheck() {
    var email = document.getElementById("email").value;
    if (localStorage.getItem(email) != null) {
        document.getElementById("user_exist").innerHTML = "User already existed !";
        document.getElementById("password").disabled = true;
        document.getElementById("mobile").disabled = true;
        document.getElementById("submit").disabled = true;
        document.getElementById("email").classList.add('pulse');
        document.getElementById("email").onclick = function () {
            this.value = "";
            document.getElementById("password").disabled = false;
            document.getElementById("mobile").disabled = false;
            document.getElementById("submit").disabled = false;

        }
    }
}

function login(){
    var username=document.getElementById("login-user").value;
    var password=document.getElementById("login-password").value;
    var login_input={username:username,password:password};
    var login_data=JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var session_data=sessionStorage.getItem(username);
    var user_details=JSON.parse(session_data);
    if(localStorage.getItem(user_details.username)==null)
        {
            alert("user not found");
        }
    else
        {
            if(localStorage.getItem(user_details.username).match(user_details.password))
                {
                   location.replace("profile/profile.html");
                   sessionStorage.setItem('user_mail',username);
                   return false;
                }
            else{
                alert("password not matched");
            }
        }            
}

            
            
            
            
            
            
            
            
            
            
            
            
            
            
        
    
    

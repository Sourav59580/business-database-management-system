window.onload = function () {
    var x = document.getElementById("contacts").children.length;
    if (x == 0) {
        document.getElementById("head").innerHTML = "No contacts found";
    }
}


//contact photo show coding
function show_contact_dp() {
    var dp_box = document.getElementById("contact-photo");
    var dp_url = localStorage.getItem(sessionStorage.getItem('user_mail') + 'img_url');
    dp_box.style.backgroundImage = "url(" + dp_url + ")";
    dp_box.style.backgroundRepeat = "no-repeat";
    dp_box.style.backgroundSize = "cover";
}
show_contact_dp();

function add_contacts() {
    var fullname = document.getElementById("fullname").value;
    var pnumber = document.getElementById("fnumber").value;
    var snumber = document.getElementById("snumber").value;
    var fnumberfield = document.getElementById("fnumber");
    var snumberfield = document.getElementById("snumber");
    var pnumbernotice = document.getElementById("pnumber-notice");
    var snumbernotice = document.getElementById("snumber-notice");
    if (fullname != "" && pnumber != "" && snumber != "") {
        if (isNaN(pnumber)) {

            fnumberfield.style.background = "black";
            fnumberfield.style.color = "white";
            pnumbernotice.style.display = "block";
            fnumberfield.onclick = function () {
                this.value = " ";
                this.style.background = "none";
                this.style.color = "black";
                pnumbernotice.style.display = "none";
            }
        } else {
            if (isNaN(snumber)) {
                snumberfield.style.background = "black";
                snumberfield.style.color = "white";
                snumbernotice.style.display = "block";
                snumberfield.onclick = function () {
                    this.value = " ";
                    this.style.background = "none";
                    this.style.color = "black";
                    snumbernotice.style.display = "none";
                }
            } else {
                var user = {
                    fullname: fullname,
                    primary: pnumber,
                    secondary: snumber
                };
                var userDetails = JSON.stringify(user);
                localStorage.setItem(fullname + " contact", userDetails);
                var form = document.getElementById("add-form");
                form.reset();
                document.getElementById("successNotice").style.display = "block";
                setTimeout(function () {
                    document.getElementById("successNotice").style.display = 'none';
                }, 2000);
                window.location = location.href;
            }
        }
    } else {
        alert("Please fill all details it's mandatory");
    }
}

//show contact list coding
function show_contact_list() {
    var i;
    for (i = 1; i <= localStorage.length; i++) {
        var keys = localStorage.key(i);
        if (keys.match("contact")) {
            var json_text = localStorage.getItem(keys);
            var json_extract = JSON.parse(json_text);
            var con = document.getElementById("contacts");
            var fildset = document.createElement("FIELDSET");
            var legend = document.createElement("LEGEND");
            var edit = document.createElement("I");
            var trash = document.createElement("I");
            var save = document.createElement("I");
            var saved = document.createElement("SPAN");
            var ol = document.createElement("OL");
            var li_one = document.createElement("LI");
            var li_two = document.createElement("LI");
            save.setAttribute("class", "fa fa-save");
            save.setAttribute("id", "save");
            save.setAttribute("title", "saved");
            edit.setAttribute("class", "fa fa-edit");
            edit.setAttribute("id", "edit");
            edit.setAttribute("title", "Edit");
            trash.setAttribute("class", "fa fa-trash");
            trash.setAttribute("id", "delete");
            trash.setAttribute("title", "Delete Contact");
            con.appendChild(fildset);
            fildset.appendChild(legend);
            fildset.appendChild(save);
            fildset.appendChild(edit);
            fildset.appendChild(trash);
            fildset.appendChild(saved);
            fildset.appendChild(ol);
            ol.appendChild(li_one);
            ol.appendChild(li_two);
            ol.appendChild(trash);
            ol.appendChild(edit);
            ol.appendChild(save);
            ol.appendChild(saved);
            save.style.display = "none";
            legend.appendChild(document.createTextNode(json_extract.fullname));
            legend.setAttribute("id", "full_name")
            li_one.appendChild(document.createTextNode(json_extract.primary));
            li_two.appendChild(document.createTextNode(json_extract.secondary));
            saved.appendChild(document.createTextNode("saved successfully !"));
            saved.style.color = "red";
            saved.style.fontFamily = "sens-serif";
            saved.style.fontWeight = "bold";
            saved.style.float = "right";
            saved.style.clear = "both";
            saved.style.marginTop = "10px";
            saved.style.display = "none";
            delete_contact(keys, trash);
            contact_edit(keys,edit,save,saved);

        }

    }

}
show_contact_list();

function open_sidebar() {
    var container = document.getElementById("sidebar-contactlist");
    container.style.display = "block";
}

function close_sidebar() {
    var container = document.getElementById("sidebar-contactlist");
    container.style.display = "none";
}

function delete_contact(contact_name, del_btn) {
    del_btn.onclick = function () {
        var answer = confirm("Are you sure?")
        if (answer == true) {
            var ol = this.parentElement;
            var fildset = ol.parentElement;
            fildset.remove();
            localStorage.removeItem(contact_name);
            var x = document.getElementById("contacts").children.length;
            if (x == 0) {
                document.getElementById("head").innerHTML = "No contacts found";
            }
        }
    }
}

function contact_edit(contact_name,edit_btn,save_btn,saved){
    edit_btn.onclick=function()
    {
        save_btn.style.display="block";
        var ol=this.parentElement;
        var fildset=ol.parentElement;
        var legend=fildset.getElementsByTagName('LEGEND');
        legend[0].setAttribute('contenteditable','true');
        legend[0].focus();
        var li=ol.getElementsByTagName("LI");
        var i;
        for(i=0;i<li.length;i++)
        {
            li[i].setAttribute("contenteditable","true");
        }
        var recent_legend;
        var current_legend;
        legend[0].onclick=function(){
            recent_legend=this.innerHTML;
        }
        legend[0].onblur=function(){
            current_legend=this.innerHTML;
        }
        var recent_number=[];
        var current_number=[];
        li[0].onclick=function(){
            recent_number[0]=this.innerHTML;
        }
        li[1].onclick=function(){
            recent_number[1]=this.innerHTML;
        }
        li[0].onblur=function(){
            current_number[0]=this.innerHTML;
        }
        li[1].onblur=function(){
            current_number[1]=this.innerHTML;
        }
        save_btn.onclick=function(){
        var edit_data={fullname:current_legend==undefined?legend[0].innerHTML:current_legend , primary:current_number[0]==undefined?li[0].innerHTML:current_number[0],secondary:current_number[1]==undefined?li[1].innerHTML:current_number[1]};
        var final_data=JSON.stringify(edit_data);
        var txt=localStorage.getItem(contact_name);
        localStorage.setItem(contact_name,txt.replace(txt,final_data));
        saved.style.display="block";
        setTimeout(function(){
            save_btn.style.display="none";
            saved.style.display="none";   
        },2000);
        }  
    }
}












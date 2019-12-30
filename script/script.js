function lside_bar(){
    var sidebar=document.getElementById("lsidebar");
    sidebar.style.display="block";
    
}

function rside_bar(){
    var sidebar=document.getElementById("rsidebar");
    var lsidebar=document.getElementById("lsidebar");
    sidebar.style.display="block";
    lsidebar.style.display="none";
    
}
function lclose(){
    var sidebar=document.getElementById("lsidebar");
    sidebar.style.display="none";
}
function rclose(){
    var sidebar=document.getElementById("rsidebar");
    sidebar.style.display="none";
}


















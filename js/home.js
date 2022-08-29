
let menuBtn = document.getElementById("MenuBtn");
let menuList = document.getElementById("list");
let listItem = document.getElementById('listItm');
let nav= document.getElementById('navBar');


window.onload = function () {
    if (window.innerWidth < 992 ) {
        menuBtn.style.display='flex';
        listItem.style.display='none';
        menuList.setAttribute("style", "visibility:hidden")
        nav.style.height='66px';
    }
    else {
        listItem.style.display='flex';
        menuList.setAttribute("style", "visibility:visible")
}
}
window.onresize = function(){
    if (window.innerWidth < 992) {
        listItem.style.display='none';
        menuList.setAttribute("style", "visibility:hidden")
        nav.style.height='66px';
    }
    else {
        listItem.style.display='flex';

        menuList.setAttribute("style", "visibility:visible")}
}

menuBtn.onclick= function () {
    if (list.style.visibility == "hidden"){
        listItem.style.display='flex';
        list.style.visibility = "visible";
    }else{
        listItem.style.display='none';
        list.style.visibility = "hidden";
    }
}

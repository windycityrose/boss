/**
 * Created by 技术 on 2017/6/2.
 */
window.onload=function(){
    var ofooter=document.getElementsByClassName("footer")[0];
    var obut=ofooter.getElementsByClassName("but")[0];
    var ofooter1=document.getElementsByClassName("footer1")[0];
    var xx=document.getElementById("xx");
    obut.onclick=function(){
        ofooter1.style.bottom="0";
        ofooter1.style.transition="all 1s";
    };
    xx.onclick=function(){
        ofooter1.style.bottom="-6rem";
        ofooter1.style.transition="all 1s";
    }
};
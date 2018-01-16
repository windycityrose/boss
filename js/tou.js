/**
 * Created by 技术 on 2017/6/2.
 */
window.onload=function(){
    var oheader=document.getElementsByClassName("header")[0];
    var obot=oheader.getElementsByClassName("bot")[0];
    var ofooter=document.getElementsByClassName("footer")[0];
    var text=document.getElementById("text");
    var tell=obot.getElementsByClassName("tell")[0];
    var left=ofooter.getElementsByClassName("left")[0];
    var xx=ofooter.getElementsByClassName("xx")[0];
    var right=ofooter.getElementsByClassName("right")[0];
    obot.onclick=function(){
        ofooter.style.display="block";
    };
    left.onclick=function(){
        tell.innerHTML=text.value;
        ofooter.style.display="none";
    };
    xx.onclick=function(){
        text.value=null;
        text.focus();
    };
    right.onclick=function(){
        ofooter.style.display="none";
    }
};
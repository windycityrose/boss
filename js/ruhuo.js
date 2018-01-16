/**
 * Created by 技术 on 2017/5/30.
 */
window.onload=function(){
    var ofter=document.getElementsByClassName("footer")[0];
    var obut=ofter.getElementsByTagName("button")[0];
    var omodal=document.getElementsByClassName("modal")[0];
    var oalert=document.getElementsByClassName("alert")[0];
    var osub=oalert.getElementsByClassName("sub")[0];
    obut.onclick=function(){
        omodal.style.display=oalert.style.display="block";
        osub.onclick=function(){
            oalert.style.display=omodal.style.display="none";
        }
    }
};
/**
 * Created by 技术 on 2017/6/2.
 */
window.onload=function(){
    var ospan=document.getElementsByTagName("span");
    var ofooter=document.getElementsByClassName("footer");
    for(var i=0;i<ospan.length;i++){
        ospan[i].index=i;
        ospan[i].onclick=function(){
            this.style.display="none";
            ofooter[this.index].style.display="block";
        }
    }
};
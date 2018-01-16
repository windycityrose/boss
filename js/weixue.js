/**
 * Created by 技术 on 2017/5/26.
 */
window.onload=function(){
    var ose=document.getElementsByClassName("section")[0];
    var odiv=ose.getElementsByTagName("div");
    var ose1=document.getElementsByClassName("section1")[0];
    var idiv=ose1.getElementsByClassName("block");
    for(var k=0;k<odiv.length;k++){
        odiv[k].index=k;
        odiv[k].onclick=function(){
            for(var i=0;i<idiv.length;i++){
                odiv[i].className="";
                idiv[i].style.display="none";
            }
            this.className="ac";
            idiv[this.index].style.display="block";
        }
    }
};
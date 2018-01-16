/**
 * Created by 技术 on 2017/5/31.
 */
window.onload=function(){
    var ohead=document.getElementsByClassName("header")[0];
    var odiv=ohead.getElementsByTagName("div");
    var oinner=document.getElementsByClassName("inner")[0];
    var obox=oinner.getElementsByClassName("one");
    var osub1=document.getElementById("sub1");
    var oshow=document.getElementsByClassName("show")[0];
    var oli=oshow.getElementsByTagName("li");
    var obom=osub1.getElementsByClassName("bom");
    var osub2=document.getElementById("sub2");
    var ashow=osub2.getElementsByClassName("show")[0];
    var ali=ashow.getElementsByTagName("li");
    var abom=osub2.getElementsByClassName("bom");
    for(var i=0;i<odiv.length;i++){
        odiv[i].index=i;
        odiv[i].onclick=function(){
            for(var k=0;k<obox.length;k++){
                obox[k].style.display="none";
                odiv[k].className=odiv[k].className.replace("ac","");
            }
            this.className+=" ac";
            obox[this.index].style.display="block";
        }
    }
    for(var k=0;k<oli.length;k++){
        oli[k].index=k;
        oli[k].onclick=function(){
            for(var i=0;i<obom.length;i++){
                oli[i].className="";
                obom[i].style.display="none";
            }
            this.className="av";
            obom[this.index].style.display="block";
        }
    }
    for(var s=0;s<ali.length;s++){
        ali[s].index=s;
        ali[s].onclick=function(){
            for(var i=0;i<abom.length;i++){
                ali[i].className="";
                abom[i].style.display="none";
            }
            this.className="av";
            abom[this.index].style.display="block";
        }
    }
};
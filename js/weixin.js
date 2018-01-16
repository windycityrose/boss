/**
 * Created by 技术 on 2017/6/2.
 */
window.onload=function(){
    var banner=document.getElementsByClassName("banner")[0];
    var odiv=banner.getElementsByTagName("div");
    var show=document.getElementsByClassName("show")[0];
    var ul=show.getElementsByTagName("ul");
    for(var i=0;i<odiv.length;i++){
        odiv[i].index=i;
        odiv[i].onclick=function(){
            for(var k=0;k<ul.length;k++){
                ul[k].style.display="none";
                odiv[k].className="";
            }
            ul[this.index].style.display="block";
            this.className="ac";
        }
    }
};
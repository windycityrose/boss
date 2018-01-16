/**
 * Created by 技术 on 2017/6/1.
 */
window.onload=function(){
    var footer=document.getElementsByClassName("footer")[0];
    var a=footer.getElementsByTagName("a");
    var last=footer.getElementsByClassName("last");
    var jpg=footer.getElementsByClassName("jpg");
    var name=footer.getElementsByClassName("name")
    for(var i=0;i<a.length;i++){
        a[i].index=i;
        a[i].onclick=function(){
            for(var s=0;s<a.length;s++){
                last[s].style.display="block";
                jpg[s].style.display="none";
                name[s].style.color="#666666";
            }
            last[this.index].style.display="none";
            jpg[this.index].style.display="block";
            name[this.index].style.color="#108ee9";
        }
    }
};
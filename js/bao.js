/**
 * Created by 技术 on 2017/6/2.
 */
window.onload=function(){
    var otel=document.getElementById("tixian");
    var ox=document.getElementById("jine");
    var span=document.getElementById("span");
    var submit=document.getElementById("submit");
    var number=span.innerHTML;
    otel.onclick=function(){
        ox.value=number;
        submit.disabled=false;
        submit.style.background="#108EE9"
    };
    document.onkeyup=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(ox.value==""){
            submit.disabled=true;
            submit.style.background="#dddddd";
        }else {
            submit.disabled=false;
            submit.style.background="#108EE9";
        }
    };
};
/**
 * Created by 技术 on 2017/6/1.
 */
window.onload=function(){
  var oban=document.getElementsByClassName("banner")[0];
  var odias=document.getElementsByClassName("disa")[0];
  var omodal=document.getElementsByClassName("modal")[0];
  var osix=oban.getElementsByClassName("six")[0];
  var ofour=oban.getElementsByClassName("four")[0];
  var ainput=ofour.getElementsByTagName("input");
  var one=osix.getElementsByClassName("one")[0];
  var osub=one.getElementsByClassName("zhong")[0];
  var otext=one.getElementsByClassName("text")[0];
  var oli=odias.getElementsByTagName("li");
  var otwo=osix.getElementsByClassName("two")[0];
  var asub=otwo.getElementsByClassName("zhong")[0];
  var osheg=document.getElementsByClassName("sheg")[0];
  var ospan=osheg.getElementsByTagName("span")[0];
  var aspan=osheg.getElementsByTagName("span")[1];
  var osheng=osheg.getElementsByClassName("sheng")[0];
  var ali=osheng.getElementsByTagName("li");
  var oshi=osheg.getElementsByClassName("shi")[0];
  var oul=oshi.getElementsByTagName("ul");
  var oheader=document.getElementsByClassName("header")[0];
  var odiv=oheader.getElementsByClassName("teb");
  var obanner=document.getElementsByClassName("banner")[0];
  var adiv=obanner.getElementsByClassName("teb");
  var opan=document.getElementsByClassName("pan");
  var odisa=document.getElementsByClassName("disa")[0];
  var otop=odisa.getElementsByClassName("top")[0];
  var opic=otop.getElementsByClassName("pic")[0];
  var apic=document.getElementsByClassName("sheg")[0].getElementsByClassName("top")[0].getElementsByClassName("pic")[0];
    var ozhi=document.getElementById("zhifu");
  one.onclick=function(){
        omodal.style.display="block";
        odias.style.bottom="0";
        odias.style.transition="all 0.5s";
        for(var i=0;i<oli.length;i++){
            oli[i].onclick=function(){
                var otitle=this.getElementsByClassName("title")[0];
                osub.innerHTML=otitle.innerHTML;
                odias.style.bottom="-19rem";
                omodal.style.display="none";
                if(asub.innerHTML!=="请选择" && osub.innerHTML!=="请选择"){
                    s=false;
                }
                for(var i=0;i<input.length;i++){
                    if(input[i].value==""){
                        j=true;
                    }else {
                        j=false
                    }
                }
                if(!s && !j){
                    submit.style.background="#108EE9";
                    submit.disabled=true;
                }else {
                    submit.style.background="#dddddd";
                    submit.disabled=false;
                }
            }
        }
    };
  otwo.onclick=function(){
        omodal.style.display="block";
        osheg.style.bottom="0";
        osheg.style.transition="all 0.5s";
        for(var i=0;i<ali.length;i++){
            ali[i].index=i;
            ali[i].onclick=function(){
               ospan.innerHTML=this.innerHTML;
               osheng.style.display="none";
               for(var k=0;k<oul.length;k++){
                   oul[k].style.display="none";
               }
               oul[this.index].style.display="block";
                var sli=oul[this.index].getElementsByTagName("li");
                for(var s=0;s<sli.length;s++){
                    sli[s].onclick=function(){
                        aspan.innerHTML=this.innerHTML;
                        asub.innerHTML=ospan.innerHTML+"市"+aspan.innerHTML;
                        osheg.style.bottom="-19rem";
                        osheg.style.transition="all 0.5s";
                        omodal.style.display="none";
                    }
                }
                if(asub.innerHTML!=="请选择" && osub.innerHTML!=="请选择"){
                    s=false;
                }
                for(var i=0;i<input.length;i++){
                    if(input[i].value==""){
                        j=true;
                    }else {
                        j=false
                    }
                }
                if(!s && !j){
                    submit.style.background="#108EE9";
                    submit.disabled=true;
                }else {
                    submit.style.background="#dddddd";
                    submit.disabled=false;
                }
            }
        }
    };
    opic.onclick=function(){
        omodal.style.display="none";
        odias.style.bottom="-19rem";
        odias.style.transition="all 0.5s";
    };
  apic.onclick=function(){
      osheg.style.bottom="-19rem";
      osheg.style.transition="all 0.5s";
      omodal.style.display="none";
  };
    for(var i=0;i<odiv.length;i++){
      odiv[i].index=i;
      odiv[i].onclick=function(){
          for(var s=0;s<adiv.length;s++){
              adiv[s].style.display="none";
              opan[s].style.display="none";
          }
          adiv[this.index].style.display="block";
          opan[this.index].style.display="block";
      }
    }
    /*if(osub.innerHTML!==null && asub.innerHTML!==null){

    }*/
    var form=document.getElementById('form');
    var input=osix.getElementsByTagName("input");
    var submit=document.getElementById("submit");
    var s=true;
    var j=true;
    document.onkeyup=function(event){
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if(asub.innerHTML!=="请选择" && osub.innerHTML!=="请选择"){
            s=false;
        }
        for(var i=0;i<input.length;i++){
            if(input[i].value==""){
                j=true;
                break;

            }else {
                j=false;
                submit.style.background="#108EE9";
            }
        }
        if(!s && !j){
            submit.style.background="#108EE9";
            submit.disabled=true;
        }else {
            submit.style.background="#dddddd";
            submit.disabled=false;
        }
        if(ainput[0].value!==""&& ainput[1].value!==""){
            ozhi.style.background="#108EE9";
            ozhi.disabled=false;
        }else {
            ozhi.style.background="#dddddd";
            ozhi.disabled=true;
        }
    }
};
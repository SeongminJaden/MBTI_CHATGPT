
function goBack() {

    var a=document.querySelector("#keywords").value;
            document.querySelector("#two").innerText=a;
            document.querySelector("#keywords").value="";
            document.querySelector("#keywords").focus();
  } 
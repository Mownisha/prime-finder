$(document).ready(function() {
  $("#fact").submit(function(event) {
    event.preventDefault();
    var num=parseInt($("#num").val());
    var n;
    var j;
    var str=[];
    for(n=2; n<=num; n+=1) {
      var not=false;
      for(m=2;m<=n;m+=1) {
          if(n%m===0 && m!==n) {
            not=true;
          }
       }
       if(not===false) {
         str.push(n);
       }
    }
       $("p").text(str);
  });
});

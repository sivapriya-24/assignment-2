//callback function

var setI;
var count=0;
setI=setInterval(() => {
    count=count+1;
    console.log(count);
},1000);

setTimeout(() => {
    console.log("overtime");
    clearInterval(setI);
},5000);

//<script src="https://cdn.tailwindcss.com"></script>
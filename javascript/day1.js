//callback function

function print(a){
    console.log(a());
}
print(() => {
    console.log("Arrow function");
});   

//getelementbyid and addeventlistener
<script>
        var text=document.getElementById("text");
        var btn=document.getElementById("btn");
        btn.addEventListener("click",() => {
            text.textContent="Hello Developers!";
        });
</script>
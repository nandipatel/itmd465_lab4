function init(){
    document.addEventListener('DOMContentLoaded', init);
}

// S E C T I O N  1
document.getElementById("sec1-btn1").addEventListener("click", s1);
function s1(){
    alert1 = document.getElementById("sec1-input").value;
    if(alert1 != ""){
        alert(alert1);
        document.getElementById("sec1-input").value="";
    }
    else{
        alert("No alert text has been entered!")
    }
}

// S E C T I O N  2
document.getElementById("sec2-btn1").addEventListener("click", s2);
function s2(){
    //h3
    var x = document.getElementsByTagName("h3")[0];
    x.outerHTML = "<h3>Nandi Patel</h3>";

    //green box change 
    document.getElementById("sec2-box").style.backgroundColor= "#888888";
    document.getElementById("sec2-box").style.width= "100%";
    document.getElementById("sec2-box").style.height= "20px";

    //paragrah
    var y = document.getElementsByTagName("p")[3];
    y.style.fontWeight = "bold";
    y.style.fontStyle = "italic";
    y.style.fontSize = "12px";

    //photo
    var z = document.getElementsByTagName("img")[0];
    z.src = "img/hamburger_color_icon.png";
    z.alt = "Color Hamburger Icon";
    z.style.width = "100px";

    //link
    document.getElementsByTagName("a")[0].setAttribute("href", "http://www.iit.edu");
    document.getElementsByTagName("a")[0].innerHTML = "Illinois Tech Website";
    document.getElementsByTagName("a")[0].style.color = "#cc0000";
    document.getElementsByTagName("a")[0].style.textDecoration = "underline";

}

// S E C T I O N  3
document.getElementById("sec3-btn1").addEventListener("click", s3);
function s3(){
    cel = document.getElementById("sec3-input").value;
    if (cel != ""){
        var celsius = parseFloat(cel);
        if (isNaN(celsius)){
            return alert("A non-numeric value was entered!")
        }
        else{
            farenheit = (celsius * (9/5)) + 32;
            document.getElementById("sec3-contentarea").innerHTML = celsius + " degrees celsius is equal to " + 
            farenheit + " degrees fahrenheit.";
            document.getElementById("sec3-input").value="";
        }
    }
    else{
        alert("No value has been entered!")
    }
}
document.getElementById("sec3-btn2").addEventListener("click", s3_clearFunc);
function s3_clearFunc() {
    document.getElementById("sec3-contentarea").innerHTML = "";
    document.getElementById("sec3-input").value="";
}

// S E C T I O N  4

// S E C T I O N  5

// S E C T I O N  6
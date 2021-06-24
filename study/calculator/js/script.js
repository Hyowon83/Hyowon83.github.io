
function forclear() {
    document.getElementById("output").innerHTML = "0";
    document.getElementById("output2").style.display = "none";
}
function removeZero() {
    document.getElementById("output2").style.display = "none";
    var value = document.getElementById("output").innerHTML;

    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}
function perc() {
    removeZero()
    document.getElementById("output2").style.display = "none";
    
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}
function fordisplay(value) {
    removeZero()
    document.getElementById("output2").style.display = "none";
    
    document.getElementById("output").innerHTML += value;
}
function solve() {
    removeZero()
    document.getElementById("output2").style.display = "none";
    
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
}
function oneclear() {
    document.getElementById("output2").style.display = "none";

    var value = document.getElementById("output").innerHTML;
    if (value != null) {
        document.getElementById("output").innerHTML = value.substring(0,value.length-1);
        if (value.length <= 2) {
            document.getElementById("output").innerHTML = "0";
        }
    }
}
// 한글자 지우기 선호씨 버젼.
// function oneclear() {
//     var value = document.getElementById("output").innerHTML;
//     value = value.slice(0,-1);
//     document.getElementById("output").innerHTML = value;
//     if (value == " " || value.length == 0) {
//         value = "0"
//         document.getElementById("output").innerHTML = value;
//     }
// }
// 한...두글자 지우기 준호오빠 버젼.
// function oneclear() { // 한자리씩 delete
//     var value = document.getElementById("output").innerHTML;
//     var value = document.getElementById("output").innerHTML = value.slice(0,-1);
//     document.getElementById("output").innerHTML = value.slice(0,-1);
//     if (value == " " || value.length <= 2){
//         document.getElementById("output").innerHTML = "0";
//     }
// }

function sqrt() {
    removeZero()
    document.getElementById("output2").style.display = "block";
    var value = document.getElementById("output").innerHTML;

    value1 = Math.sqrt(value)
    document.getElementById("output").innerHTML = value1;
    document.getElementById("output2").innerHTML = '√'+value;

    // var result = document.getElementById("output2");
    // if (result.style.display == "block") {
    //     result.style.display = "none";
    // } else {
    //     result.style.display = "block";
    // }
}
function square() {
    removeZero()
    document.getElementById("output2").style.display = "block";
    var value = document.getElementById("output").innerHTML;

    value1 = value**2
    document.getElementById("output").innerHTML = value1;
    document.getElementById("output2").innerHTML = value+'²';
}
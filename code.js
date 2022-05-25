var num1=0, num2=0, num3=0, num4=0, num5=0, num6=0;

function sabor_1(){
    num1 += 60;
}

function sabor_2(){
    num2 += 45;
}

function sabor_3(){
    num3 += 50;
    console.log(num3)
}

function sabor_4(){
    num4 += 40;
}

function sabor_5(){
    num5 += 40;
}

function sabor_6(){
    num6 += 55;
}

function resultado(){
    resp = num3+num1+num4+num2+num5+num6;

    document.getElementById("result").innerText = "Resultado: " + resp;
}

console.log("Thales e Cesar");
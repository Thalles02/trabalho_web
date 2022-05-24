var num1=0, num2=0, num3=0, num4=0;

function sabor_1(){
    num1 += 45;
}

function sabor_2(){
    num2 += 45;
}

function sabor_3(){
    num3 += 45;
    console.log(num3)
}

function sabor_4(){
    num4 += 45;
}

function resultado(){
    resp = num3+num1+num4+num2;

    document.getElementById("result").innerText = "Resultado: " + resp;
}

console.log("Thales");
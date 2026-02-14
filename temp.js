let calculateButton = document.querySelector("#calculateButton");
let convertTemp = document.getElementById("convertTemp");
let fromUnit = document.getElementById("convertFromUnit");
let toUnit = document.getElementById("convertToUnit");


document.getElementById("calculateButton").onclick = function (){

    fromUnit = fromUnit.value;
    toUnit = toUnit.value;
    convertTemp = convertTemp.value;
    let temp;
    
    console.log("fromUnit" + fromUnit);
    console.log("toUnit" + toUnit);


    let para = document.createElement("p");


    switch(true){

        case fromUnit == toUnit:
            break;
        //celsius
         case fromUnit == "celsius" && toUnit == "fahrenheit":
                temp = cToF(convertTemp);
                convertTemp = temp;
                break;
        case fromUnit == "celsius" && toUnit == "kelvin":
                temp = cToK(convertTemp);
                convertTemp = temp;
                break;



        //fahrenheit

        case fromUnit == "fahrenheit" && toUnit == "celsius":
                temp = fToC(convertTemp);
                convertTemp = temp;
                break;
        case fromUnit == "fahrenheit" && toUnit == "kelvin":
                temp = fToK(convertTemp);
                convertTemp = temp;
                break;


        //kelvin
        case fromUnit == "kelvin" && toUnit == "celsius":
                temp = kToC(convertTemp);
                convertTemp = temp;
                break;
        case fromUnit == "kelvin" && toUnit == "fahrenheit":
                temp = fToK(convertTemp);
                convertTemp = temp;
                break;
    }

    para.innerText = "This is the converted temp -> " + convertTemp + " " + toUnit;
    document.body.appendChild(para);




}






//celsius functions
function cToF(c){
    return (c * (9/5)) + 32;
}
function cToK(c){
    return parseInt(c) + 273.15;
}
//fahrenheit functions
function fToC(f){
    return (f - 32) * 5/9 
}
function fToK(f){
    return (f - 32) *  5/9 + 273.15;
}
//kelvin functions
function kToC(k){
    return k - 273.15;
}
function kToF(k){
    return (k -273.15) * 9/5 + 32 
}
let calculateButton = document.querySelector("#calculateButton");
let convertWeight = document.getElementById("convertWeight");
let fromUnit = document.getElementById("convertFromUnit");
let toUnit = document.getElementById("convertToUnit");


document.getElementById("calculateButton").onclick = function (){


    fromUnit = fromUnit.value;
    toUnit = toUnit.value;
    convertWeight = convertWeight.value;
    let temp;

    console.log("fromUnit" + fromUnit);
    console.log("toUnit" + toUnit);


    let para = document.createElement("p");



        switch(true){
            case fromUnit == toUnit:
                break;

            //metric -> metric


            //metric mg
            case fromUnit == "milligram" && toUnit == "gram":
                temp = mgToG(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "milligram" && toUnit == "kilogram":
                temp = mgToG(convertWeight);
                convertWeight = temp;
                break;
           
            //metric gram
            case fromUnit == "gram" && toUnit == "milligram":
                temp = gToMg(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "gram" && toUnit == "kilogram":
                temp = gToKg(convertWeight);
                convertWeight = temp;
                break;
            //metric kilogram
            case fromUnit == "kilogram" && toUnit == "milligram":
                temp = kgToMg(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "kilogram" && toUnit == "gram":
                temp = kgToG(convertWeight);
                convertWeight = temp;
                break;


            //Metric -> Imperial

            //imperial mg
            case fromUnit == "milligram" && toUnit == "ounce":
                temp = mgToOz(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "milligram" && toUnit == "pound":
                temp = mgToLb(convertWeight);
                convertWeight = temp;
                break;
            //imperial g
            case fromUnit == "gram" && toUnit == "ounce":
                temp = gToOz(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "gram" && toUnit == "pound":
                temp = gToLb(convertWeight);
                convertWeight = temp;
                break;
            //imperial kg    
            case fromUnit == "kilogram" && toUnit == "ounce":
                temp = kgToOz(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "kilogram" && toUnit == "pound":
                temp = kgToLb(convertWeight);
                convertWeight = temp;
                break;
        
             //Imperial -> Metric
            //Ounce -> metric
            case fromUnit == "ounce" && toUnit == "milligram":
                temp = ozToMg(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "ounce" && toUnit == "gram":
                temp = ozToG(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "ounce" && toUnit == "kilogram":
                temp = ozToKg(convertWeight);
                convertWeight = temp;
                break;

            //Pound -> metric
            case fromUnit == "pound" && toUnit == "milligram":
                temp = lbToMg(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "pound" && toUnit == "gram":
                temp = lbToG(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "pound" && toUnit == "kilogram":
                temp = lbToKg(convertWeight);
                convertWeight = temp;
                break;

            //Imperial -> Imperial
            
            case fromUnit == "ounce" && toUnit == "pound":
                temp = ozToLb(convertWeight);
                convertWeight = temp;
                break;
            case fromUnit == "pound" && toUnit == "ounce":
                temp = ozToG(convertWeight);
                convertWeight = temp;
                break;
          
            
            
                 



        }
    
    
    para.innerText = "This is the convert weight -> " + convertWeight + " " + toUnit;
    document.body.appendChild(para);











}






//metric -> metric

//metric mg
function mgToG(mg){
    return mg/1000;
}
function mgToKg(mg){
    return mg/1e+6;
}
//metric gram
function gToMg(g){
    return g*1000;
}
function gToKg(g){
    return g/1000;
}

//metric kg
function kgToMg(kg){
    return kg * 1e+6;
}
function kgToG(kg){
    kg * 1000;
}



// Metric -> Imperial
//imperial mg
function mgToOz(mg){
    return mg/28350;
}
function mgToLb(mg){
    return mg/453600;
}

//imperial gram
function gToOz(g){
    return g/28.35;
}
function gToLb(g){
    return g/453.6;
}
//imperial kg
function kgToOz(kg){
    return kg*35.274;
}
function kgToLb(kg){
    return kg * 2.205;
}


//Imperial -> Metric

//Oz
function ozToMg(oz){
    return oz * 28350;
}
function ozToG(oz){
    return oz * 28.35;
}
function ozToKg(oz){
    return oz/35.274;
}

//Lb
function lbToMg(lb){
    return lb * 453600;
}
function lbToG(lb){
    return lb * 453.6;
}
function lbToKg(lb){
    return lb/2.205;
}


//Imperial to Imperial

//Oz
function ozToLb(oz){
    return oz/16;
}
//Lb
function lbToOz(lb){
    return lb * 16;
}
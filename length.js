let calculateButton = document.querySelector("#calculateButton");
let convertLength = document.getElementById("box1");
let fromUnit = document.getElementById("convertFromUnit");
let toUnit = document.getElementById("convertToUnit");

document.getElementById("calculateButton").onclick = function () {
  
  const start = performance.now();

  
  fromUnit = fromUnit.value;
  toUnit = toUnit.value;
  convertLength = convertLength.value;
  let temp;

  console.log("fromUnit" + fromUnit);
  console.log("toUnit" + toUnit);

  let para = document.createElement("p");


    switch(true){
      //don't change convertLength, just break and finish up at the bottom of switch.
      case fromUnit == toUnit:
        break;
  
      

      //metric mm cases
      case fromUnit == "millimeter" && toUnit == "centimeter":
        temp = mmToCm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "millimeter" && toUnit == "meter":
        temp = mmToMeter(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "millimeter" && toUnit == "kilometer":
        temp = mmToKilometer(convertLength);
        convertLength = temp;
        break;
      //imperial mm cases
      case fromUnit == "millimeter" && toUnit == "inch":
        temp = mmToInch(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "millimeter" && toUnit == "foot":
        temp = mmToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "millimeter" && toUnit == "yard":
        temp = mmToYard(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "millimeter" && toUnit == "mile":
        temp = mmToMile(convertLength);
        convertLength = temp;
        break;
      
      //metric cm cases
      case fromUnit == "centimeter" && toUnit == "millimeter":
        temp = cmToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "centimeter" && toUnit == "meter":
        temp = cmToMeter(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "centimeter" && toUnit == "kilometer":
        temp = cmToKilometer(convertLength);
        convertLength = temp;
        break;
      //imperial cm cases
      case fromUnit == "centimeter" && toUnit == "inch":
        temp = cmToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "centimeter" && toUnit == "foot":
        temp = cmToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "centimeter" && toUnit == "yard":
        temp = cmToYard(convertLength);
        convertLength = temp;
        break;
      case fromUnit == "centimeter" && toUnit == "mile":
        temp = cmToMile(convertLength);
        convertLength = temp;
        break;


      //metric meter cases
      case fromUnit == "meter" && toUnit == "millimeter":
        temp = meterToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "meter" && toUnit == "centimeter":
        temp = meterToCentimeter(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "meter" && toUnit == "kilometer":
        temp = meterToKilometer(convertLength);
        convertLength = temp;
        break;

      //imperial meter cases
      case fromUnit == "meter" && toUnit == "inch":
        temp = meterToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "meter" && toUnit == "foot":
        temp = meterToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "meter" && toUnit == "yard":
        temp = meterToYard(convertLength);
        convertLength = temp;
        break;
      case fromUnit == "meter" && toUnit == "mile":
        temp = meterToMile(convertLength);
        convertLength = temp;
        break;
      

      //metric kilometer cases
      case fromUnit == "kilometer" && toUnit == "millimeter":
        temp = kmToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "kilometer" && toUnit == "centimeter":
        temp = kmToCm(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "kilometer" && toUnit == "meter":
        temp = kmToMeter(convertLength);
        convertLength = temp;
        break;
      //imperial kilometer cases

      case fromUnit == "kilometer" && toUnit == "inch":
        temp = kmToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "kilometer" && toUnit == "foot":
        temp = kmToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "kilometer" && toUnit == "yard":
        temp = kmToYard(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "kilometer" && toUnit == "mile":
        temp = kmToMile(convertLength);
        convertLength = temp;
        break;

      //Imperial -> imperial inches
      case fromUnit == "inch" && toUnit == "foot":
        temp = inchToFoot(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "inch" && toUnit == "yard":
        temp = inchToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "inch" && toUnit == "mile":
        temp = inchToMile(convertLength);
        convertLength = temp;
        break;


      //Imperial -> Metric inches

      
      case fromUnit == "inch" && toUnit == "millimeter":
        temp = inchToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "inch" && toUnit == "centimeter":
        temp = inchToCm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "inch" && toUnit == "meter":
        temp = inchToMeter(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "inch" && toUnit == "kilometer":
        temp = inchToKm(convertLength);
        convertLength = temp;
        break;

      //Imperial -> Imperial foot
      case fromUnit == "foot" && toUnit == "inch":
        temp = footToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "foot" && toUnit == "yard":
        temp = footToYard(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "foot" && toUnit == "mile":
        temp = footToMile(convertLength);
        convertLength = temp;
        break;

      //Imperial -> Metric foot
      case fromUnit == "foot" && toUnit == "millimeter":
        temp = footToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "foot" && toUnit == "centimeter":
        temp = footToCm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "foot" && toUnit == "meter":
        temp = footToMeter(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "foot" && toUnit == "kilometer":
        temp = footToKilometer(convertLength);
        convertLength = temp;
        break;
      
      //Imperial -> Imperial yard
      case fromUnit == "yard" && toUnit == "inch":
        temp = yardToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "yard" && toUnit == "foot":
        temp = yardToFoot(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "yard" && toUnit == "mile":
        temp = yardToMile(convertLength);
        convertLength = temp;
        break;
    
      //Imperial -> Metric yard
      case fromUnit == "yard" && toUnit == "millimeter":
        temp = yardToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "yard" && toUnit == "centimeter":
        temp = yardToCm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "yard" && toUnit == "meter":
        temp = yardToMeter(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "yard" && toUnit == "kilometer":
        temp = yardToKilometer(convertLength);
        convertLength = temp;
        break;
      //Imperial -> Imperial Mile
      case fromUnit == "mile" && toUnit == "inch":
        temp = mileToInch(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "mile" && toUnit == "foot":
        temp = mileToFoot(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "mile" && toUnit == "yard":
        temp = mileToYard(convertLength);
        convertLength = temp;
        break;

      //Imperial -> Metric Mile
      case fromUnit == "mile" && toUnit == "millimeter":
        temp = mileToMm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "mile" && toUnit == "centimeter":
        temp = mileToCm(convertLength);
        convertLength = temp;
        break;

      case fromUnit == "mile" && toUnit == "meter":
        temp = mileToMeter(convertLength);
        convertLength = temp;
        break;
      
      case fromUnit == "mile" && toUnit == "kilometer":
        temp = mileToKilometer(convertLength);
        convertLength = temp;
        break;




    }
    para.innerText = "This is the convert length -> " + convertLength + " " + toUnit;
    document.body.appendChild(para);
    const end = performance.now();
    console.log((end -start) + "ms");

  };







//mm functions

//metric
function mmToCm(mm) {
  return mm/10;
}
function mmToMeter(mm){
  return mm/1000;
}
function mmToKilometer(mm){
  return mm/1e+6;
}

//imperial
function mmToInch(mm){
  return mm/25.4;
}
function mmToFoot(mm){
  return mm/304.8
}
function mmToYard(mm){
  return mm/914.4;
}
function mmToMile(mm){
  return mm/1.609e+6;
}

//cm functions
//metric
function cmToMm(cm){
  return cm*10;
}
function cmToMeter(cm){
  return cm/100;
}
function cmToKilometer(cm){
  return cm/100000;
}

//imperial
function cmToInch(cm){
  return cm/2.54;
}
function cmToFoot(cm){
  return cm/30.48;
}
function cmToYard(cm){
  return cm/91.44;
}
function cmToMile(cm){
  return cm/160900;
}

//metric meter functions
function meterToMm(meter){
  return meter/1000;
}
function meterToCentimeter(meter){
  return meter*100;
}
function meterToKilometer(meter){
  return meter/1000;
}

//imperial meter functions
function meterToInch(meter){
  return meter*39.37;
}
function meterToFoot(meter){
  return meter * 3.281;
}
function meterToYard(meter){
  return meter*1.094;
}
function meterToMile(meter){
  return meter/1609;
}


//metric kilometer functions
function kmToMm(km){
  return km * 1e+6;
}
function kmToCm(km){
  return km*100000;
}
function kmToMeter(km){
  return km*1000;
}

//imperial kilometer functions
function kmToInch(km){
  return km * 39370;
}
function kmToFoot(km){
  return km * 3280.84;
}
function kmToYard(km){
  return km*1093.61;
}
function kmToMile(km){
  return km/1.609;
}


//Imperial

//Imperial - imperial inches
function inchToFoot(inch){
  return inch/12;
}
function inchToYard(inch){
  return inch/36;
}
function inchToMile(inch){
  return inch/63360;
}

//Imperial -> Imperial Foot
function footToInch(foot){
  return foot/12;
}
function footToYard(foot){
  return foot/3;
}
function footToMile(foot){
  return foot/5280;
}

//Imperial -> Imperial yard
function yardToInch(yard){
  return yard/36;
}
function yardToFoot(yard){
  return yard*3;
}
function yardToMile(yard){
  return yard/1760;
}

//Imperial -> Imperial Mile
function mileToInch(mile){
  return mile * 63360;
}
function mileToFoot(mile){
  return mile * 5280;
}
function mileToYard(mile){
  return mile * 1760;
}




//Imperial -> metric inches
function inchToMm(inch){
  return inch/25.4;
}
function inchToCm(inch){
  return inch/2.54;
}
function inchToMeter(inch){
  return inch/39.37;
}
function inchToKm(inch){
  return inch/39370;
}

//Imperial -> Metric foot
function footToMm(foot){
  return foot*304.8;
}
function footToCm(foot){
  return foot*30.48;
}
function footToMeter(foot){
  return foot/3.281;
}
function footToKilometer(foot){
  return foot/3281;
}

//Imperial -> Metric Yard
function yardToMm(yard){
  return yard * 914.4;
}
function yardToCm(yard){
  return yard * 91.44;
}
function yardToMeter(yard){
  return yard * 1.094;
}
function yardToKilometer(yard){
  return yard/1094;
}

//Imperial -> Metric Mile
function mileToMm(mile){
  return mile * 1.609e+6;
}
function mileToCm(mile){
  return mile * 160900;
}
function mileToMeter(mile){
  return mile * 1609;
}
function mileToKilometer(mile){
  return mile * 1.609;
}

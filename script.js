let calculateButton = document.querySelector("#calculateButton");
let convertLength = document.getElementById("box1");
let fromUnit = document.getElementById("convertFromUnit");
let toUnit = document.getElementById("convertToUnit");

document.getElementById("calculateButton").onclick = function () {
  fromUnit = fromUnit.value;
  toUnit = toUnit.value;

  console.log("fromUnit" + fromUnit);
  console.log("toUnit" + toUnit);

  let para = document.createElement("p");
  para.innerText = "This is the convert length -> " + convertLength.value;
  document.body.appendChild(para);

  if (fromUnit == toUnit) {
    para.innerText =
      "This is the converted length -> " + convertLength.value + " " + fromUnit + ".";
    document.body.append(para);
  }

  //console.log("From Unit -> " + fromUnit);
  //console.log("To Unit -> " + toUnit);
};

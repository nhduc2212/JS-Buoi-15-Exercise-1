function ex1() {
  var areaScore = document.getElementById("area-selector").value * 1;
  var typeScore = document.getElementById("type-selector").value * 1;
  var asMathScore = document.getElementById("ex1-math-AS").value * 1;
  var asLitScore = document.getElementById("ex1-lit-AS").value * 1;
  var asEngScore = document.getElementById("ex1-eng-AS").value * 1;
  var qsMathScore = document.getElementById("ex1-math-QS").value * 1;
  var qsLitScore = document.getElementById("ex1-lit-QS").value * 1;
  var qsEngScore = document.getElementById("ex1-eng-QS").value * 1;
  var asTotalScore =
    asMathScore + asLitScore + asEngScore + areaScore + typeScore;
  var qsTotalScore = qsMathScore + qsEngScore + qsLitScore;
  var result = document.getElementById("ex1-result");
  if (
    asTotalScore >= qsTotalScore &&
    asMathScore !== 0 &&
    asLitScore !== 0 &&
    asEngScore !== 0
  ) {
    result.innerHTML = "Thí sinh đã đậu với số điểm là " + asTotalScore;
  } else {
    result.innerHTML = "Thí sinh đã rớt với số điểm là " + asTotalScore;
  }
}

function ex2() {
  var name = document.getElementById("ex2-name").value;
  var electricityConsumed =
    document.getElementById("consumed-electricity").value * 1;
  var electricityConsumedZero = 500 * 50;
  var electricityConsumed50 = 650 * 50 +electricityConsumedZero;
  var electricityConsumed100 = 850 * 100+electricityConsumed50;
  var electricityConsumed150 = 1100 * 150+electricityConsumed100;
  var result = document.getElementById("ex2-result");
  if (electricityConsumed <= 50*1) {
    result.innerHTML = "Mr/Mrs." +name + " need to pay " + 500 * electricityConsumed;
  } else if (electricityConsumed > 50*1 && electricityConsumed <= 100*1) {
    result.innerHTML =
    "Mr/Mrs." +name + " need to pay " +
      (650 * (electricityConsumed - 50*1) +
      electricityConsumedZero);
  } else if (electricityConsumed > 100*1 && electricityConsumed <= 200*1) {
    result.innerHTML =
    "Mr/Mrs." +name + " need to pay " +
      (850 * (electricityConsumed - 100*1) +
      electricityConsumed50);
  } else if (electricityConsumed > 200*1 && electricityConsumed <= 350*1) {
    result.innerHTML =
    "Mr/Mrs." +name + " need to pay " +
      (1100 * (electricityConsumed - 200*1) +
      electricityConsumed100);
  } else {
    result.innerHTML =
    "Mr/Mrs." +name + " need to pay " +
      (1300 * (electricityConsumed - 350*1) +
      electricityConsumed150);
  }
}

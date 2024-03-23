function calculate() {

    var grade1 = parseFloat(document.getElementById("grade1").value);
  
    var grade2 = parseFloat(document.getElementById("grade2").value);
  
    var grade3 = parseFloat(document.getElementById("grade3").value);
  
    var grade4 = parseFloat(document.getElementById("grade4").value);
  
    var grade5 = parseFloat(document.getElementById("grade5").value);
  
    var sum = (grade1 * 3) + (grade2 * 3) + (grade3 * 3) + (grade4 * 3) + (grade5 * 3);
  
    var average = sum / 15;
  
    document.getElementById("result").innerHTML = "Final Grade: " + average.toFixed(2);
  
  }
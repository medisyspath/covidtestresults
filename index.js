function user1() {
  var user = document.getElementById("phone").value;
  var pass = document.getElementById("password").value;
  if (user == "8126229752" && pass == "8126") {
    window.open(
      "covidtestresults/assets/reports/Mr PRADHUMNA BANERJI_20Y_Male.pdf"
    );
  } else if (user == "9675063187" && pass == "9675") {
    window.open(
      "covidtestresults/assets/reports/Mr SHUBHAM SAXENA_19Y_Male.pdf"
    );
  } else if (user == "9005422851" && pass == "9005") {
    window.open(
      "covidtestresults/assets/reports/Mr PULKIT AGARWAL_19Y_Male.pdf"
    );
  } else if (user == "7060953166" && pass == "7060") {
    window.open(
      "covidtestresults/assets/reports/Ms MAHI SAXENA_20Y_Female.pdf"
    );
  } else if (user == "7417489957" && pass == "7417") {
    window.open("covidtestresults/assets/reports/Mr RITAJ SHARMA_20Y_Male.pdf");
  } else if (user == "9451168310" && pass == "9451") {
    window.open(
      "covidtestresults/assets/reports/Mr ANURODH DUBEY_19Y_Male.pdf"
    );
  } else if (user == "8726403544" && pass == "8726") {
    window.open(
      "covidtestresults/assets/reports/Mr DIVYANSH SINGH_20Y_Male.pdf"
    );
  } else if (user == "7895890330" && pass == "7895") {
    window.open("covidtestresults/assets/reports/Mr GITESH ARORA_20Y_Male.pdf");
  } else if (user == "7452942555" && pass == "7452") {
    window.open(
      "covidtestresults/assets/reports/Mr ASHUTOSH TRIPATHI_19Y_Male.pdf"
    );
  } else if (user == "8003033317" && pass == "8003") {
    window.open(
      "covidtestresults/assets/reports/Mr ANIKET AGARWAL_20Y_Male.pdf"
    );
  } else if (user == "8279951589" && pass == "8279") {
    window.open(
      "covidtestresults/assets/reports/Ms SURABHI SHARMA_19Y_Female.pdf"
    );
  } else if (user == "9359950586" && pass == "9359") {
    window.open(
      "covidtestresults/assets/reports/Mr SUMIT KHATTAR_37Y_Male.pdf"
    );
  } else {
    alert("PhoneNo/Password Mismatched...");
  }
}

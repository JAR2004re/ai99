$(document).ready(function () {
    // Animate welcome screen text
    setTimeout(function () {
        $("#banner h1").fadeOut(1500);
        $("#banner h1").slideDown(1500);
    }, 1500);
    });

// flex3
    function updateData3() {
        // Get input values
        var emotment = document.getElementById('emotment').value;
        var health = document.getElementById('health').value;
  
        // Create a JavaScript object
        var data = {
          "emotment": emotment,
          "health": health
        };
  
        // Convert the JavaScript object to JSON string
        var jsonString = JSON.stringify(data);
  
        // Save JSON data to a file using FileSaver.js
        var blob = new Blob([jsonString], { type: "application/json" });
        saveAs(blob, "wellbeing.json");

      }
      // flex1
      function updateData1() {
        // Get input values
        var education = document.getElementById('education').value;
        var population = document.getElementById('population').value;
        var gdp = document.getElementById('gdp').value;
        var health = document.getElementById('health').value;
  
        // Create a JavaScript object
        var data1 = {
          "education":education,
          "population":population,
          "gdp": gdp,
          "health": health
        };
  
        // Convert the JavaScript object to JSON string
        var jsonString = JSON.stringify(data1);
  
        // Save JSON data to a file using FileSaver.js
        var blob = new Blob([jsonString], { type: "application/json" });
        saveAs(blob, "social.json");
      }
      function updateData2() {
        // Get input values
        var emotment = document.getElementById('infrastructure').value;
        var health = document.getElementById('housing').value;
  
        // Create a JavaScript object
        var data5 = {
          "infrastructure": infrastructure,
          "housing": housing
        };
  
        // Convert the JavaScript object to JSON string
        var jsonString = JSON.stringify(data5);
  
        // Save JSON data to a file using FileSaver.js
        var blob = new Blob([jsonString], { type: "application/json" });
        saveAs(blob, "urban.json");
      }
      function updateData4() {
        // Get input values
        var Date = document.getElementById('Date').value;
        var time = document.getElementById('time').value;
        var junction = document.getElementById('junction').value;

       
  
        // Create a JavaScript object
        var data6 = {
          "Date": Date,
          "time":time,
          "junction":junction
        };
  
        // Convert the JavaScript object to JSON string
        var jsonString = JSON.stringify(data6);
  
        // Save JSON data to a file using FileSaver.js
        var blob = new Blob([jsonString], { type: "application/json" });
        saveAs(blob, "info.json");
      }
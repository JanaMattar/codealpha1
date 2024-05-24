document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var calcInput = document.getElementById('calc').value;
    var calc = new Date(calcInput);
    var today = new Date();
    
    var yearsDiff = today.getFullYear() - calc.getFullYear();
    var monthsDiff = today.getMonth() - calc.getMonth();
    var daysDiff = today.getDate() - calc.getDate();
    
    console.log("Years difference:", yearsDiff);
    console.log("Months difference:", monthsDiff);
    console.log("Days difference:", daysDiff);
    
    if (daysDiff < 0) {
      monthsDiff--;
      var lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      daysDiff = lastMonth.getDate() + daysDiff;
    }
    
    // Adjust the difference if the birth month is later in the current year
    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      yearsDiff--;
      monthsDiff = 12 + monthsDiff; // Calculate the number of months in the current year
    }
    
    console.log("Adjusted years difference:", yearsDiff);
    console.log("Adjusted months difference:", monthsDiff);
    console.log("Adjusted days difference:", daysDiff);
    
    var ageYearsMonthsMessage = "Your age is: ";
    
    if (yearsDiff > 0) {
      ageYearsMonthsMessage += yearsDiff + (yearsDiff === 1 ? " year" : " years");
    }
    
    if (monthsDiff > 0) {
      ageYearsMonthsMessage += (yearsDiff > 0 ? ", " : "") + monthsDiff + (monthsDiff === 1 ? " month" : " months");
    }
    
    if (daysDiff > 0) {
      ageYearsMonthsMessage += (yearsDiff > 0 || monthsDiff > 0 ? " and " : "") + daysDiff + (daysDiff === 1 ? " day" : " days");
    }
    
    document.getElementById('result').innerText = ageYearsMonthsMessage;

  });
  
  
  
  
  
  
  
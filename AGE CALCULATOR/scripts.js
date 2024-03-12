function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var currentDate = new Date(document.getElementById("currentdate").value);
  
    var age = currentDate.getFullYear() - birthdate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthdate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthdate.getDate())) {
      age--;
    }
  
    document.getElementById("result").innerText = "Your age is: " + age;
  }
  
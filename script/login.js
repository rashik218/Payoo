document.getElementById("login-btn")
.addEventListener('click', function(event){
  event.preventDefault();
  const accountNumber = document.getElementById("accountNumber").value;
  const pin = getInputValueByID("pin");
  if(accountNumber.length === 11){
    if(pin === 1234){
      window.location.href= "./main.html"
    } else{
      alert("Invalid Pin number")
    }
  } else{
    alert("Invalid Phone number")
  }
})
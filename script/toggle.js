document.getElementById("logOut")
.addEventListener("click", function () {
  window.location.href = "./index.html";
});
handleToggle("cashOut-section", "none");
handleToggle("transection-section", "none");

document.getElementById("addMoney")
.addEventListener("click", function () {
  handleToggle("add-money-section", "block");
  handleToggle("cashOut-section", "none");
  handleToggle("transection-section", "none");
});

document.getElementById("cashOut")
.addEventListener("click", function () {
  handleToggle("add-money-section", "none");
  handleToggle("cashOut-section", "block");
  handleToggle("transection-section", "none");
});

document.getElementById("transection")
.addEventListener("click", function () {
  handleToggle("add-money-section", "none");
  handleToggle("cashOut-section", "none");
  handleToggle("transection-section", "block");
});

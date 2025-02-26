document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accNumber = document.getElementById("input-number").value;
    const amount = getInputValueByID("amount");
    const pin = getInputValueByID("pin");
    const mainBalance = getInnerTextByID("mainBalance");
    const selectedBank = document.getElementById("allBannk").value;
    if (accNumber.length === 11) {
      if (pin === 1234) {
        const newBalance = mainBalance + amount;
        setInnerTextByIdandvalue("mainBalance", newBalance);
        const historyContainer = document.getElementById("transection-history");
        const div = document.createElement("div");
        div.classList.add("bg-green-400", "p-4", "rounded-lg", "mb-5");
        div.innerHTML = `
        <h1 class ="font-bold">Added Money from ${selectedBank}</h1>
        <h3>Amount: ${amount}</h3>
        <p>Account Number: ${accNumber}</p>
        `;
        historyContainer.appendChild(div);
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Account Number");
    }
  });

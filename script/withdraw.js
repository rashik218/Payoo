document
  .getElementById("withdraw-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const cashOutAmount = getInputValueByID("cashOutAmount");
    const pin = getInputValueByID("cashOutPin");
    const mainBalance = getInnerTextByID("mainBalance");
    if (agentNumber.length === 11) {
      if (pin === 1234) {
        //
        if (cashOutAmount > 0 && cashOutAmount < mainBalance) {
          const newBalance = mainBalance - cashOutAmount;
          setInnerTextByIdandvalue('mainBalance', newBalance);
          const historyContainer  = document.getElementById('transection-history');
        const div = document.createElement('div');
        div.classList.add('bg-red-400', 'p-4', 'rounded-lg', 'mb-5')
        div.innerHTML = `
        <h1 class ="font-bold">Cash Out to ${agentNumber}</h1>
        <h3>Amount: ${cashOutAmount}</h3>
        `
        historyContainer.appendChild(div);
        } else {
          alert("Cash Out Amount must be Greater then 0");
        }
      } else {
        alert("Invalid Pin");
      }
    } else {
      alert("Invalid Agent Number");
    }
  });

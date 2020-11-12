function calculate(x, y) {
  let selectSymbol = prompt(
    "Koju matematičku operaciju želiš izvesti? Za zbrajanje unesi +, za oduzimanje -, za množenje *, za dijeljenje / ili # za izlaz iz kalkulatora!",
    " "
  );

  switch (selectSymbol) {
    case "+":
      x = +prompt("Unesi 1.broj", " ");
      y = +prompt("Unesi 2. broj", " ");
      alert(`Zbroj je: ${parseFloat(x + y).toFixed(10)}`);
      calculate();
      return;
    case "-":
      x = +prompt("Unesi 1.broj", " ");
      y = +prompt("Unesi 2. broj", " ");
      alert(`Razlika je: ${parseFloat(x - y).toFixed(10)}`);
      calculate();
      return;
    case "*":
      x = +prompt("Unesi 1.broj", " ");
      y = +prompt("Unesi 2. broj", " ");
      alert(`Umnožak je: ${parseFloat(x * y).toFixed(10)}`);
      calculate();
      return;
    case "/":
      x = +prompt("Unesi 1.broj", " ");
      y = +prompt("Unesi 2. broj", " ");
      alert(`Količnik je: ${parseFloat(x / y).toFixed(10)}`);
      calculate();
      return;
    case "#":
      return;
    default:
      alert("nisi unio matematičku operaciju!");
      calculate();
      return;
  }
}

calculate();

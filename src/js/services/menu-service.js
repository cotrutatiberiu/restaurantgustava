export class Menu {
  constructor(data) {
    let intakeData = data;
    let antipastiCon = document.getElementById("antipastiContainer");
    let pastaCon = document.getElementById("pastaContainer");
    let secondiCon = document.getElementById("secondiContainer");
    let pizzaCon = document.getElementById("pizzaContainer");
    

    let leftMenuNavbar = document.getElementById("leftMenu");

    let array = [antipastiCon, pastaCon, secondiCon, pizzaCon];

    for (let elem of array) {
      elem.addEventListener("click", fadeInElements);
      elem.addEventListener("click", fadeOutNavbar);
    }

    function fadeInElements() {
      antipastiCon.style.display = "none";
      pastaCon.style.display = "none";
      secondiCon.style.display = "none";
      pizzaCon.style.display = "none";
    }
    function fadeOutNavbar() {
      leftMenuNavbar.style.display = "inline";
      let testal = document.getElementsByClassName("liclass");
      for (let i = 0; i < testal.length; i++) {
        switch (testal[i].accessKey) {
          case "antipasti":
            testal[i].addEventListener("click", () => {
              intakeData.printData(intakeData.antipasti);
            });
            break;
          case "pasta":
            testal[i].addEventListener("click", () => {
              intakeData.printData(intakeData.pasta);
            });
            break;
          case "secondi":
            testal[i].addEventListener("click", () => {
              intakeData.printData(intakeData.secondi);
            });
            break;
          case "pizza":
            testal[i].addEventListener("click", () => {
              intakeData.printData(intakeData.pizza);
            });
            break;
        }
      }
    }
  }
}
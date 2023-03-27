//testing 6 start

// const playerOptions = document.querySelectorAll(".optionPlayerSatu li");
// const comOptions = document.querySelectorAll(".optionPlayerSatu li div");
// const result = document.querySelector("#result");
// const playerResult = result.querySelector(".playerWin");
// const comResult = result.querySelector(".comWin");
// const drawResult = result.querySelector(".draw");

// function generateComOption() {
//   const options = ["optionBatu2", "optionKertas2", "optionGunting2"];
//   const randomIndex = Math.floor(Math.random() * options.length);
//   return options[randomIndex];

//   function determineResult(player, com) {
//     if (
//       (player == "optionKertas" && com == "optionGunting2") ||
//       (player == "optionGunting" && com == "optionBatu2") ||
//       (player == "optionBatu" && com == "optionKertas2")
//     ) {
//       return "com";
//     } else if (
//       (player == "optionKertas" && com == "optionBatu2") ||
//       (player == "optionGunting" && com == "optionKertas2") ||
//       (player == "optionBatu" && com == "optionGunting2")
//     ) {
//       return "player";
//     } else {
//       return "draw";
//     }
//   }
// }

// const playerOptions.forEach((option, index) => {
//   option.addEventListener("click", () => {
//     const playerChoice = option.classList[0];
//     const comChoice = generateComOption();

//     playerOptions.forEach((option) => {
//       option.classList.remove("active");
//     });
//     comOptions.forEach((option) => {
//       option.classList.remove("active");
//     });

//     option.classList.add("active");
//     comOptions[index].classList.add("active");

//     const result = determineResult(playerChoice, comChoice);

//     console.log("com : " + comChoice);
//     console.log("player: " + playerChoice);
//     console.log("result: " + result);
//   });
// });

//testing 6 end

// percobaan testing ke 7 start//

const playerOptions = document.querySelectorAll(".optionPlayerSatu li");
const comOptions = document.querySelectorAll(".optionComputer li");
const result = document.querySelector("#result");
const playerResult = result.querySelector(".playerWin");
const comResult = result.querySelector(".comWin");
const drawResult = result.querySelector(".draw");
// const comHover = result.document.querySelectorAll(".optionComputer");

// bot brain
function generateComOption() {
  const options = ["optionBatu2", "optionKertas2", "optionGunting2"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

// result function
function determineResult(player, com) {
  if (
    (player == "optionKertas" && com == "optionGunting2") ||
    (player == "optionGunting" && com == "optionBatu2") ||
    (player == "optionBatu" && com == "optionKertas2")
  ) {
    return "com";
  } else if (
    (player == "optionKertas" && com == "optionBatu2") ||
    (player == "optionGunting" && com == "optionKertas2") ||
    (player == "optionBatu" && com == "optionGunting2")
  ) {
    return "player";
  } else {
    return "draw";
  }
}

// event listener untuk setiap opsi pemain
playerOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // pilihan pemain
    const player = option.classList[0];

    // pilihan komputer
    const com = generateComOption();

    // hasil pertandingan
    const result = determineResult(player, com);

    // hasil pertandingan
    if (result === "player") {
      playerResult.textContent = parseInt(playerResult.textContent) + 1;
    } else if (result === "com") {
      comResult.textContent = parseInt(comResult.textContent) + 1;
    } else {
      drawResult.textContent = parseInt(drawResult.textContent) + 1;
    }

    console.log("com : " + com);
    console.log("player: " + player);
    console.log("result: " + result);
  });
});

// percobaan testing ke 7 end//

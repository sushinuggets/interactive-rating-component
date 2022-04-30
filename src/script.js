// click number
//add class .selected - change color

//click submit
//change card
// replace html with card # 2

let ratings = document.querySelectorAll(".btn");
let userRating;
function getRating(event) {
  let selection = event.target;

  userRating = selection.name;

  if (document.querySelectorAll(".selected").length > 0) {
    document.querySelectorAll(".selected").forEach((element) => {
      element.classList.remove("selected");
    });
  }
  selection.classList.add("selected");
  return userRating;
}
console.log(userRating);
ratings.forEach(function (number) {
  number.addEventListener("click", getRating);
});

function changeTile(event) {
  event.preventDefault;

  let tile = document.querySelector("#rating");
  tile.classList.add("thank-you");
  tile.innerHTML = `<img
          class="illustration"
          src="images/illustration-thank-you.svg"
          alt="Thank you illustration"
        />
        <span class="selection-text">
          You selected
          <span id="selected-rating">${userRating}</span>
          out of 5
        </span>

        <h2 class>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>`;
}

let submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", changeTile);

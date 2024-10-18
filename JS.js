
// for changing styles
let button = document.querySelector(".button-style");
let some = () => {
  let css = document.querySelector(".css-dark");
  let meteor = document.querySelectorAll(".second-section-first-block-img");
  let middleText = document.querySelectorAll('[dark="Frame55"]');
  if (css.getAttribute('href') === "#") {
    css.setAttribute('href', "style2.css");
    meteor.forEach(element => {
      element.setAttribute('src', "pic/darkstyle/9561ce8c41c01f405b55222ec2ad1c89.png")
    })
    middleText.forEach(element => {
      element.setAttribute('src', "pic/darkstyle/Frame55.png")
    })
  } else {
    css.setAttribute('href', "#");
    meteor.forEach(element => {
      element.setAttribute('src', "pic/9561ce8c41c01f405b55222ec2ad1c89.png")
    })
    middleText.forEach(element => {
      element.setAttribute('src', "pic/Frame55.png")
    })
  }
}
button.addEventListener('click', some);
// for changing styles END



// filter of cards
let siteButton = document.querySelectorAll(".filter");
siteButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    let atrbut = elem.getAttribute("data-filter");
    filtringItems(atrbut);
  })
})
function filtringItems(atr) {
  document.querySelectorAll(".block").forEach(some => {
    if (atr === "all" || some.getAttribute("data-category") === atr) {
      some.style.display = 'flex';
    } else {
      some.style.display = 'none';
    }
  })
}
// filter of cards END


// arrow button visibility
let arrow = document.querySelector(".scroll-up");
window.addEventListener('scroll', () => {
  arrow.style.display = (window.pageYOffset < window.innerHeight) ? 'none' : 'block';
}
)
// arrow button visibility END






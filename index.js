function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget(selector) {
  return document.getElementById(selector).querySelector(selector)
}

function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget(selector1, selector2) {
  return document.getElementById(selector1).querySelector(selector2)
}

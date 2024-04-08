function displayStatus(e) {
  console.log(e)
  console.log(e.children[0].checked)
  e.children[1].textContent = e.children[0].checked ? 1 : 0

}



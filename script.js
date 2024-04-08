function displayStatus(e) {
  e.children[1].textContent = e.children[0].checked ? 1 : 0

}

function display(t, e) {

  console.log(t)
  console.log(e)
  console.log(e.target.parentElement)
  console.log(e.target.checked)
  console.log([...t.children].indexOf(e.target.parentElement))

  console.log(e.target.nextElementSibling)
  e.target.nextElementSibling.textContent= e.target.checked ? 1 : 0
  const z = t.children
  console.log(parseInt([...t.children].map(x=>x.children[1].textContent).join(""),2
  ))


  }

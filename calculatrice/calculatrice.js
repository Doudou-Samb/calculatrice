const inputA = document.getElementById('a')
const inputB = document.getElementById('b')
const res = document.getElementById('res')

const add = document.getElementById('add')
const sub = document.getElementById('sub')
const mul = document.getElementById('mul')
const div = document.getElementById('div')

function Add(a, b) {
  return a + b
}

function Sub(a, b) {
  return a - b
}

function Mul(a, b) {
  return a * b
}

function Div(a, b) {
  return a / b
}

function Calc(op) {
  const a = parseInt(inputA.value)
  const b = parseInt(inputB.value)
  
  const Resultat = op(a, b)
  res.innerHTML = "Resultat :" + Resultat
}

add.addEventListener("click", () => {
  Add()
  res.innerHTML = "Resultat :" + Resultat
})

sub.addEventListener("click", () => {
  Calc(Sub)
})

mul.addEventListener("click", () => {
  Calc(Mul)
})

div.addEventListener("onclick", () => {
  Calc(Div)
})

const table = document.querySelector('.table')
const popUpClose = document.querySelector('.pop_close')
const popUp = document.querySelector('.pop_up')
const bmwCount = document.querySelector('.bmw_count')
const bmwCountt = document.querySelector('.bmww_count')
const timeCount = document.querySelector('.time_count')
const modal = document.querySelector('.modal')
const win = document.querySelector('.win__lose')
for (let i = 1; i <=10; i++) {
  let tr = document.createElement('tr')

  for (let j = 1; j <=10; j++) {
   let td = document.createElement('td')
    tr.appendChild(td)
  }
    table.appendChild(tr)
}

popUpClose.addEventListener('click', function(){
  popUp.classList.remove('open')

  let time =60

  // if(time.length <= 10){
  // }


  let intervalID = setInterval(writeTime, 1000)
  
  function writeTime(){
    if(time !== 0){
      time = time - 1
      timeCount.textContent = `00:${time < 10 ? '0' + time : time}`
    }
    else{
      clearInterval(intervalID)
      modal.classList.add('open')
    }
  }

})


function generateRandomNumbers(){
  let numbers = []
  let random = Math.floor(Math.random() * 100)
  while(numbers.length !== 10  ){
    if(!numbers.includes(random)){
      numbers.push(random)
    }
    random = Math.floor(Math.random() * 100)
  }
  
  return numbers
}
console.log(generateRandomNumbers());

function countBmw(){
  let countbmw =table.querySelectorAll('.bmw').length

  bmwCount.textContent= countbmw
}
function countBmww(){
  let countbmw =table.querySelectorAll('.bmw').length

  bmwCountt.textContent= countbmw
}

const cells=table.querySelectorAll('td')
const randomNumbers = generateRandomNumbers()
for(let i =0; i< cells.length; i++){
  let cell =cells[i]
  cell.addEventListener('click', function(){
    cell.classList.add('animate')
   if(randomNumbers.includes(i)){
    cell.classList.add('bmw')
   }else{
    cell.classList.add('mers')
   }
   countBmw()
  })
}
// if(countBmw >= 10   ){
//   win.innerHTML = "winn"
// }else{
//   win.innerHTML = "Lose"
// }
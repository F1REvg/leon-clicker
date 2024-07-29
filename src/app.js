const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')
const $months = document.querySelector('#months')

function start() {
    setScore(getScore())
    setImage()
}

function setScore(score) {
    localStorage.setItem('score', score)
    $score.textContent = score
}

function getScore() {
    return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
    setScore(getScore() + 1)
    setImage()
}

function setMonths(months) {
    localStorage.setItem('months', months)
    $months.textContent = months
}

function getMonths() {
    return Number(localStorage.getItem('months')) ?? 0
}

function addOneMonth() {
    setMonths(getMonths() + 1)
}
// Добавить путь до картинки вторым аргументом в setAttribute
function setImage() {

    switch(getScore()) {
        case 0: 
         $circle.setAttribute('src', 'assets/0.png')
          break
      
        case 31:  
        $circle.setAttribute('src', 'assets/1.png')
        addOneMonth();
          break
        
        case 61:  
        $circle.setAttribute('src', 'assets/2.png')
        addOneMonth();
          break

        case 91:  
        $circle.setAttribute('src', 'assets/3.png')
        addOneMonth();
          break

        case 121:  
        $circle.setAttribute('src', 'assets/4.png')
        addOneMonth();
          break

        case 151:  
        $circle.setAttribute('src', 'assets/5.png')
        addOneMonth();
          break

        case 181:  
        $circle.setAttribute('src', 'assets/6.png')
        addOneMonth();
          break

        case 211:  
        $circle.setAttribute('src', 'assets/7.png')
        addOneMonth();
          break

        case 241:  
        $circle.setAttribute('src', 'assets/8.png')
        addOneMonth();
          break
      }
}

// Функция для сброса счётчика
function resetScore() {
    localStorage.clear()
    $score.textContent = 0;
    $months.textContent = 0;
    $circle.setAttribute('src', 'assets/0.png')
}

// Создаём кнопку сброса счётчика
const resetButton = document.createElement('button');
resetButton.textContent = "🔁";
resetButton.addEventListener('click', resetScore);

// Добавляем кнопку к документу
document.querySelector('.header').appendChild(resetButton);

$circle.addEventListener('click', (event) => {
    const rect = $circle.getBoundingClientRect()

    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 50

    const tiltX = (offsetY / rect.height) * DEG
    const tiltY = (offsetX / rect.width) * -DEG

    $circle.style.setProperty('--tiltX', `${tiltX}deg`)
    $circle.style.setProperty('--tiltY', `${tiltY}deg`)

    setTimeout(() => {
        $circle.style.setProperty('--tiltX', `0deg`)
        $circle.style.setProperty('--tiltY', `0deg`)
    }, 300)

    const plusOne = document.createElement('div')
    plusOne.classList.add('plus-one')
    plusOne.textContent = '+1'
    plusOne.style.left = `${event.clientX - rect.left}px`
    plusOne.style.top = `${event.clientY - rect.top}px`

    $circle.parentElement.appendChild(plusOne)

    addOne()

    setTimeout(() => {
        plusOne.remove()
    }, 2000)
})

start()
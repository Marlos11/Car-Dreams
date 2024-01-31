const changColors = document.querySelectorAll('.colors-palette li span')
const carSelected = document.querySelector('.section-car-img img ')

let colorSelected='vm'

changColors.forEach(li =>
    li.addEventListener('click', () => {

       
        changColors.forEach(span => {

            span.classList.remove('selected')
            console.log(changColors,'cores')
        })

        li.classList.add('selected') 
      console.log(colorSelected = li.classList,)
         colorSelected = li.classList[0]
         handleShowCar()
   
 
    })
)

function handleShowCar(){
    carSelected.src = `./assets/audi-rs-etronGT-${colorSelected}.png`
  
}
console.log(colorSelected)

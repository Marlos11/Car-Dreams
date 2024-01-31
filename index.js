const changColors = document.querySelectorAll('.colors-palette li span')
const carSelected = document.querySelector('.section-car-img img ')
const carInfo = document.getElementById('info')
const showCar = document.getElementsByClassName('.section-car-img')

function changeInfo(marca){
    if(marca === 'audi'){
        carInfo.innerHTML = 'Com o audi rs e-tron gt a audi traduz a linguagem de design a era da eletricidade.'
        carSelected.src = `./assets/audi-rs-etronGT-${colorSelected}.png`
    

      
        
    }else if(marca ==='ferrari'){
        carInfo.innerHTML = 'Ferrari SF90 Stradale Consumo de combustível em ciclo combinado: 6,1 l/100 km - Consumo de energia em ciclo combinado: 123 kWh/100 km - Emissões de CO2 em ciclo combinado: 154 g/km - Classe de eficiência de CO2: C '
        carSelected.src = `./assets/ferrari-sfo90-am.png`
     
    }else if(marca === 'tesla'){
        carInfo.innerHTML = 'Construído para distância Vá até 341 milhas (est. EPA) com uma única carga com estilo exterior atualizado e otimizado para máxima aerodinâmica.'
    } 


   

}

let colorSelected='vm'

changColors.forEach(li =>
    li.addEventListener('click', () => {

       
        changColors.forEach(span => {

            span.classList.remove('selected')
           
        })

        li.classList.add('selected') 

         colorSelected = li.classList[0]
     
         handleShowCar()
         showCarSelect()
      
 
    })
)

function handleShowCar(){

    carSelected.src = `./assets/audi-rs-etronGT-${colorSelected}.png`

  
  
}
function showCarSelect(){
   carSelected.src=`${showCar}`
  
} 
 
console.log(changColors)



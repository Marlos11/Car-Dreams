const changColors = document.querySelectorAll('.colors-palette li span')
const carSelected = document.querySelector('.section-car-img img ')
const carInfo = document.getElementById('info')
const changeBackground = document.querySelector('#background-video video')
const carBrands = document.querySelectorAll('.carBrend') 
const title = document.querySelector(".sub-title")

console.log(changeBackground)

let colorSelected = 'vm'





function colors(){

}



function changeInfo(marca) {

    changColors.forEach(li =>
        li.addEventListener('click', () => {
    
    
            changColors.forEach(span => {
    
                span.classList.remove('selected')
    
            })
    
            li.classList.add('selected')
    
            colorSelected = li.classList[0]
           
            carSelected.src = `./assets/${marca}-${colorSelected}.png`;
    
        })
    )
   
    if (marca === 'audi') {
        carInfo.innerHTML = 'Com o audi rs e-tron gt a audi traduz a linguagem de design a era da eletricidade.'
        title.innerHTML = '  Audi Rs E-tronGT'
        carSelected.src = `./assets/${marca}-${colorSelected}.png`;
        changeBackground.src = `./assets/${marca}.mp4`
        console.log(colorSelected)


    } else if (marca === 'ferrari') {
        carInfo.innerHTML = 'Ferrari SF90 Stradale Consumo de combustível em ciclo combinado: 6,1 l/100 km - Consumo de energia em ciclo combinado: 123 kWh/100 km - Emissões de CO2 em ciclo combinado: 154 g/km - Classe de eficiência de CO2: C '
        title.innerHTML = 'Ferrari SF90'
          carSelected.src = `./assets/${marca}-${colorSelected}.png`; 
          changeBackground.src = `./assets/${marca}.mp4`

    } else if (marca === 'tesla') {
        title.innerHTML = 'Model 3 '
        carInfo.innerHTML = 'Construído para distância Vá até 341 milhas (est. EPA) com uma única carga com estilo exterior atualizado e otimizado para máxima aerodinâmica.'
        carSelected.src = `./assets/${marca}-${colorSelected}.png`; 
        changeBackground.src = `./assets/${marca}.mp4`
       
    }
}













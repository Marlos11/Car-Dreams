const changColors = document.querySelectorAll('.colors-palette li span')
const carSelected = document.querySelector('.section-car-img ')
const carInfo = document.getElementById('info')
const showCar = document.querySelector('.section-car-img')
const carBrands = document.querySelectorAll('.carBrend') 



let colorSelected = 'vm'

carBrands.forEach(brand => {
    brand.addEventListener('click', () => {
        const marca = brand.dataset.marca
     changeInfo(marca)
        updateCar() 
    })
})

changColors.forEach(li =>
    li.addEventListener('click', () => {


        changColors.forEach(span => {

            span.classList.remove('selected')

        })

        li.classList.add('selected')

        colorSelected = li.classList[0]
        carSelected.src = `./assets/audi-${colorSelected}.png`;
  

    })
)


function changeInfo(marca) {

    if (marca === 'audi') {
        carInfo.innerHTML = 'Com o audi rs e-tron gt a audi traduz a linguagem de design a era da eletricidade.'
        carSelected.src = `./assets/audi-${colorSelected}.png`;

    } else if (marca === 'ferrari') {
        carInfo.innerHTML = 'Ferrari SF90 Stradale Consumo de combustível em ciclo combinado: 6,1 l/100 km - Consumo de energia em ciclo combinado: 123 kWh/100 km - Emissões de CO2 em ciclo combinado: 154 g/km - Classe de eficiência de CO2: C '
      /*   carSelected.src = `./assets/ferrari-sfo90-${colorSelected}.png`; */

    } else if (marca === 'tesla') {
        carInfo.innerHTML = 'Construído para distância Vá até 341 milhas (est. EPA) com uma única carga com estilo exterior atualizado e otimizado para máxima aerodinâmica.'
    }
}



function updateCar() {
    const selectedBrand = document.querySelector('.carBrand.selected'); 
    if (selectedBrand) {
        const marca = selectedBrand.dataset.marca;
         carSelected.src = `./assets/${marca}-${colorSelected}.png`;
      
       
    }
}











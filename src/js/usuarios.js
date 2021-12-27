import {obtenerUsuarios} from './llamado-api'

const body  = document.body;
let card;

const hacerHtml = () => {
    
    const html = ` <div class="cardsContainer">
   
                        <div id="card">

                        </div>
                    </div>
                    <div class="botones-paginado">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>`;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );
    card=document.getElementById('card')
   


}
obtenerUsuarios().then(console.log)
const crearCardUsuario = ( usuario ) => {
    const {
        picture: {large},
        name: {first},
        name: {last},
        location: {city},
        location: {state},
        location: {postcode},
        registered: {age}

        } = usuario

    const html = `
    <img class="foto" src="${large}" alt="persona">
    <div class="cardDatos">
        <h3 class="nombre">${first} ${last}</h3>
        <i class="fas fa-filter puesto">Recruitment Consultancy</i>
        <i class="fas fa-map-marker-alt ciudad">${city}, ${state} ${postcode} </i>
        <hr>
        <div>
            <i class="far fa-clock activo">Active since: ${age}Y ago</i>
            <i class="far fa-heart"></i>
        </div>
        
        
    </div>
    `;

    const divCard = document.createElement('div');
    divCard.classList.add('user')
    divCard.innerHTML = html;

    
    card.appendChild(divCard)
    
    
    

}

export const init = async() => {

    hacerHtml();
   

    const usuarios = await obtenerUsuarios();
    usuarios.forEach(crearCardUsuario);

}

const inputBuscar =document.getElementById('buscar')
const tarjeta = document.getElementsByClassName('user')

inputBuscar.addEventListener('keyup', (e)=> {
    let texto= e.target.value;
    
    let er= new RegExp(texto, "i");
    for (let i=0; i<tarjeta.length; i++) {
        let valor= tarjeta[i];
    
        if(er.test(valor.innerText)) {
            valor.classList.remove('ocultar')
        }else {
            console.log(valor)
            valor.classList.add('ocultar')
        }
    }


})



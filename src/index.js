import {obtenerUsuarios} from './js/llamado-api'
import './styles.css';
import {init} from './js/usuarios.js'

obtenerUsuarios().then(console.log)

init()
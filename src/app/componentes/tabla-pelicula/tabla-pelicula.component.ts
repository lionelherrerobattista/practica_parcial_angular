import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  listadoPeliculas:Peliculas[] = [
    {id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1976', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rock1.jpg' },
    {id: 2, nombre: "Rocky II", tipo:'otros', fechaDeEstreno:'01/01/1979', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky2.jpg' },
    {id: 3, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1982', cantidadDePublico: 2000000, fotoDePelicula:'/assets/img/rocky3.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

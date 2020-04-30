import { Component, OnInit } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  listadoPeliculas:Peliculas[] = [
    {id: 1, nombre: "Rocky I", tipo:'otros', fechaDeEstreno:'01/01/1975', cantidadDePublico: 2000000, fotoDePelicula:'' },
    {id: 1, nombre: "Rocky II", tipo:'otros', fechaDeEstreno:'01/01/1975', cantidadDePublico: 2000000, fotoDePelicula:'' },
    {id: 1, nombre: "Rocky III", tipo:'otros', fechaDeEstreno:'01/01/1975', cantidadDePublico: 2000000, fotoDePelicula:'' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

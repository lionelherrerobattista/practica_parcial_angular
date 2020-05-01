import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  peliculaParaMostrar:Peliculas;


  constructor() { }

  ngOnInit(): void {
  }

  TomarPeliculaParaMostrar(pelicula:Peliculas) {

    this.peliculaParaMostrar = pelicula;
  }



}

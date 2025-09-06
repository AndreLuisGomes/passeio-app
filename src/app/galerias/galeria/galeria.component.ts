import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Form } from '@angular/forms';
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{

  lugares : Lugar[] = []
  categorias : Categoria[] = []
  nomeFiltro: string = ''
<<<<<<< HEAD
  categoriaFiltro: string = '0'
  localizacaoFiltro: string = ''
  avaliacaoFiltro: string = '0'

  constructor(
    private router : Router,
=======
  categoriaFiltro: string = ''

  constructor(
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
    private categoriaService : CategoriaService,
    private lugarService : LugarService
  ){}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe((c) => this.categorias = c);
    this.lugarService.obterTodos().subscribe((l) => this.lugares = l);
  }

  getTotalEstrelas(lugar: Lugar) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0))
  }

<<<<<<< HEAD
  preparaEditar(id: string){
    this.router.navigate( ['/cadastro'], {queryParams: {"id" : id} } )
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro, this.localizacaoFiltro,this.avaliacaoFiltro)
=======
  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
      .subscribe((l) => this.lugares = l)
  }
}

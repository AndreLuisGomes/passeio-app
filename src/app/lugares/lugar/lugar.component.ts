import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrl: './lugar.component.scss',
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private service: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
<<<<<<< HEAD
      categoria: new FormControl('0', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('0', Validators.required),
=======
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl(null, Validators.required),
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
    });
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => {
        console.log('.'), (this.categorias = listaCategorias);
      },
      error: (error) => console.error(error),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log('Cadastrado com sucesso: ', lugar);
          this.camposForm.reset();
        },
        error: (erro) => console.error('Ocorreu um erro: ', erro),
      });
    }
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
<<<<<<< HEAD
    return !!(
      campo &&
      campo.touched &&
      (campo.value === "0" || campo.errors?.['required'])
    );
=======
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
>>>>>>> d3b5a59a17b132aee0bf4fe57b196b6ad9f939d0
  }
}

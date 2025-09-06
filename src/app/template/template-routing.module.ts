import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    data: {titulo: 'Login', subTitulo: 'Faça Login para continuar'},
    children: [
      {
        path: 'categorias',
        loadChildren: () =>
          import('../categorias/categorias.module').then(
            (m) => m.CategoriasModule
          ),
        pathMatch: 'full',
        data: {
          titulo: 'Categorias',
          subTitulo: 'Gerencie uma nova Categoria',
        },
      },
      {
        path: 'lugares',
        loadChildren: () =>
          import('../lugares/lugares.module').then((m) => m.LugaresModule),
        pathMatch: 'full',
        data: { titulo: 'Lugares', subTitulo: 'Gerencie os lugares' },
      },
      {
        path: 'galerias',
        loadChildren: () =>
          import('../galerias/galerias.module').then((m) => m.GaleriasModule),
        pathMatch: 'full',
        data: { titulo: 'Lista de Lugares', subTitulo: 'Descubra os melhores lugares' },
      },
      {
        path: 'galerias',
        loadChildren: () =>
          import('../galerias/galerias.module').then((m) => m.GaleriasModule),
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplateRoutingModule {}

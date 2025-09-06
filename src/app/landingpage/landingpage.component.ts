import { Component, Query } from '@angular/core';
import { Profile } from './profile.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined = { email: "", name: "André" };

  constructor(private router: Router){

  }

  navegar(){
    this.router.navigate(['/paginas/galerias'])
  }

  logarComGoogle(){

  }

  isLoggedIn(){
    return !!this.profile;
  }
}

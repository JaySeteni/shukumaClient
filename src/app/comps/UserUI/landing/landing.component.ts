import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {


  constructor(private route:Router) { }

  mShowLogin(){
    setTimeout(() => {
      this.route.navigate(["userhome"]);
    }, 500)
  }

}

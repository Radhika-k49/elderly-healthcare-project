import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected title = 'elderly-healthcare';
  login!:boolean;
  join = false;
  loginStart(loginValue:boolean)
  {
     this.login=loginValue;
  }
  loginCancel(loginOffValue:boolean)
  {
    this.login=loginOffValue;
  }
  joinUs()
  {
     this.join=true;
  }
  cancelJoin()
  { 
    this.join=false;
  }
}

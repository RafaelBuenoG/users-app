import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private userService: UsersService) {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.userService.getAll().subscribe(dados =>{
      console.log(dados)
    });
  }
}

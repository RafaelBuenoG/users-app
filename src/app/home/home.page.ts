import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/User.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {

  listaUsers: User[] = [];

  constructor(private userService: UsersService, private router: Router ) {

  }

  ionViewWillEnter() {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.userService.getAll().subscribe(dados =>{
      console.log(dados)
    });
  }

  alterarUser(id: number){
    this.router.navigateByUrl(`/alterar-user/${id}`);
  }

  excluirUser(id: number){

  }
}

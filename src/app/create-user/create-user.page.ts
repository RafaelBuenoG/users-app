import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/User.model';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CreateUserPage implements OnInit {

  first_name = '';
  last_name = '';
  email = '';
  avatar = '';

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  salvar() {
      const user: User = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        avatar: this.avatar

      }
      this.usersService.create(user).subscribe(dados => {
        alert("User inserido com sucesso" + dados.id)
        this.router.navigateByUrl('/home');
      })
  }
}

import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from './../auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  profile: any;

  constructor() {
    this.profile = JSON.parse(localStorage.getItem("currentUser"));

  }

  
  ngOnInit() {
    var imagem = document.querySelector(".imagem");
    imagem.addEventListener("click", function () {
      alert("Esta funcionalidade ainda não foi implementada.");
    });

    var botaoFeedback = document.querySelector(".enviarFeedback");
    var textArea = document.querySelector(".textArea");


    botaoFeedback.addEventListener("click", function () {
      alert("Sugestão enviada com sucesso!");
      textArea.textContent="lae,,e";
     
    });

  }

}

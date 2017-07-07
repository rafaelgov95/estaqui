import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder
    ,  Validators
 } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { LoginUser } from '../_modelos/login-user';
// import { forbiddenNameValidator } from '../shared/directivas/forbidden-name.directive';
import { AuthenticationService } from '../shared/services/autenticacao.service';
import { AlertService } from '../shared/services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    loginActive = true;
    legout=true;
    UserForm: FormGroup;
    user = new LoginUser(18, 'Dr. WhatIsHisName', 'senha');
    submitted = false;
    active = true;

  constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
        
    ) {  
      this.user = new LoginUser(0, '', '');
    }

 

 
  onSubmit() {
    this.submitted = true;
    this.user = this.UserForm.value;
  }

  addUser() {
    // this.user = new LoginUser(42, '', '');
    this.buildForm();

    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  
  AlertaErro(){
    setTimeout(() => this.active = true, 0);
  }
 
   ngOnInit(): void {
    this.buildForm();
        // reset login status
    this.authenticationService.logout();

        // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
  }
   buildForm(): void {
    this.UserForm = this.fb.group({
      'email': [this.user.email, [
          Validators.required,
          Validators.minLength(4),
          // Validators.maxLength(24)
        //   ,
        //   forbiddenNameValidator(/bob/i)
        ]
      ],
      'senha': [this.user.senha,[
            Validators.required,
            Validators.minLength(4)
           ]]
    //   ,
    //   'power':    [this.hero.power, Validators.required]
    });
    this.UserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

   onValueChanged(data?: any) {
    if (!this.UserForm) { return; }
    const form = this.UserForm;
    this.model.email=form.get('email').value    
    this.model.senha=form.get('senha').value 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
   formErrors = {
    'email': '',
    'senha': ''
  };

  validationMessages = {
    'email': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.'
    //   'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'senha': {
      'required': 'Power is required.'
    }
  };
    
  









    // //  @Output() legout=false;
    // //  @Output() modouValor = new EventEmitter();

    login() {
        
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.senha)
            .subscribe(
                data => {
                    console.log(this.loginActive);
                     localStorage.setItem('isLoggedin', 'true');
                     this.router.navigate([this.returnUrl]);
                             
                             
                                
             },
                error => {
                    console.log('Erro');
                    this.alertService.error(error);
                        setTimeout(() => this.active = true, 0);

                });
    }
}

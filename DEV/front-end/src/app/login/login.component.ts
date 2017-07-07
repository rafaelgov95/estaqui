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

    alert =true;
    returnUrl: string;
    UserForm: FormGroup;
    user:LoginUser;
    submitted = false;

  constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
        
    ) {  
      this.user = new LoginUser(0, '', '');
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
        ]
      ],
      'senha': [this.user.senha,[
            Validators.required,
            Validators.minLength(4)
           ]]
    });

    this.UserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); 
  }

   onValueChanged(data?: any) {
    if (!this.UserForm) { return; }
    const form = this.UserForm;
    
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
    },
    'senha': {
      'required': 'Power is required.'
    }
  };

    login() {
 
        this.authenticationService.login(this.UserForm.get('email').value, this.UserForm.get('senha').value)
            .subscribe(
                data => {
                     localStorage.setItem('isLoggedin', 'true');
                     this.router.navigate([this.returnUrl]);
                             
                             
                                
             },
                error => {
                    console.log('Erro');
                    this.alertService.error(error);
                    this.alert=false;
                    setTimeout(() => this.alert = true, 10000);

                });
    }
}

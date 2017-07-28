import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacionamento } from './../../../../_modelos/estacionamento';
import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-cadastrar',
    templateUrl: './cadastrar.component.html',
    styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent {
    emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    closeResult: string;
    CadastraForm: FormGroup;
    estacionamento: Estacionamento;
    constructor(private fb: FormBuilder,
        private modalService: NgbModal
    ) {
        this.estacionamento = new Estacionamento('', '', '', '', '', 1, 1, true);
        console.log(this.estacionamento);
    }
    ngOnInit(): void {
        this.buildForm();
        // this.alertService.getMessage();
        // reset login status
        // this.loginService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
    }


    buildForm(): void {
        this.CadastraForm = this.fb.group({
            'nome': [this.estacionamento.nome, [
                Validators.required,
                Validators.minLength(4)
                // Validators.pattern(this.emailRegex)
            ]
            ],
            'nome_fantasia': [this.estacionamento.nome_fantasia, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'cpf': [this.estacionamento.cnpj, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'lat': [this.estacionamento.lat, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'lng': [this.estacionamento.lng, [
                Validators.required,
                Validators.minLength(4)
            ]]


        });

        this.CadastraForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

    }

    onValueChanged(data?: any) {
        if (!this.CadastraForm) { return; }
        const form = this.CadastraForm;
        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    console.log(key)
                    this.formErrors[field] += messages[key] + ' ';
                }
            }

        }
    }

    formErrors = {
        'nome': '',
        'nome_fantasia': '',
        'cpf': '',
        'lat': '',
        'lng': ''
    };



    validationMessages = {
        'nome': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 4 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        }

    };
    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    openEndereco(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }



    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}

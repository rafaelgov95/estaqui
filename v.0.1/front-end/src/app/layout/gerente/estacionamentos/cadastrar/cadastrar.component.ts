import { GoogleComponent } from './../google/google.component';
import { FormControl } from '@angular/forms';
import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacionamento } from './../../../../_modelos/estacionamento';
import { Component, Output, EventEmitter } from '@angular/core';
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


    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;

    constructor(private fb: FormBuilder,
        private modalService: NgbModal,
        private service: EstacionamentoService,

    ) {
        
        this.estacionamento = new Estacionamento('', '', '', '', '', 0, 0, true);
        console.log(this.estacionamento);
    }
    ngOnInit(): void {
        this.buildForm();
        console.log("Meu teste",this.CadastraForm.value)


    }

    buildForm(): void {
        this.CadastraForm = this.fb.group({
            'nome': [this.estacionamento.nome, [
                Validators.required,
                Validators.minLength(4)
            ]],
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
        console.log(this.CadastraForm);
        console.log(this.estacionamento.lat)
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
        },
        'nome_fantasia': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 4 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        },
        'cpf': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 4 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        },
        'lat': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 4 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        },
        'lng': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 4 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        }

    };

    OnSubmit(event) {
        var test = this.service.create(event).subscribe(data => {
            console.log("Deu Bom!!")
        }, erro => {
            console.log("Deu ruim!!")
        });
    }

    open(content) {
        this.buildForm();
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

    Auto(event) {
        this.estacionamento.localizacao.lat = event[0];
        this.estacionamento.localizacao.lng = event[1];
        this.CadastraForm.get("lat").setValue(event[0]);
        this.CadastraForm.get("lng").setValue(event[1]);
        console.log("Ta chegando", this.CadastraForm.get("lat"),this.CadastraForm.get("lng"))
    }

}

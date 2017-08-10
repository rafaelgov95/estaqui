import { EmitterDelivery } from './../../../../shared/services/EmitterDelivery/EmitterDelivery';
import { Observable } from 'rxjs';
import { GoogleComponent } from './../google/google.component';
import { FormControl } from '@angular/forms';
import { EstacionamentoService } from './../../../../shared/services/estacionamento/EstacionamentoService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estacionamento } from './../../../../_modelos/estacionamento';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';



@Component({
    selector: 'estacionamentos-gerenciar',
    templateUrl: './gerenciar.component.html',
    styleUrls: ['./gerenciar.component.scss']
})
export class GerenciarComponent {
    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    public zoom: number;

    @Output() sub = new EventEmitter();
    @ViewChild("search")
    public searchElementRef: ElementRef;


    emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    cpfRegex = '[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}';
    closeResult: string;
    float = "[+-]?([0-9]*[.])?[0-9]+"
    CadastraForm: FormGroup;
    estacionamento: Estacionamento;


    constructor(private fb: FormBuilder,
        private modalService: NgbModal,
        private service: EstacionamentoService,
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone
    ) {
        this.estacionamento = new Estacionamento('', '', '', '', '', this.latitude, this.longitude, true);
        console.log(this.estacionamento);
    }
    ngOnInit(): void {
        this.buildForm();
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;


        this.searchControl = new FormControl();


        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ["address"]

            }

            );
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 12;

                });
            });
        });
    }


    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }



    buildForm(): void {
        this.CadastraForm = this.fb.group({
            'nome': [this.estacionamento.nome, [
                Validators.required,
                Validators.minLength(8)
            ]],
            'nome_fantasia': [this.estacionamento.nome_fantasia, [
                Validators.required,
                Validators.minLength(8)
            ]],
            'cnpj': [this.estacionamento.cnpj, [
                Validators.required,
                Validators.pattern(this.cpfRegex),

            ]],
            'lat': [this.estacionamento.lat, [
                Validators.required,
                Validators.minLength(4),

                Validators.pattern(this.float)
            ]],
            'lng': [this.estacionamento.lng, [
                Validators.required,
                Validators.minLength(4),
                Validators.pattern(this.float)
            ]]


        });

        this.CadastraForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

    }

    onValueChanged(data?: any) {
        if (!this.CadastraForm) { return; }
        const form = this.CadastraForm;
        form.value.lng = this.longitude;
        form.value.lat = this.latitude;

        this.estacionamento.lat = this.latitude;
        this.estacionamento.lng = this.longitude;



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
        'cnpj': '',
        'lat': '',
        'lng': ''
    };



    validationMessages = {
        'nome': {
            'required': 'Nome de usuário requerido',
            'minlength': 'Nome tem que possuir mais de 8 caracteres',
            // 'pattern': 'Formato de email esta incorreto'
        },
        'nome_fantasia': {
            'required': 'Nome Fantasma requerido',
            'minlength': 'Nome Fantasma tem que possuir mais de 8 caracteres',
        },
        'cnpj': {
            'required': 'CNPJ de Firma requerido',
            'pattern': 'CNPJ Inválido.',
            'minlength': ''
        },
        'lat': {
            'required': 'Latitude do local requerido',
            'minlength': 'Nome tem que possuir mais de 5 caracteres',
            'pattern': 'Lat inválida',
            // 'pattern': 'Formato de email esta incorreto'
        },
        'lng': {
            'required': 'Longitude do local requerido',
            'minlength': 'Nome tem que possuir mais de 5 caracteres',
            'pattern': 'Lng inválida',

            // 'pattern': 'Formato de email esta incorreto'
        }

    };

    OnSubmit(event) {
        let commentOperation: Observable<Estacionamento[]>;

        commentOperation = this.service.create(event)
        
        commentOperation.subscribe(
                                estacionamento => {
                                    this.service.EmitterDelivery.emit(estacionamento);
                                   
                                }, 
                                err => {
                                    console.log(err);
                                });
    
                            this.sub.emit(false)
    }
 ngOnChanges() {
        // // Listen to the 'edit'emitted event so as populate the model
        // // with the event payload
        // EmitterDelivery.get(this.estacionamento._id).subscribe((comment:Estacionamento) => {
        //     this.estacionamento = comment
        // });
    }



}

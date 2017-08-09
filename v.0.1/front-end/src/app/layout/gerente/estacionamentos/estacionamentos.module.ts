import { CadastrarModule } from './cadastrar/cadastrar.module';
import { EstacionamentoService } from './../../../shared/services/estacionamento/EstacionamentoService.service';
import { EstacionamentosRoutingModule } from './estacionamentos-routing.module';
import { EstacionamentosComponent } from './estacionamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdTableModule, MdPaginatorModule, MdInputModule, MdMenuModule
} from '@angular/material'
import { CdkTableModule } from '@angular/cdk';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdListModule,
  MdNativeDateModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  StyleModule
} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../../shared';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdListModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    StyleModule,
    CadastrarModule,
    CommonModule,
    EstacionamentosRoutingModule,
    PageHeaderModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MdTableModule,
    MdInputModule,
    MdMenuModule,

    CdkTableModule, MdPaginatorModule
  ], providers: [EstacionamentoService],
  declarations: [
    EstacionamentosComponent,
    TableComponent],
  exports: [
    MdMenuModule,
    CadastrarModule,
    EstacionamentosComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule,
    MdInputModule,
    CdkTableModule, MdPaginatorModule, MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdListModule,
    MdNativeDateModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    StyleModule]
})
export class EstacionamentosModule { }

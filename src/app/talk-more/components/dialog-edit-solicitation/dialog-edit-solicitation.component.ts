import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { HttpTalkMoreService } from 'src/app/core/http-talkmore.service';
import Swal from 'sweetalert2';
import { TalkMore } from '../../shared/talk-more.model';

@Component({
  selector: 'app-dialog-edit-solicitation',
  templateUrl: './dialog-edit-solicitation.component.html',
  styleUrls: ['./dialog-edit-solicitation.component.sass']
})
export class DialogEditSolicitationComponent implements OnInit, OnDestroy
{
  public isLoading: boolean;
  public talkMore = new TalkMore();
  public dropdownPlans: Array<string> = ['FaleMais 30', 'FaleMais 60', 'FaleMais 120'];
  public talkMoreForm: FormGroup;
  private subscripitons = new Subscription();
  constructor(private httpTalkMoreService: HttpTalkMoreService, 
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<DialogEditSolicitationComponent>,
              @Inject(MAT_DIALOG_DATA) data)
              {
                this.talkMore._id = data.id;
              }

  ngOnInit(): void
  {
    this.getTalkMoreById();
  }

  ngOnDestroy(): void
  {
    if (this.subscripitons)
    {
      this.subscripitons.unsubscribe();
    }
  }

  public getTalkMoreById(): void
  {
    this.isLoading = true;

    this.subscripitons.add(this.httpTalkMoreService.getById(this.talkMore._id).subscribe(resp =>
    {
      if (resp)
      {
        this.talkMore = resp as TalkMore;
      }
      this.isLoading = false;
    }));
  }

  public editTalkMoreSolicitation(): void
  {
    this.talkMoreForm = new FormGroup({
      'empresa': new FormControl(this.talkMore.empresa, [Validators.required]),
      'cnpj': new FormControl(this.talkMore.cnpj, [Validators.required, Validators.minLength(14)]),
      'plano': new FormControl(this.talkMore.plano, [Validators.required]),
      'tarifa': new FormControl(this.talkMore.tarifa, [Validators.required]),
      'minutos': new FormControl(this.talkMore.minutos, [Validators.required]),
      'valorPlano': new FormControl(this.talkMore.valorPlano, [Validators.required]),
      'dataAdesao': new FormControl(this.talkMore.dataAdesao, [Validators.required, Validators.minLength(8)])
    });

    if (this.talkMoreForm.invalid)
    {
        this.showWarningAlert();
        return;
    }

    this.parseFieldsNumber();
    this.validateDataAdesao();

    this.subscripitons.add(this.httpTalkMoreService.put(this.talkMore).subscribe(resp =>
    {
      if (resp)
      {
        this.showSuccessAlert();
      }
    }));
  }

  public validateDataAdesao(): void
  {
    const dataAdesao = `${this.talkMore.dataAdesao.toString().substr(0, 2)}-${this.talkMore.dataAdesao.toString().substr(2, 2)}-${this.talkMore.dataAdesao.toString().substr(4, 4)}`;
    const dateParts = dataAdesao.split('-');
    this.talkMore.dataAdesao = new Date(Number(dateParts[0]), Number(dateParts[1]) - 1, Number(dateParts[2]));
  }

  public parseFieldsNumber(): void
  {
    this.talkMore.minutos = Number(this.talkMore.minutos);
    this.talkMore.tarifa = Number(this.talkMore.tarifa);
    this.talkMore.valorPlano = Number(this.talkMore.valorPlano);
  }

  public showWarningAlert(): void
  {
    Swal.fire('Warning', 'Valores do formulário estão inválidos.', 'warning');
  }

  public showSuccessAlert(): void
  {
    Swal.fire('Success', 'Solicitação inserida com sucesso.', 'success');
  }

}

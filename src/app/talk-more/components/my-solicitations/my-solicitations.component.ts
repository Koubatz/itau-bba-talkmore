import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { HttpTalkMoreService } from 'src/app/core/http-talkmore.service';
import { TalkMore } from '../../shared/talk-more.model';
import { DialogEditSolicitationComponent } from '../dialog-edit-solicitation/dialog-edit-solicitation.component';

@Component({
  selector: 'app-my-solicitations',
  templateUrl: './my-solicitations.component.html',
  styleUrls: ['./my-solicitations.component.sass'],
})
export class MySolicitationsComponent implements OnInit, OnDestroy
{
  public isLoading: boolean;
  public talkMoreList: Array<TalkMore>;
  private subscripitons = new Subscription();
  public displayedColumns = ['id', 'empresa', 'plano', 'tarifa', 'minutos', 'valorPlano', 'dataAdesao', 'dataEnvio', 'acao'];
  constructor(private httpTalkMoreService: HttpTalkMoreService, private dialog: MatDialog) {}

  ngOnInit(): void
  {
    this.getAllTalkMore();
  }

  ngOnDestroy(): void
  {
    if (this.subscripitons)
    {
      this.subscripitons.unsubscribe();
    }
  }

  public getAllTalkMore(): void
  {
    this.isLoading = true;
    const subGetAll = this.subscripitons.add(this.httpTalkMoreService.getAll().subscribe(resp =>
    {
      this.talkMoreList = resp as Array<TalkMore>;
      if (this.talkMoreList)
      {
        this.talkMoreList.map(talkMore =>
        {
          talkMore.solicitacaoId = talkMore._id.slice(20, 24);
        });
      }

      this.isLoading = false;
      this.subscripitons.remove(subGetAll);
    }));
  }

  public openDialogEditSolicitation(talkMoreId: string): void
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {id: talkMoreId};

    const dialogRef = this.dialog.open(DialogEditSolicitationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => this.getAllTalkMore());
  }

  public removeTalkMoreSolicitation(talkMoreId: string): void
  {
    const subDelete = this.subscripitons.add(this.httpTalkMoreService.delete(talkMoreId).subscribe(resp =>
    {
      if (resp)
      {
        this.subscripitons.remove(subDelete);
        this.getAllTalkMore();
        this.isLoading = false;
      }
    }));
  }
}


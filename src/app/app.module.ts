import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpTalkMoreService } from './core/http-talkmore.service';
import { DialogEditSolicitationComponent } from './talk-more/components/dialog-edit-solicitation/dialog-edit-solicitation.component';
import { HeaderPageComponent } from './talk-more/components/header-page/header-page.component';
import { MySolicitationsComponent } from './talk-more/components/my-solicitations/my-solicitations.component';
import { NewSolicitationComponent } from './talk-more/components/new-solicitation/new-solicitation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    NewSolicitationComponent,
    MySolicitationsComponent,
    DialogEditSolicitationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    HttpTalkMoreService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

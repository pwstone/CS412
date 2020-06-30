import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TitleDataComponent } from './title-data/title-data.component';
import { DescriptionDataComponent } from './description-data/description-data.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleDataComponent,
    DescriptionDataComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

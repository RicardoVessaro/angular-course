import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { NameSortPipe } from './name-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    NameSortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

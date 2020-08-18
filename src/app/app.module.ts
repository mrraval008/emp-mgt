import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './component/emp-list/emp-list.component';
import { EmpDetailComponent } from './component/emp-detail/emp-detail.component';

import { StoreModule } from '@ngrx/store';
import * as fromApp from  './store/app.reducer';
import { EmpCardComponent } from './component/emp-card/emp-card.component';
import { WithLoadingPipe } from './pipe/with-loading.pipe';
import { LoaderComponent } from './component/loader/loader.component';
import { ErrorComponent } from './component/error/error.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe'
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpDetailComponent,
    EmpCardComponent,
    WithLoadingPipe,
    LoaderComponent,
    ErrorComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

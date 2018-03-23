import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {UsersEffects} from './users/store/effects/users.effects';
import {metaReducers, reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([ ]),

    // StoreModule.forRoot(reducers),
    // EffectsModule.forRoot([UsersEffects]),

    StoreDevtoolsModule.instrument({}),
    NgbModule.forRoot(),
    UsersModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

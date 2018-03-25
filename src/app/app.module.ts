import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';

import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {UsersEffects} from './users/store/effects/users.effects';
import {metaReducers, reducers} from './store/reducers/index';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './store/reducers/router.reducer';
import {effects} from './store/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }), // TODO: add meta reducer
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),
    NgbModule.forRoot(),
    UsersModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: RouterStateSerializer, useClass: CustomSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

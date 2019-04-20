import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { ServicesModule } from './modules/services.module';
import { ComponentsModule } from './modules/components.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      ServicesModule,
      ComponentsModule,
      AppRoutingModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  exports: [
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})

export class MaterialModule {}

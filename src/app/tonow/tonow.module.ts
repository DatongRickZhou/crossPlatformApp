import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonowPipe } from '../tonow.pipe';

// This module is to allow the tonow pipe to be imported into modules
@NgModule({
  declarations: [TonowPipe],
  imports: [
    CommonModule
  ],
  exports: [TonowPipe]
})
export class TonowModule { 
  static forRoot() {
    return {
        ngModule: TonowModule,
        providers: [],
    };
  }
}

import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TonowPipe } from '../tonow.pipe';
// This module is to allow the tonow pipe to be imported into modules
var TonowModule = /** @class */ (function () {
    function TonowModule() {
    }
    TonowModule_1 = TonowModule;
    TonowModule.forRoot = function () {
        return {
            ngModule: TonowModule_1,
            providers: [],
        };
    };
    var TonowModule_1;
    TonowModule = TonowModule_1 = tslib_1.__decorate([
        NgModule({
            declarations: [TonowPipe],
            imports: [
                CommonModule
            ],
            exports: [TonowPipe]
        })
    ], TonowModule);
    return TonowModule;
}());
export { TonowModule };
//# sourceMappingURL=tonow.module.js.map
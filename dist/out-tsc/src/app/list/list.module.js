import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ListPage } from './list.page';
import { TonowModule } from '../tonow/tonow.module';
var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                TonowModule.forRoot(),
                RouterModule.forChild([
                    {
                        path: '',
                        component: ListPage
                    }
                ])
            ],
            declarations: [ListPage]
        })
    ], ListPageModule);
    return ListPageModule;
}());
export { ListPageModule };
//# sourceMappingURL=list.module.js.map
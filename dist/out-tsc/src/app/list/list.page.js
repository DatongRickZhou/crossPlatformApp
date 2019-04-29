import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { StorageService } from '../storage.service';
import { Validators, FormBuilder } from '@angular/forms';
import { IonItemSliding } from '@ionic/angular';
var ListPage = /** @class */ (function () {
    function ListPage(storage, formBuilder) {
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.todoList = [];
    }
    ListPage.prototype.addnewItem = function () {
    };
    ListPage.prototype.deleteFromList = function () {
    };
    ListPage.prototype.ngOnInit = function () {
        this.todoForm = this.formBuilder.group({
            todo: ['', [Validators.required, Validators.minLength(1)]]
        });
        this.loadTodoList();
    };
    ListPage.prototype.loadTodoList = function () {
        var _this = this;
        if (!this.itemsSub) {
            this.itemsSub = this.storage.list$.subscribe(function (listValues) {
                _this.todoList = listValues.filter(function (item) {
                    if (item.status == false) {
                        return item;
                    }
                });
                _this.storage.sortList(_this.todoList, 'id');
            });
        }
    };
    ListPage.prototype.addItem = function (name) {
        if (name.length >= 1) {
            this.storage.addItem(name);
            this.todoForm.reset();
        }
    };
    ListPage.prototype.toggleStatus = function (id) {
        this.storage.toggleItemStatus(id)
            .then(function (response) {
            if (response == true) {
                // success
            }
        })
            .catch(function (error) { console.log(error); });
    };
    tslib_1.__decorate([
        ViewChild(IonItemSliding),
        tslib_1.__metadata("design:type", IonItemSliding)
    ], ListPage.prototype, "slider", void 0);
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'list.page.html',
            styleUrls: ['list.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            FormBuilder])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map
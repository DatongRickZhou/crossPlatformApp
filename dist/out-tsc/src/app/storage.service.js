import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var StorageService = /** @class */ (function () {
    function StorageService() {
        var _this = this;
        this.list = [];
        this.list$ = new BehaviorSubject(this.list);
        this.listKey = 'item';
        this.readList()
            .then(function (data) {
            _this.list = data;
            _this.list$.next(_this.list);
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    //filter items by status
    StorageService.prototype.getFilteredList = function (status) {
        var data = this.list.filter(function (item) {
            return item.status == status;
        });
        return data;
    };
    StorageService.prototype.sortList = function (data, sortBy) {
        // assuming data is homogenous (all same type)
        // get keys of the first item
        var objKeys = Object.keys(data[0]);
        var sortKey = [];
        if (objKeys.length) {
            //find a matching key by filtering
            sortKey = objKeys.filter(function (objKey) {
                if (objKey == sortBy) {
                    return objKey;
                }
            });
            if (sortKey.length == 1) {
                data.sort(function (item1, item2) {
                    return item2[sortKey[0]] - item1[sortKey[0]];
                });
            }
        }
    };
    StorageService.prototype.addItem = function (name) {
        var item = { name: name, id: new Date().getTime(), done: 0, status: false, reminder: 0 };
        this.list.push(item);
        this.list$.next(this.list);
        this.saveList();
    };
    StorageService.prototype.deleteItem = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.list.forEach(function (item, index) {
                if (item.id == id) {
                    _this.list.splice(index, 1);
                    _this.list$.next(_this.list);
                    resolve(true);
                }
            });
            reject(new Error('item not found'));
        });
    };
    StorageService.prototype.toggleItemStatus = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.list.forEach(function (item, index) {
                if (item.id == id) {
                    if (item.status == false) {
                        item.status = true;
                        item.done = new Date().getTime();
                    }
                    else {
                        item.status = false;
                        item.done = null;
                    }
                    _this.list$.next(_this.list);
                    resolve(true);
                    return;
                }
            });
            _this.saveList();
            resolve(false);
        });
    };
    StorageService.prototype.saveList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                localStorage.setItem(_this.listKey, JSON.stringify(_this.list));
                if (localStorage.getItem(_this.listKey)) {
                    //data can be read, so resolve true
                    resolve(true);
                }
                else {
                    throw ('data write failed');
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };
    StorageService.prototype.readList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var data = JSON.parse(localStorage.getItem(_this.listKey));
                if (data) {
                    _this.list = data;
                    resolve(data);
                }
                else {
                    throw ('no data for the requested key');
                }
            }
            catch (error) {
                reject(error);
            }
        });
    };
    StorageService.prototype.destroyData = function () {
        this.list = [];
        this.saveList()
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            return false;
        });
        //call list$ to broadcast the new empty array to subscribers
        this.list$.next(this.list);
    };
    StorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map
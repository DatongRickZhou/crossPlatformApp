import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'; //页面跳转
var SignoutPage = /** @class */ (function () {
    function SignoutPage(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignoutPage.prototype.ngOnInit = function () {
    };
    SignoutPage.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.router.navigate(['/home']);
        }).catch();
    };
    SignoutPage = tslib_1.__decorate([
        Component({
            selector: 'app-signout',
            templateUrl: './signout.page.html',
            styleUrls: ['./signout.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService, Router])
    ], SignoutPage);
    return SignoutPage;
}());
export { SignoutPage };
//# sourceMappingURL=signout.page.js.map
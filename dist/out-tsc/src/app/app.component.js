import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth'; //firebase验证
import { StorageService } from 'src/app/storage.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, afAuth, storage) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.afAuth = afAuth;
        this.storage = storage;
        this.appPages = [
            {
                title: 'Home',
                url: '/home',
                icon: 'home'
            },
            {
                title: 'Signup',
                url: '/signup',
                icon: 'person-add'
            },
            {
                title: 'Signin',
                url: '/signin',
                icon: 'person'
            },
            {
                title: 'Signout',
                url: '/signout',
                icon: 'exit'
            }
        ];
        this.initializeApp();
        this.checkAuthStatus();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            document.addEventListener('pause', function () {
                _this.storage.saveList();
            }, false);
            document.addEventListener('resume', function () {
                _this.storage.readList();
            }, false);
        });
    };
    AppComponent.prototype.checkAuthStatus = function () {
        var _this = this;
        //obcerve 持续检测 直到出现不同值
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.user = user;
                //update navigation for logged in user
                _this.appPages = [
                    {
                        title: 'Home',
                        url: '/home',
                        icon: 'home'
                    },
                    {
                        title: 'List',
                        url: '/list',
                        icon: 'list'
                    },
                    {
                        title: 'Signout',
                        url: '/signout',
                        icon: 'exit'
                    }
                ];
            }
            else {
                _this.user = null;
                //update navigation for not authed user
                _this.appPages = [
                    {
                        title: 'Signup',
                        url: '/signup',
                        icon: 'person-add'
                    },
                    {
                        title: 'Signin',
                        url: '/signin',
                        icon: 'person'
                    }
                ];
            }
        });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            AngularFireAuth,
            StorageService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
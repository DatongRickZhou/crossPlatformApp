import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TonowPipe = /** @class */ (function () {
    function TonowPipe() {
    }
    TonowPipe.prototype.transform = function (item) {
        if (item) {
            var now = new Date().getTime();
            var seconds = (now - item) / 1000;
            var dateStr = '';
            if (seconds < 60) {
                dateStr = 'just now';
            }
            else if (seconds >= 60 && seconds <= 24 * 3600) {
                var hours = Math.floor(seconds / 3600);
                var hUnit = hours == 1 ? 'hr' : 'hrs';
                var mins = Math.floor((seconds - (hours * 3600)) / 60);
                var mUnit = mins == 1 ? 'm' : 'mins';
                dateStr = (hours > 0) ? hours + " " + hUnit + " " + mins + " " + mUnit + " ago" : mins + " " + mUnit + " ago";
            }
            else if (seconds >= 24 * 3600) {
                var days = Math.floor(seconds / (3600 * 24));
                var dUnit = days == 1 ? 'd' : 'ds';
                var hours = Math.floor((seconds - (days * 24 * 3600)) / 3600);
                var hUnit = hours == 1 ? 'hr' : 'hrs';
                dateStr = days + " " + dUnit + " " + hours + " " + hUnit + " ago";
            }
            return dateStr;
        }
    };
    TonowPipe = tslib_1.__decorate([
        Pipe({
            name: 'tonow'
        })
    ], TonowPipe);
    return TonowPipe;
}());
export { TonowPipe };
//# sourceMappingURL=tonow.pipe.js.map
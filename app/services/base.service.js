"use strict";
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var BaseService = (function () {
    function BaseService(http) {
        this.http = http;
    }
    BaseService.prototype.getItems = function (url) {
        return this.http.get(url).map(this.extractData).catch(this.handleError);
    };
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BaseService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map
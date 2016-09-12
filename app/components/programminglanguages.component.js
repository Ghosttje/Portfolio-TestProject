"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var programminglanguages_service_1 = require('../services/programminglanguages.service');
var ProgrammingLanguages = (function () {
    function ProgrammingLanguages(programmingLanguagesService) {
        this.programmingLanguagesService = programmingLanguagesService;
    }
    ProgrammingLanguages.prototype.getProgrammingLanguages = function () {
        var _this = this;
        this.programmingLanguagesService.getProgrammingLanguages().subscribe(function (programmingLanguages) {
            var result = [];
            _this.names.forEach(function (name) {
                programmingLanguages.forEach(function (programmingLanguage) {
                    if (programmingLanguage.name == name) {
                        result.push(programmingLanguage);
                    }
                });
            });
            _this.programmingLanguages = result;
        });
    };
    ProgrammingLanguages.prototype.ngOnInit = function () {
        this.getProgrammingLanguages();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ProgrammingLanguages.prototype, "names", void 0);
    ProgrammingLanguages = __decorate([
        core_1.Component({
            selector: 'programming-languages',
            templateUrl: 'app/components/programminglanguages.component.html',
            providers: [programminglanguages_service_1.ProgrammingLanguagesService]
        }), 
        __metadata('design:paramtypes', [programminglanguages_service_1.ProgrammingLanguagesService])
    ], ProgrammingLanguages);
    return ProgrammingLanguages;
}());
exports.ProgrammingLanguages = ProgrammingLanguages;
//# sourceMappingURL=programminglanguages.component.js.map
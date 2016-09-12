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
var projects_service_1 = require('../services/projects.service');
var sorter_logic_1 = require('../logic/sorter.logic');
var ProjectList = (function () {
    function ProjectList(projectsService) {
        this.projectsService = projectsService;
        this.limit = 0;
        this.sorter = new sorter_logic_1.SorterLogic();
    }
    ProjectList.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects().subscribe(function (projects) {
            if (_this.limit == 0) {
                _this.projects = projects.sort(_this.sorter.compareProject);
            }
            else {
                _this.projects = projects.sort(_this.sorter.compareProject).slice(0, _this.limit);
            }
        });
    };
    ProjectList.prototype.ngOnInit = function () {
        this.getProjects();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProjectList.prototype, "limit", void 0);
    ProjectList = __decorate([
        core_1.Component({
            selector: 'projectlist',
            templateUrl: 'app/components/projectlist.component.html',
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], ProjectList);
    return ProjectList;
}());
exports.ProjectList = ProjectList;
//# sourceMappingURL=projectlist.component.js.map
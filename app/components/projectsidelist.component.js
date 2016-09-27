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
var ProjectSideList = (function () {
    function ProjectSideList(projectsService) {
        this.projectsService = projectsService;
        this.notShowId = 0;
        this.sorter = new sorter_logic_1.SorterLogic();
    }
    ProjectSideList.prototype.getProjects = function () {
        var _this = this;
        this.projectsService.getProjects().subscribe(function (projects) {
            var result = [];
            if (_this.notShowId != 0) {
                projects.forEach(function (project) {
                    if (project.id != _this.notShowId) {
                        result.push(project);
                    }
                });
                _this.projects = result.sort(_this.sorter.compareProject);
            }
            else {
                _this.projects = projects.sort(_this.sorter.compareProject);
            }
        });
    };
    ProjectSideList.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.getProjects(); }, 0);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ProjectSideList.prototype, "notShowId", void 0);
    ProjectSideList = __decorate([
        core_1.Component({
            selector: 'projectsidelist',
            templateUrl: 'app/components/projectsidelist.component.html',
            providers: [projects_service_1.ProjectsService]
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService])
    ], ProjectSideList);
    return ProjectSideList;
}());
exports.ProjectSideList = ProjectSideList;
//# sourceMappingURL=projectsidelist.component.js.map
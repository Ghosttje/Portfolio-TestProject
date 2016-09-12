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
var router_1 = require('@angular/router');
var projects_service_1 = require('../services/projects.service');
var ProjectDetail = (function () {
    function ProjectDetail(projectsService, route) {
        this.projectsService = projectsService;
        this.route = route;
        this.slides = [];
        for (var i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    ProjectDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.map(function (params) { return params['id']; }).subscribe(function (id) {
            _this.projectsService.getProjects().subscribe(function (projects) {
                _this.project = projects.filter(function (item) { return item.id == id; })[0];
            });
        });
    };
    ProjectDetail.prototype.addSlide = function () {
        var newWidth = 400 + this.slides.length + 1;
        this.slides.push({
            image: "//placekitten.com/" + newWidth + "/300",
            text: ['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4] + "\n        " + ['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]
        });
    };
    ProjectDetail.prototype.removeSlide = function (index) {
        this.slides.splice(index, 1);
    };
    ProjectDetail = __decorate([
        core_1.Component({
            templateUrl: 'app/pages/projectdetail.page.html',
            providers: [projects_service_1.ProjectsService],
        }), 
        __metadata('design:paramtypes', [projects_service_1.ProjectsService, router_1.ActivatedRoute])
    ], ProjectDetail);
    return ProjectDetail;
}());
exports.ProjectDetail = ProjectDetail;
//# sourceMappingURL=projectdetail.page.js.map
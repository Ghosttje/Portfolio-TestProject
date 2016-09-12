import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';

@Component({
  templateUrl: 'app/pages/projectdetail.page.html',
  providers: [ProjectsService],
})
export class ProjectDetail implements OnInit {
    public project: Project;
    public slides: Array<any> = [];
    
    constructor(private projectsService: ProjectsService, private route: ActivatedRoute) {
        for (let i = 0; i < 4; i++) {
            this.addSlide();
        }
    }
    
    ngOnInit() {
        this.route.params.map(params => params['id']).subscribe((id) => {
            this.projectsService.getProjects().subscribe((projects) => {
                    this.project = projects.filter((item) => item.id == id)[0]
                });
        });
    }

    public addSlide():void {
        let newWidth = 400 + this.slides.length + 1;
        this.slides.push({
        image: `//placekitten.com/${newWidth}/300`,
        text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
        ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
        });
    }

    public removeSlide(index:number):void {
        this.slides.splice(index, 1);
    }
}
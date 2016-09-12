import { Component, Input, OnInit } from '@angular/core';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
import { SorterLogic } from '../logic/sorter.logic'

@Component({
    selector: 'projectlist',
    templateUrl: 'app/components/projectlist.component.html',
    providers: [ProjectsService]
})
export class ProjectList implements OnInit {
    @Input()
    limit: number = 0;
    projects: Project[];
    sorter: SorterLogic;
    
    constructor(private projectsService: ProjectsService) {
        this.sorter = new SorterLogic();
    }
    
    getProjects() {
        this.projectsService.getProjects().subscribe(projects => {
            if (this.limit == 0)
            {
                this.projects = projects.sort(this.sorter.compareProject);
            } else {
                this.projects = projects.sort(this.sorter.compareProject).slice(0, this.limit);
            }
        });
    }
    
    ngOnInit() {
        this.getProjects();
    }
}
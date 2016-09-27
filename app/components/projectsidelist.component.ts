import { Component, Input, OnInit } from '@angular/core';

import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/project';
import { SorterLogic } from '../logic/sorter.logic'

@Component({
    selector: 'projectsidelist',
    templateUrl: 'app/components/projectsidelist.component.html',
    providers: [ProjectsService]
})
export class ProjectSideList implements OnInit {
    @Input()
    notShowId: number = 0;
    projects: Project[];
    sorter: SorterLogic;
    
    constructor(private projectsService: ProjectsService) {
        this.sorter = new SorterLogic();
    }
    
    getProjects() {
        this.projectsService.getProjects().subscribe(projects => {
            var result: Project[] = [];
            if (this.notShowId != 0)
            {
                projects.forEach((project: Project) => {
                    if (project.id != this.notShowId)
                    {
                        result.push(project);
                    }
                });
                this.projects = result.sort(this.sorter.compareProject);
            }
            else
            {
                this.projects = projects.sort(this.sorter.compareProject);
            }
        });
    }
    
    ngOnInit() {
        setTimeout(() => this.getProjects(), 0);
    }
}
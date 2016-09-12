import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service';
import { Project } from '../models/project';

@Injectable()
export class ProjectsService extends BaseService {
    private url = 'json/projects.json';
    
    constructor(http: Http) {
        super(http)
    }
    
    getProjects(): Observable<Project[]> {
        return this.getItems(this.url);
    }
}
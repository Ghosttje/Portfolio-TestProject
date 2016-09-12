import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { BaseService } from './base.service'
import { ProgrammingLanguage } from '../models/programminglanguage';

@Injectable()
export class ProgrammingLanguagesService extends BaseService {
    private url = 'json/programminglanguages.json';
    
    constructor(http: Http) {
        super(http)
    }
    
    getProgrammingLanguages(): Observable<ProgrammingLanguage[]> {
        return this.getItems(this.url);
    }
}
import { Component, Input, OnInit } from '@angular/core';

import { ProgrammingLanguagesService } from '../services/programminglanguages.service';
import { ProgrammingLanguage } from '../models/programmingLanguage';

@Component({
    selector: 'programming-languages',
    templateUrl: 'app/components/programminglanguages.component.html',
    providers: [ProgrammingLanguagesService]  
})
export class ProgrammingLanguages implements OnInit {
    @Input()
    names: string[];
    programmingLanguages: ProgrammingLanguage[];
    
    constructor(private programmingLanguagesService: ProgrammingLanguagesService) {
        
    }
    
    getProgrammingLanguages() {
        this.programmingLanguagesService.getProgrammingLanguages().subscribe(programmingLanguages => {
            var result: ProgrammingLanguage[] = [];
            this.names.forEach((name: string) => {
                programmingLanguages.forEach((programmingLanguage: ProgrammingLanguage) => {
                    if (programmingLanguage.name == name)
                    {
                        result.push(programmingLanguage);
                    }
                })
            })       
            this.programmingLanguages = result;
        });
    }
    
    ngOnInit() {
        this.getProgrammingLanguages();
    }
}
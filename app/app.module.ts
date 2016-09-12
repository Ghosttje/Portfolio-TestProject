import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';

import { ProjectDetail } from './pages/projectdetail.page';

import { ProjectList } from './components/projectlist.component';
import { ProgrammingLanguages } from './components/programminglanguages.component';

@NgModule({
    imports:        [ BrowserModule, routing, HttpModule, Ng2BootstrapModule ],
    declarations:   [ AppComponent, ProjectDetail, ProjectList, ProgrammingLanguages ],
    providers:      [ appRoutingProviders, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
    bootstrap:      [ AppComponent ],
})
export class AppModule {

}
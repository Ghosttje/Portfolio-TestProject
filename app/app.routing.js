"use strict";
var router_1 = require('@angular/router');
var projectdetail_page_1 = require('./pages/projectdetail.page');
var appRoutes = [
    { path: 'projectdetail/:id', component: projectdetail_page_1.ProjectDetail }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
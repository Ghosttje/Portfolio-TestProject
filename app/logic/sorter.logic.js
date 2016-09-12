"use strict";
var SorterLogic = (function () {
    function SorterLogic() {
    }
    SorterLogic.prototype.compareProject = function (projectA, projectB) {
        if (projectA.id > projectB.id)
            return -1;
        else if (projectA.id < projectB.id)
            return 1;
        else
            return 0;
    };
    return SorterLogic;
}());
exports.SorterLogic = SorterLogic;
//# sourceMappingURL=sorter.logic.js.map
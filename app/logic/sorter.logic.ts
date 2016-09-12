
export class SorterLogic {
    compareProject(projectA, projectB): number {
        if (projectA.id > projectB.id)
            return -1;
        else if (projectA.id < projectB.id)
            return 1;
        else 
            return 0;
    }
}
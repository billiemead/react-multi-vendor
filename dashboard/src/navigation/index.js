import { allNavigation } from "./allNavigation";

export const getNavigation = (role) => {

    const finalNavigation = [];

    for (let index = 0; index < allNavigation.length; index++) {
        if (role === allNavigation[index].role) {
            finalNavigation.push(allNavigation[index]);
        }
    }
    return finalNavigation;
};
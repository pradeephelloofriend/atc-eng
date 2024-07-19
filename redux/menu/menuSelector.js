import { createSelector } from 'reselect'
const selectmenu= state => state.menu

export const selectMenuRef= createSelector(
    [selectmenu],
    data => data.ref
);
export const selectTabKey= createSelector(
    [selectmenu],
    data => data.tabKey
);

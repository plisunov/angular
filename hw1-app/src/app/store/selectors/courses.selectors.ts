export const selectStartValue = (state) => state.courses.start;

export const selectEndValue = (state) => state.courses.paging;

export const selectSearchValue = (state) => state.courses.searchString;

export const selectState = (state) => state.courses.courses;

export const selectDataLength = (state) => state.courses.courses.length;

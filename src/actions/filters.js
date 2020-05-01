export const setTextFilter = ({ text = '' } = {}) => ({
    type: 'CHANGE_TEXT_FILTER',
    text,
});

export const sortByAmount = () => ({
    type: 'SORT_By_AMOUNT'
});

export const sortByDate = () => ({
    type: 'SORT_By_DATE'
});

export const setStartDate = (startDate) => ({
    type: 'CHANGE_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'CHANGE_END_DATE',
    endDate
});
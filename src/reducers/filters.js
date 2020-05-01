import moment from 'moment';

const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
export default (state = filtersReducersDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_TEXT_FILTER':
            return { ...state, text: action.text }
        case 'SORT_By_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SORT_By_DATE':
            return { ...state, sortBy: 'date' }
        case 'CHANGE_START_DATE':
            return { ...state, startDate: action.startDate };
        case 'CHANGE_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state;
    }

}

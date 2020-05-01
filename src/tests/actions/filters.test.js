import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters';


test('Shoud generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'CHANGE_START_DATE',
        startDate: moment(0)
    })
});


test('Shoud generate set end date action object', () => {

    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'CHANGE_END_DATE',
        endDate: moment(0)
    })

});

test('should generate text filter', () => {
const textFilter = {text : 'Hi'};
const action = setTextFilter(textFilter);
expect(action).toEqual({
    type: 'CHANGE_TEXT_FILTER',
    ...textFilter
})
});

test('should generate sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_By_AMOUNT'
    })

});

test('should generate sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_By_DATE'
    })


});
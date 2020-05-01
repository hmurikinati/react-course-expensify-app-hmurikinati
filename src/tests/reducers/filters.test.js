import moment from 'moment';
import filterReducer from '../../reducers/filters';

test("Should setup default filter values", () => {
    const defaultState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filterReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual(defaultState);
})

test("Should set sort by to amount", () => {

    const state = filterReducer(undefined, { type: "SORT_By_AMOUNT" })
    expect(state.sortBy).toBe('amount');

})

test("Should set sort by to date", () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    };
    const state = filterReducer(undefined, { type: "SORT_By_DATE" })
    expect(state.sortBy).toBe('date');

})

test("Should set text filter", () => {
    const text = "Hellow world!"
    const action = {
        type: "CHANGE_TEXT_FILTER",
        text
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text);
});
test("Should set start date filter", () => {

    const startDate = moment().startOf('month')
    const action = {
        type: "CHANGE_START_DATE",
        startDate
    }
    const state = filterReducer(undefined, action)
    expect(state.startDate).toBe(startDate);
});
test("Should set end date filter", () => {

    const endDate = moment().endOf('month')
    const action = {
        type: "CHANGE_END_DATE",
        endDate
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toBe(endDate);

});
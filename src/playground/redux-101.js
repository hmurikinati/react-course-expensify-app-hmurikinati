import { createStore } from 'redux'

const incrementCount = ({incrementBy = 1} = {}) => ({ 
    type:'INCREMENT',
    incrementBy
});


const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy

})

const resetCount = ({count = 0}= {}) => ({
    type: 'RESET',
    count
})

const setCount = ({count = 0} = {}) => ({ 
type : 'SET',
count
});

const countReducers = (state = { count: 0 }, action) => {

    switch (action.type) {
        case "INCREMENT":
           
            return { count: state.count + action.incrementBy };
        case "DECREMENT":
            return { count: state.count - action.decrementBy };
        case "SET":
            return { count: action.count };
        case "RESET":
            return { count: 0 };
        default:
            return state;
    }

};

const store = createStore(countReducers)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCount())

store.dispatch(incrementCount({incrementBy: 5}))


store.dispatch(resetCount({count:0}))



store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count: 101}))

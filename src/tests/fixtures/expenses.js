import moment from 'moment';
export default [{
    id : '1',
    description: 'Gum',
    notes : '',
    amount: 2000,
    createdAt : 0
}, {
    id : '2',
    description: 'Rent',
    notes : '',
    amount: 3000,
    createdAt : moment(0).subtract('4', 'days').valueOf()
},{
    id : '3',
    description: 'Credit card',
    notes : '',
    amount: 1000,
    createdAt : moment(0).add('4', 'days').valueOf()
}];
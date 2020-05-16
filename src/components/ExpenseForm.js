import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { Header } from './Header';


import 'react-dates/lib/css/_datepicker.css';
const now = moment();


export default class ExpenseForm extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            description: (props.expense && props.expense.description) ? props.expense.description : '',
            notes: (props.expense  && props.expense.notes) ? props.expense.notes : '',
            amount: (props.expense  && props.expense.amount) ? (props.expense.amount / 100).toString() : '',
            createdAt: ( props.expense && props.expense.createdAt )? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }

    }


    descriptionOnchange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));

    }

    noteOnChange = (e) => {
        const notes = e.target.value;
        this.setState(() => ({ notes }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))

    }
    onSubmit = (e) => {
        e.preventDefault();
       
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please enter Description and AMount' }));
        } else {
            this.setState(() => ({ error: '' }));
           
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                notes: this.state.notes,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render() {
        return (
            <div>
            {/* <Header /> */}
                {this.state.error && <p> {this.state.error} </p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.descriptionOnchange}
                    />

                    <input
                        type='text'
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder='Add a note for your expense (optional)'
                        value={this.state.notes}
                        onChange={this.noteOnChange}
                    />
                    <button>Save Expense</button>
                    
                </form>
            </div>
        )
    }
}
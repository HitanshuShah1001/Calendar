import {Calendar} from 'react-native-calendars';
import React from 'react';
import { useState,useEffect} from 'react';
import './Server';

/*
This component takes care of displaying and hiding the calendar view
It takes calendarviewdata component in the homepage component as a 
prop.
*/

const Calendarview = ({calendarviewdata}) => {

    
    const [markeddayevents,setMarkeddayevents] = useState([]);
    useEffect(()=> {
        fetch('/api/events')
        .then(res => res.json())
        .then(json => setMarkeddayevents(json.events))
        .catch(err => console.log(err))
    },[])
    const [events,setEvents] = useState(markeddayevents); 

    useEffect(() => {
        calendarviewdata(events);
    },[events])

    /*
        Whenever a day is pressed in the calendar,
        it will be passed as a parameter in the Selecteddaysevent
        and the selecteddaysevent function will fetch the data from the API
        based on the date selected and the data will be passed 
        as a parameter(Here events) to the calendarviewdata prop.
    */

    const Selecteddaysevent = (date) => {
        fetch('/api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events.filter(obj=>obj.Date==date)))
        .catch(err => console.log(err))
        calendarviewdata(events);
    }

    /*
        markedday keeps track of all the dates on which the events are 
        scheduled and then it is passed to the markedDates prop of the calendar component
    */
    var markedDay={};
    markeddayevents.map((item) => {
        markedDay[item.Date] = {
        selected: true,
        selectedColor: "black",
        };
    });


    return (
        <Calendar
            markedDates={ markedDay }
            current={'2021-03-01'}
            minDate={'2010-01-01'}
            maxDate={'2021-12-12'}
            onDayPress={day => {
                        Selecteddaysevent(day.dateString);
                    }}
            
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={false}
            firstDay={1}

            theme={{
                backgroundColor: '#ffffff',
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#000000',
                selectedDayTextColor: '#ffffff',
                textDisabledColor: '#d9e1e8',
                selectedDotColor: '#000000',
                arrowColor: 'black',
                disabledArrowColor: '#d9e1e8',
                monthTextColor: 'black',
                textDayFontWeight: '500',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '400',
                textDayFontSize: 14,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 14
            }}
        />
    );
}
export default Calendarview;
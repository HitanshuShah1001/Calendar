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

    const [events,setEvents] = useState([]); 
    const [markeddayevents,setMarkeddayevents] = useState([]);
    useEffect(()=> {
        fetch('/api/events')
        .then(res => res.json())
        .then(json => setMarkeddayevents(json.events))
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        calendarviewdata(events);
    },[events])

    /*
        Whenever a day is pressed in the calendar,
        it will be passed as a parameter in the Selecteddaysevent
        and the selecteddaysevent function will fetcehd the data from the API
        based on the date selected and the data will be passed 
        as a parameter to the calendarviewdata prop.
    */

    const Selecteddaysevent = (date) => {
        fetch('/api/events')
        .then(res => res.json())
        .then(json => setEvents(json.events.filter(obj=>obj.Date==date)))
        .catch(err => console.log(err))
        calendarviewdata(events);
    }
    
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
            monthFormat={'MM yyyy'}
            hideArrows={false}
            hideExtraDays={true}
            disableMonthChange={false}
            firstDay={1}
        />
    );
}
export default Calendarview;
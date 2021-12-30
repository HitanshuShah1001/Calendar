import {Calendar} from 'react-native-calendars';
import React from 'react';
import { useState,useEffect} from 'react';
import './Server';



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
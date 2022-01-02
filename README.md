
# Project Title

Offline Calendar App


## Features to be implemented
This project required me to build an offline app with the following 
Basic Features:

1.List of all upcoming events
2.Circle days on mini calendar for days with any events
3.Clicking on any date on mini calendar should show that days event
4.Search by name or instructor
5.Filtering by tags
6.Loading states and empty states.

The workflow of the app has been described through Screenshots and Screen Recording as well.
It is located in the Screenshots and Demo folder inside the project files.

## Workflow of the App

There are basically 2 main components in this App

1.Filtering Components :-
    1.All Sessions
    2.My Sessions
    3.Date
    4.Seats
    5.Instructor
2.Search Component :-
    1.Search based on Instructor name

There are two ways to implement above objectives:-
    1.Through Class Component
    2.Through Functions

In React Native,with the help of hooks,via functional programming,
a lot of complexities of Class Components have been simplified through the usage of hooks 
which makes the code much more short and simple.So,here functions have been used.
## Buttons used

1. Date - Used for showing events based on Date.

2. Seats - Used for filtering events based on the type of Seats

3. Instructor - Used for showing based on Instructor's name


## States/Hooks used and their significance

1. count - used for toggling the showing and hiding of search bar

2. searchquery - used for storing the text written in the searchbar

3. allsessionsbuttoncolor,mysessionbuttoncolor - used for changing the 
button color of AllSessions based on click
            
4. events,markeddayevents - used for storing the fetched data

5. calendarvisible - used to show/hide calendar on date button click

6. seattype - used for storing the seattype selected

7. markedday - dictionary that stores the date and the color filter that 
               we are applying to customise that date in calendar that has events on that dictionary
               Assumption is taken that the events should be circled in calendar 
               for that particular filter.For ex:- When in All Sessions,every session's date has
               to be circled,in My Sessions,only those dates for which the user has registered for
               should be shown circled.

8. header - It is a ternary operator that checks if count variable  is 0 and if it 
    is then it returns the normal header and if it isn't, then it returns 
    searchbar.

9. isFFSwitchOn,isAvailableSwitchOn,isBookedSwitchOn - Used for toggling of the various seat selection filters,
    such as when one filter is selected,the rest should be deselected and likewise.

10. isVisible - used for toggling showing and closing of modal on clicking Seats filter


## Functions used for Filtering Components


1. All Sessions

    This function displays all the sessions.They aren't filtered 
    on the basis of any category.
    When AllSessions button is clicked,AllSessions function is 
    triggered and it fetches the data from the API,it also takes 
    num as a parameter,that is trigerred when the cancel button is clicked on 
    the search bar so that the unfiltered data is returned 

2. Query 

    This function takes in the value input given in the searchbar as 
    its parameter and fetches the data from the API 
    based on the input given in the searchbar

3. MySessions

    Used for returning the data that the user has registered for

4. SaveButtonPressed

    Whenever save button is pressed,it checks if a seattype filter was
    selected and if it was, then it returns the filtered data and if
    it wasn't,then it returns the normal data.

5. Selecteddaysevent

    Whenever,a date is clicked on a calendar,this function is 
    triggered and it fetches the data based on the date
    selected.

6. FFfilter,AvailableFilter,BookedFilter

    These functions are used for conditioning logic for the toggling of 
    switches used in filtering seats.

7. Calendarview

     Whenever a day is pressed in the calendar,
        it will be passed as a parameter in the Selecteddaysevent
        and the selecteddaysevent function will fetch the data from the API
        based on the date selected and the data will be passed 
        as a parameter(Here events) to the calendarviewdata prop.

8. Seatselectionfilter

    This component is created for handling the different seat selection 
    filters.It takes filteredseatdata and the hideseatfilter component defined in the
    homepage as prop here and then whenever a seattype is selected or a
    dropdown button is clicked,useEffect hook will be trigerred and it will
    pass the seeattype and the isvisible state as parameter to the components.
    So that the appropriate data can be fetched from the API.

9. Skeletonloader

    This component basically is the design layout 
    for the skeleton loader where we use a React native content loader library.

10. CardView

    In this component a layout is created for displaying the data of events,
    map function is used which  takes all objects in a list
    and runs through a function to create a new list with all objects

11. Statictext

    This component is created and used for
    displaying the static text of that is shown above the All Sessions
    and my sessions buttons.

12. Server

    In order to create a mock API ,Mirage.js is used.It is a fake server
    that runs on the client.A simple mirage route handler 
    is used to handle the /api/events network 
    requests.

13. Homepage

    This file is the centre point of the app 
    where every thing from other files/components is merged together to 
    develop the app.    
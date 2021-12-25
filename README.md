
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


## Workflow of the App

There are bascially 2 main components in this App
1.Filtering Components :-
    1.All Sessions
    2.My Sessions
    3.Date
    4.Seats
    5.Instructor
2.Search Component :-
    1.Search based on Instructor name

## Buttons used

1. Date - Used for showing events based on Date

2. Seats - Used for filtering events based on the type of Seats

3. Instructor - Used for showing based on Instructor's name


## States/variables used and their significance

1. count - used for toggling the showing and hiding of search bar

2. searchquery - used for storing the text written in the searchbar

3. allsessionsbuttoncolor,mysessionbuttoncolor - used for changing the 
button color of AllSessions based on click
            
4. events - used for storing the fetched data

5. calendarvisible - used to show/hide calendar on date button click

6. seattype - used for storing the seattype selected

7. markedday - dictionary that stores the date and the color filter that 
we are applying to customise that date in calendar that has events on that dictionary

8. header - It is a ternary operator that checks if count variable  is 0 and if it 
is then it returns the normal header and if it isn't, then it returns 
searchbar.





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



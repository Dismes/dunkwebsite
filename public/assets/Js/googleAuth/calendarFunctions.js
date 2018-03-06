const CONFIG = require('./settings');
const CalendarAPI = require('node-google-calendar');
let cal = new CalendarAPI(CONFIG);

function showCalednarlist() {
    let params = {
        showHidden: true
    };

    cal.CalendarList.list(params)
        .then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err.message);
        });
}

function showEventsIncalendar() {

    let params = {
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
    
    }; 	//Optional query parameters referencing google APIs
    

    cal.Events.list(CONFIG.calendarId, params)
        .then(json => {
            //Success
            console.log(json);
        }).catch(err => {
            //Error
            console.log('Error: listSingleEvents -' + err.message);
        });
}

showEventsIncalendar();
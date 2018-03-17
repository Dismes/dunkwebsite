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

    }; //Optional query parameters referencing google APIs


    cal.Events.list(CONFIG.calendarId, params)
        .then(json => {
            //Success
            console.log(json);
        }).catch(err => {
            //Error
            console.log('Error: listSingleEvents -' + err.message);
        });
}


function createEvent(params) {
    return Promise.resolve( cal.Events.insert(CONFIG.calendarId, params)
        .then(resp => {
            console.log('inserted quickAddEvent:');
            console.log(resp);
            return resp;
        })
        .catch(err => {
            console.log('Error: quickAddEvent', err.message);
        }));
}

function updateEvent(eventId, params) {

    cal.Events.update(CONFIG.calendarId, eventId, params)
        .then(resp => {
            console.log('updated event:');
            console.log(resp);
            return resp;
        })
        .catch(err => {
            console.log('Error: updatedEvent', err.message);
        });
}

module.exports = {
    updateEvent,
    createEvent
}
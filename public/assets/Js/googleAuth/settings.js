const SERVICE_ACCT_ID = 'yuhkin@planar-rarity-197118.iam.gserviceaccount.com';
const key = require('./googleapi-key').private_key;

const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=prkv84f3m2t3422m67icjsg9m0%40group.calendar.google.com&ctz=America%2FLos_Angeles';
const CALENDAR_ID =  'prkv84f3m2t3422m67icjsg9m0@group.calendar.google.com';
const TIMEZONE = 'GMT-8:00';

module.exports.calendarUrl = CALENDAR_URL;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.key = key; 
module.exports.timezone = TIMEZONE;
import moment from "moment-timezone";

class DateUtils {
    private currentTimezone: string;

    constructor() {
        this.currentTimezone = moment.tz.guess();
    }

    //parse a Date to "Aug 17 10:30" format and use TimeZone using moment-timezone.js
    public parseDateToStringWithTimeZone(date: Date, timeZone: string = this.currentTimezone): string {
        return moment(date).tz(timeZone).format("MMM DD HH:mm");
    }

    public userStartEndTime(startTime: Date, endTime: Date, timeZone: string): string {
        if (!startTime || !endTime) {
            return "";
        }

        return `${this.parseDateToStringWithTimeZone(startTime, timeZone)} - ${this.parseDateToStringWithTimeZone(endTime, timeZone)}`;
    }
}

export default new DateUtils();
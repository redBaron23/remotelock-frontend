import PersonAttributes from "./PersonAttributes";

type GuestAttributes = PersonAttributes & {
    startsAt: Date;
    endsAt: Date;
    deviceTimeZone: string;
}

export default GuestAttributes;
import AccessType from "../types/AccessType";
import GuestAttributes from "../types/GuestAttributes";
import Person from "./Person";

class Guest extends Person {
    constructor(public id: string, public attributes: GuestAttributes) {
        super(id, attributes);
        
        this.type = AccessType.ACCESS_GUEST;
    }
}

export default Guest;
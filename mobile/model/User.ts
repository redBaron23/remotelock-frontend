import AccessType from "../types/AccessType";
import UserAttributes from "../types/UserAttributes";
import Person from "./Person";

class User extends Person {
    constructor(public id: string, public attributes: UserAttributes) {
        super(id, attributes);
        
        this.type = AccessType.ACCESS_USER;
    }
}

export default User;
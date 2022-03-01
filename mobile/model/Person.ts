import AccessType from "../types/AccessType";
import PersonAttributes from "../types/PersonAttributes";

abstract class Person {
    public type: AccessType;
    
    constructor(public id: string, public attributes: PersonAttributes) {
    }
}

export default Person;
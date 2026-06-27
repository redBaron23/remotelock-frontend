import PersonAttributes from "./PersonAttributes";

type UserAttributes = PersonAttributes & {
    guestSource?: string;
}

export default UserAttributes;
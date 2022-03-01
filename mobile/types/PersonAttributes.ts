enum Status {
    UPCOMING = "upcoming",
    CURRENT = "current",
}

type PersonAttributes = {
    name: string;
    email: string;
    phone: string;
    pin: string;
    status: Status;
}

export default PersonAttributes;
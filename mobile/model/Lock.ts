import LockAttributes from "../types/LockAttributes";
import Device from "./Device";

class Lock extends Device {
    constructor(public id: string, public attributes: LockAttributes) {
        super(id, attributes);
    }
}

export default Lock
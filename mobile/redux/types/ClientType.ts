import Device from "../../model/Device";
import Person from "../../model/Person";

export default interface ClientType {
    isLoadingDevices: boolean;
    isLoadingUsers: boolean;
    error: string;
    devices: Array<Device>;
    users: Array<Person>;
}
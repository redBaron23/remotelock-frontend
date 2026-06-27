import DeviceAttributes from "../types/DeviceAttributes";
import DeviceType from "../types/DeviceType";

abstract class Device {
    constructor(public id: string,public type: DeviceType, public attributes: DeviceAttributes) {
    }
}

export default Device;
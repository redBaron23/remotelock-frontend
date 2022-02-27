import DeviceAttributes from "../types/DeviceAttributes";

abstract class Device {
    constructor(public id: string, public attributes: DeviceAttributes) {
    }
}

export default Device;
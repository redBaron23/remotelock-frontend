import DeviceAttributes from "./DeviceAttributes";

export enum LockState {
    LOCKED = 'locked',
    UNLOCKED = 'unlocked',
}

type LockAttributes = DeviceAttributes & {
    state: LockState;
}

export default LockAttributes;
import Device from "../../model/Device";
import Lock from "../../model/Lock";
import DeviceType from "../../types/DeviceType";
import { ClientTypes } from "./client.types";

const INITIAL_STATE = {
    isLoadingDevices: false,
    isLoadingUsers: false,
    error: null,
    devices: [],
    users: [],
    allDevices: [],
};

const reducer = (state: any = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case ClientTypes.FETCH_DEVICS_REQUEST:
            return {
                ...state, isLoadingDevices: true
            }
        case ClientTypes.FETCH_DEVICS_FAILURE:
            return {
                ...state, isLoadingDevices: false, error: action.payload
            }
        case ClientTypes.FETCH_DEVICS_SUCCESS:
            return {
                ...state, isLoadingDevices: false, devices: action.payload, allDevices: action.payload
            }
        case ClientTypes.FETCH_USERS_REQUEST:
            return {
                ...state, isLoadingUsers: true
            }
        case ClientTypes.FETCH_USERS_FAILURE:
            return {
                ...state, isLoadingUsers: false, error: action.payload
            }
        case ClientTypes.FETCH_USERS_SUCCESS:
            return {
                ...state, isLoadingUsers: false, users: action.payload
            }
        case ClientTypes.UPDATE_DEVICE:
            const allDevicesFiltered = state.allDevices.map((device: Device) => {
                if (device.id === action.payload.id) {
                    return action.payload;
                }
                return device;
            })
            const currentDeviceFiltered = allDevicesFiltered.filter(currentDevice => state.devices.some(stateDevice => stateDevice.attributes.name === currentDevice.attributes.name))
            return {
                ...state, devices: currentDeviceFiltered, allDevices: allDevicesFiltered
            }
        case ClientTypes.FILTER_DEVICE_BY_NAME:
            return {
                ...state, isLoadingDevices: false, devices: state.allDevices.filter((device: Device) => {
                    return device.attributes.name.toLowerCase().includes(action.payload.toLowerCase());
                })
            }
        default:
            return state;
    }
}

export default reducer;
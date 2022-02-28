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
                ...state, isLoadingDevices: false, devices: action.payload
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
            return {
                ...state, devices: state.devices.map((device: Device) => {
                    if (device.id === action.payload.id) {
                        return action.payload;
                    }
                    return device;
                })
            }
        case ClientTypes.FILTER_DEVICE_BY_NAME:
            return {
                ...state, isLoadingDevices: false, devices: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
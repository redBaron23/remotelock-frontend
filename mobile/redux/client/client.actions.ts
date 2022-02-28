import { fetchDevices, fetchFilterDeviceByName, fetchUsers } from "../../lib/api"
import Device from "../../model/Device"
import Person from "../../model/Person"
import ObjectUtils from "../../utils/ObjectUtils"
import { ClientTypes } from "./client.types"

const fetchDevicesRequest = () => {
    return {
        type: ClientTypes.FETCH_DEVICS_REQUEST
    }
}

const fetchDevicesSuccess = (devices: Device[]) => {
    return {
        type: ClientTypes.FETCH_DEVICS_SUCCESS,
        payload: devices
    }
}

const fetchDevicesFailure = (error: string) => {
    return {
        type: ClientTypes.FETCH_DEVICS_FAILURE,
        payload: error
    }
}

const fetchUsersRequest = () => {
    return {
        type: ClientTypes.FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users: Person[]) => {
    return {
        type: ClientTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error: string) => {
    return {
        type: ClientTypes.FETCH_USERS_FAILURE,
        payload: error
    }
}

const getDevices = () => {
    return (dispatch: any) => {
        dispatch(fetchDevicesRequest);

        fetchDevices()
            .then((res) => ObjectUtils.toCamelCase(res.data))
            .then((devices) => dispatch(fetchDevicesSuccess(devices)))
            .catch(dispatch(fetchDevicesFailure));
    }
}

const getUsers = () => {
    return (dispatch: any) => {
        dispatch(fetchUsersRequest);

        fetchUsers()
            .then((res) => ObjectUtils.toCamelCase(res.data))
            .then((users) => dispatch(fetchUsersSuccess(users)))
            .catch(dispatch(fetchUsersFailure));
    }
}

const updateDevice = (device: Device) => {
    return (dispatch: any) => {
        dispatch({
            type: ClientTypes.UPDATE_DEVICE,
            payload: device
        });
    }
}

const filterDeviceByName = (deviceName: string) => {
    return (dispatch: any) => {
        dispatch(fetchDevicesRequest);

        fetchFilterDeviceByName(deviceName)
            .then((res) => ObjectUtils.toCamelCase(res.data))
            .then((devices) => dispatch(fetchDevicesSuccess(devices)))
            .catch(dispatch(fetchDevicesFailure));
    }
}

const ClientActions = {
    getDevices,
    getUsers,
    updateDevice,
    filterDeviceByName,
}

export default ClientActions;
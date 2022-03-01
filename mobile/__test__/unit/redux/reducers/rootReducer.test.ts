import ClientActions from "../../../../redux/client/client.actions"
import { LockState } from "../../../../types/LockAttributes";
import { delay, testStore } from "../utils"

describe('Root reducer', () => {
    it('Get devices working', async () => {
        const store = testStore();

        store.dispatch<any>(ClientActions.getDevices())

        //Workaround to wait for the async action to complete should be replace by a better solution like 
        // observer pattern
        await delay(800);

        const state = store.getState();
        expect(state.client.devices.length > 0).toBe(true);

    })

    it('Get users working', async () => {
        const store = testStore();

        store.dispatch<any>(ClientActions.getUsers())

        //Workaround to wait for the async action to complete should be replace by a better solution like
        // observer pattern
        await delay(800);

        const state = store.getState();
        expect(state.client.users.length > 0).toBe(true);
    })

    it('Update device (lock device) is working', async () => {
        const store = testStore();

        store.dispatch<any>(ClientActions.getDevices())

        //Workaround to wait for the async action to complete should be replace by a better solution like
        // observer pattern
        await delay(800);

        const state = store.getState();
        expect(state.client.devices.length > 0).toBe(true);

        const device = state.client.devices[0];
        const firstDeviceState = device.attributes.state;
        // toggle device state 
        device.attributes.state = firstDeviceState === LockState.LOCKED ? LockState.UNLOCKED : LockState.LOCKED;

        store.dispatch<any>(ClientActions.updateDevice(device))

        //Workaround to wait for the async action to complete should be replace by a better solution like
        // observer pattern
        await delay(800);

        const state2 = store.getState();
        const lastDeviceState = state2.client.devices[0].attributes.state

        expect(lastDeviceState !== firstDeviceState).toBe(true);
    })

    it('Filter device by name is working', async () => {
        const store = testStore();

        store.dispatch<any>(ClientActions.getDevices())

        //Workaround to wait for the async action to complete should be replace by a better solution like
        // observer pattern
        await delay(800);

        const state = store.getState();
        expect(state.client.devices.length > 0).toBe(true);

        store.dispatch<any>(ClientActions.filterDeviceByName("Home"))

        //Workaround to wait for the async action to complete should be replace by a better solution like
        // observer pattern
        await delay(800);

        const state2 = store.getState();
        expect(state2.client.devices.length > 0).toBe(true);
    })
})
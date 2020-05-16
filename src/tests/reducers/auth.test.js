import authReducer from '../../reducers/auth'
test('Should set uid for login', () => {
    const uid = '123';
    const action = {
        type: "LOGIN",
        uid
    }
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
})

test('Should clear uid for logout', () => {

    const action = {
        type: "LOGOUT"
    }
    const state = authReducer(undefined, action);
    expect(state).toEqual({});
})
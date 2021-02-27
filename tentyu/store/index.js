export const state = () => ({
    planName: null,
})

export const mutations = {
    auth(state, user) {
        state.planName = user.planName;
        console.log(state);

    },
}
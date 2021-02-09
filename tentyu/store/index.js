export const state = () => ({
    planName: "",
})

export const mutations = {
    auth(state, user) {
        state.planName = user.planName;
        console.log(state);

    },
}
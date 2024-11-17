import { create } from 'zustand';

const useInfoState = create((set) => ({
    userName: '',
    userSelectedAvatar: {
        name: "",
        path: "",
        profilePath: "",
        pronoun: ""
    },
    userLastQuizScore: 0,

    setUserName: (name) => set({ userName: name }),
    setUserSelectedAvatar: (avatar) => set({ userSelectedAvatar: avatar }),
    setUserLastQuizScore: (score) => set({ userLastQuizScore: score }),
    resetUserLastQuizScore: () => set({ userLastQuizScore: 0 })
}))

export default useInfoState;
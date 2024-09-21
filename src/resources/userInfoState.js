import { create } from 'zustand';

const useInfoState = create((set) => ({
    userName: '',
    userSelectedAvatar: {
        name: "",
        path: "",
        profilePath: "",
        pronoun: ""
    },

    setUserName: (name) => set({ userName: name }),
    setUserSelectedAvatar: (avatar) => set({ userSelectedAvatar: avatar }),
}))

export default useInfoState;
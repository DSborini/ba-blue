import { create } from 'zustand'

const useInfoState = create((set) => ({
    userName: '',
    userSelectedAvatar: '',

    setUserName: (name) => set({ userName: name }),
    setUserSelectedAvatar: (avatar) => set({ userSelectedAvatar: avatar }),
}))

export default useInfoState;
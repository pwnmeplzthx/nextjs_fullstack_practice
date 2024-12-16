import { create } from 'zustand'

// https://zustand-demo.pmnd.rs/

interface State {
    activeId: number;
    setActiveId: (activeId: number) => void;
}
export const useResourceTypeStore = create<State>((set) => ({
    activeId: 1,
    setActiveId: (activeId: number) => set({activeId}),
}));

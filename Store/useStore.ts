import { create } from "zustand";

type State = {
  ActiveAnchor: string;
};

type Action = {
  setActive: (label: State["ActiveAnchor"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useStore = create<State & Action>((set) => ({
  ActiveAnchor: "#About",
  setActive: (label) => set(() => ({ ActiveAnchor: label })),
}));

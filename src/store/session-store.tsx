import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Session = {
    name: string;
    email: string;
};

type SessionState = {
    session: Session | null;
    setSession: (session: Session) => void;
    clearSession: () => void;
};

export const useSessionStore = create<SessionState>()(
    persist(
        (set) => ({
            session: null,
            setSession: (session) => set({ session }),
            clearSession: () => set({ session: null }),
        }),
        {
            name: "cms-session-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);
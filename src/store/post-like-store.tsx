import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface PostLikeStore {
    likes: Record<string, boolean>;
    toggleLike: (postId: string) => void;
    setLike: (postId: string, status: boolean) => void;
}

export const usePostLikeStore = create<PostLikeStore>()(
    persist(
        (set) => ({
            likes: {},
            toggleLike: (postId: string) =>
                set((state) => ({
                    likes: {
                        ...state.likes,
                        [postId]: !state.likes[postId],
                    },
                })),
            setLike: (postId: string, status: boolean) =>
                set((state) => ({
                    likes: {
                        ...state.likes,
                        [postId]: status,
                    },
                })),
        }),
        {
            name: 'post-likes-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
import { create } from 'zustand';

interface UploadState {
    isUploading: boolean;
    setIsUploading: (state: boolean) => void;
}

export const useUploadStore = create<UploadState>((set) => ({
    isUploading: false,
    setIsUploading: (state) => set({ isUploading: state }),
}));
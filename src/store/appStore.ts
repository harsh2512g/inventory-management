import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useAppStore = create()(
  devtools(
    persist(
      (set) => ({
        // UI States

        isSidebarOpen: false,
        setIsSidebarOpen: (isOpen: boolean) =>
          set({ isSidebarOpen: isOpen }, false, "setIsSidebarOpen"),

        //Main Sidebar Drawer
        isDrawerOpen: true,
        setIsDrawerOpen: (isOpen: boolean) =>
          set({ isDrawerOpen: isOpen }, false, "setIsDrawerOpen"),

        //resize slider width
        rightWidth: 60,
        setRightWidth: (width: number) =>
          set({ rightWidth: width }, false, "setRightWidth"),

        // Loading States
        isLoading: false,
        setIsLoading: (loading: boolean) =>
          set({ isLoading: loading }, false, "setIsLoading"),

        // Reset app state
        resetAppState: () =>
          set(
            {
              isSidebarOpen: true,
              isLoading: false,
              selectedItems: [],
              rightWidth: 60,
              isDrawerOpen: true,
            },
            false,
            "resetAppState"
          ),
      }),
      {
        name: "app-storage",
        partialize: (state) => ({
          rightWidth: state.rightWidth,
          isDrawerOpen: state.isDrawerOpen,
        }),
      }
    ),
    {
      name: "App Store",
      enabled: process.env.NODE_ENV === "development",
    }
  )
);

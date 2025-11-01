// Navigation state management
import { create } from 'zustand';

const useNavigationStore = create((set) => ({
  // Current page/route
  currentPage: '/',
  
  // Navigation history
  history: [],
  
  // Set current page and update history
  setPage: (page) => set((state) => ({
    currentPage: page,
    history: [...state.history, page]
  })),
  
  // Go back in history
  goBack: () => set((state) => {
    const newHistory = [...state.history];
    newHistory.pop(); // Remove current page
    const previousPage = newHistory[newHistory.length - 1] || '/';
    return {
      currentPage: previousPage,
      history: newHistory
    };
  })
}));

export default useNavigationStore;
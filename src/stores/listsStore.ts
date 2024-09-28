import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type StoredList = { name: string; lastAccess: string }; // All necesary?

type ListsStore = {
    lists: { [key: string]: StoredList };
    updateList: (listId: string, listName: string, updateDate: boolean) => void;
    removeList: (listId: string) => void;
};

const useListsStore = create(
    persist<ListsStore>(
        (set) => ({
            lists: {},
            updateList: (listId, listName, updateDate) =>
                set((state) => ({
                    lists: {
                        ...state.lists,
                        [listId]: {
                            name: listName,
                            lastAccess: updateDate
                                ? new Date().toISOString()
                                : listId in state.lists
                                  ? state.lists[listId].lastAccess
                                  : new Date().toISOString(),
                        },
                    },
                })),
            removeList: (listId) =>
                set((state) => {
                    const newLists = { ...state.lists };
                    delete newLists[listId];
                    return { lists: newLists };
                }),
        }),
        {
            name: 'listsStore',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useListsStore;

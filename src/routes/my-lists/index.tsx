import useListsStore, { StoredList } from '@/stores/listsStore';
import { createFileRoute } from '@tanstack/react-router';
import { Container } from 'react-grid-system';
import DateList from '@/components/my-lists/DateLists';

export const Route = createFileRoute('/my-lists/')({
    component: () => MyLists(),
});

export type List = { listId: string } & StoredList;

function MyLists() {
    const listsStore = useListsStore();
    const lists = listsStore.lists;

    const sortedLists = Object.entries(lists).sort(
        (a, b) =>
            new Date(b[1].lastAccess).getTime() -
            new Date(a[1].lastAccess).getTime()
    );

    const listsByDates: Record<string, List[]> = {};

    sortedLists.forEach(([listId, list]) => {
        const date = new Date(list.lastAccess).toLocaleDateString('en-US');
        if (!listsByDates[date]) {
            listsByDates[date] = [];
        }

        listsByDates[date].push({ listId, ...list });
    });

    return (
        <Container className="w-full mt-10">
            {Object.entries(listsByDates).map(([date, lists]) => (
                <DateList key={date} day={date} lists={lists} />
            ))}
        </Container>
    );
}

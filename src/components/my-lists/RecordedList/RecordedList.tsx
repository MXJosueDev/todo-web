import { List } from '@/routes/my-lists';
import { Link } from '@tanstack/react-router';
import { Route as ListRoute } from '@/routes/list/$listId';
import { TrashIcon } from '@primer/octicons-react';
import useListsStore from '@/stores/listsStore';

interface Props {
    list: List;
}

export default function RecordedList({ list }: Props) {
    const listStore = useListsStore();

    return (
        <div className="border-b-2 border-b-slate-200 py-2 w-full flex">
            <span className="me-2">
                {new Date(list.lastAccess).toLocaleTimeString(undefined, {
                    hour: '2-digit',
                    minute: '2-digit',
                })}
            </span>{' '}
            <Link
                to={ListRoute.to}
                params={{ listId: list.listId }}
                className="text-lime-600 border-b-2 border-transparent hover:border-lime-600"
            >
                {list.name} ({list.listId})
            </Link>
            <div className="ms-auto">
                <button
                    className="hover:text-red-600 ms-auto leading-[18px]"
                    onClick={(event) => {
                        event.preventDefault();

                        listStore.removeList(list.listId);
                    }}
                >
                    <TrashIcon verticalAlign="middle" size={18} />
                </button>
            </div>
        </div>
    );
}

import { List } from '@/routes/my-lists';
import RecordedList from '../RecordedList';

interface Props {
    date: string;
    lists: List[];
}

export default function DateList({ date, lists }: Props) {
    return (
        <div className="mb-4">
            <h4 className="text-xl font-bold capitalize">{date}</h4>

            <div className="ms-2">
                {lists.map((list) => (
                    <RecordedList key={list.listId} list={list} />
                ))}
            </div>
        </div>
    );
}

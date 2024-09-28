import { List } from '@/routes/my-lists';
import RecordedList from '../RecordedList';
import { DateTime } from 'luxon';

interface Props {
    day: string;
    lists: List[];
}

export default function DateList({ day, lists }: Props) {
    const datetime = DateTime.fromJSDate(new Date(day));

    return (
        <div className="mb-4">
            <h4 className="text-xl font-bold capitalize">
                {datetime.toRelativeCalendar()}
            </h4>

            <div className="ms-2">
                {lists.map((list) => (
                    <RecordedList key={list.listId} list={list} />
                ))}
            </div>
        </div>
    );
}

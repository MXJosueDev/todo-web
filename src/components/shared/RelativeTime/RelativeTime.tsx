import { DateTime } from 'luxon';
import { useEffect, useState } from 'react';

interface Props {
    date: Date;
}

function format(date: Date): string {
    return DateTime.fromJSDate(date).toRelative() ?? 'Invalid date';
}

export default function DynamicTime({ date }: Props) {
    const [relativeTime, setRelativeTime] = useState('');

    useEffect(() => {
        const updateRelativeTime = () => {
            const formatedTime = format(date);

            setRelativeTime(formatedTime);
        };

        updateRelativeTime();

        const intervalId = setInterval(updateRelativeTime, 1000);

        return () => clearInterval(intervalId);
    }, [date]);

    return relativeTime;
}

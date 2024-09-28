import { SyncIcon } from '@primer/octicons-react';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function UpdateTasksButton() {
    const [isLoading, setLoading] = useState<boolean>();

    const queryClient = useQueryClient();

    return (
        <button
            className="bg-lime-400 rounded p-2 text-white w-full h-full disabled:bg-yellow-400"
            onClick={async () => {
                console.log('clicked');
                setLoading(true);
                await queryClient.invalidateQueries({
                    queryKey: ['tasks'],
                });
                await queryClient.invalidateQueries({
                    queryKey: ['list'], // FIXME:
                });
                setLoading(false);
            }}
            disabled={isLoading}
        >
            <SyncIcon verticalAlign="middle" />
        </button>
    );
}

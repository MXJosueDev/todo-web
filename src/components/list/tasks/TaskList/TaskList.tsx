import Task from '@/components/list/tasks/Task';
import { useTasks } from '@/hooks/useTasks';
import { Route } from '@/routes/list/$listId';

export default function TaskList() {
    const params = Route.useParams();

    const { data: tasks, error } = useTasks(params.listId);

    if (error) return 'Error: ' + error.message;

    return (
        <>
            {tasks?.length === 0 && (
                <div className="text-center text-lg mt-5 text-gray-500">
                    There is not tasks yet.
                </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {tasks?.map((task) => {
                    return <Task key={task.id} taskData={task} />;
                })}
            </div>
        </>
    );
}

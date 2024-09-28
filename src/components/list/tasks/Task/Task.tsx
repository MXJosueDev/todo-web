import DynamicTime from '@/components/shared/RelativeTime';
import { useDeleteTask, usePatchTask, useToggleTask } from '@/hooks/useTasks';
import { Task as TaskType } from '@/api/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { TrashIcon } from '@primer/octicons-react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Route } from '@/routes/list/$listId';
import { BiEdit } from 'react-icons/bi';

interface Props {
    taskData: TaskType;
}

const Schema = z.object({
    title: z
        .string()
        .max(200, 'Your task name is too long.')
        .min(1, 'The task name is required.'),
});

type ISchema = z.infer<typeof Schema>;

export default function Task({
    taskData: { id, title, completed, updated_at },
}: Props) {
    const params = Route.useParams();

    const { register, handleSubmit } = useForm<ISchema>({
        mode: 'all',
        resolver: zodResolver(Schema),
    });

    const { mutate: renameMutation } = usePatchTask(params.listId);
    const { mutate: deleteMutation } = useDeleteTask(params.listId);
    const { mutate: toggleMutation } = useToggleTask(params.listId);

    const onSubmit = ({ title: newTitle }: ISchema) => {
        if (title !== newTitle) {
            renameMutation({
                id,
                title,
                completed,
                list_uuid: params.listId,
            });
        }
    };

    return (
        <div
            className={`py-1 px-2 border-2 ${completed ? 'bg-green-300' : 'bg-slate-100'} shadow-md rounded-md ${completed && 'border-green-300'}`}
        >
            <Row gutterWidth={0}>
                <Col xs={2} className="flex items-center">
                    <input
                        className="h-5 w-5"
                        type="checkbox"
                        name={`${id}-completed`}
                        id={`${id}-completed`}
                        checked={completed}
                        onChange={() => {
                            toggleMutation({
                                id,
                                completed,
                                list_uuid: params.listId,
                            });
                        }}
                    />
                </Col>
                <Col xs={20}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        onBlur={handleSubmit(onSubmit)}
                        className="flex items-center"
                    >
                        <BiEdit className="opacity-70 me-1" />
                        <input
                            {...register('title')}
                            className={`font-semibold bg-inherit flex flex-col outline-none border-b-2 border-transparent w-full focus:border-gray-400 ${completed && 'line-through'}`}
                            defaultValue={title}
                        />
                    </form>
                    <small>
                        <DynamicTime date={new Date(updated_at)} />
                    </small>
                </Col>
                <Col xs={2} className="flex items-center">
                    <button
                        className="hover:text-red-600 ms-auto leading-[18px]"
                        onClick={(event) => {
                            event.preventDefault();

                            deleteMutation({
                                id,
                                list_uuid: params.listId,
                            });
                        }}
                    >
                        <TrashIcon verticalAlign="middle" size={18} />
                    </button>
                </Col>
            </Row>
        </div>
    );
}

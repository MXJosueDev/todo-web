import { useCreateTask } from '@/hooks/useTasks';
import { Route } from '@/routes/list/$listId';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from '@primer/octicons-react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Schema = z.object({
    title: z
        .string()
        .max(200, 'Your task name is too long.')
        .min(1, 'The task name is required.'),
});

type ISchema = z.infer<typeof Schema>;

export default function TaskForm() {
    const params = Route.useParams();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ISchema>({
        resolver: zodResolver(Schema),
    });

    const createMutable = useCreateTask(params.listId);

    const onSubmit = async ({ title }: ISchema) => {
        createMutable.mutate({
            title,
            compleded: false,
            list_uuid: params.listId,
        });

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-2 pb-5">
            <Row>
                <Col xs={20} md={22}>
                    <input
                        {...register('title')}
                        type="text"
                        placeholder="Enter your task title"
                        className={`border-b-2 outline-none w-full p-1 ${errors.title && 'border-red-600'}`}
                    />
                    <div className="w-full">
                        {errors.title && (
                            <small className="text-red-600">
                                {errors.title.message}
                            </small>
                        )}
                    </div>
                </Col>
                <Col xs={4} md={2}>
                    <button type="submit" className="h-100 mx-auto block">
                        <PlusIcon size={25} />
                    </button>
                </Col>
            </Row>
        </form>
    );
}

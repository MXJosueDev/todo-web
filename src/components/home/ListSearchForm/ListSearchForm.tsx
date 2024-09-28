import { createList, getListData } from '@/api/TasksAPI';
import { Route } from '@/routes/list/$listId';
import { zodResolver } from '@hookform/resolvers/zod';
import { PlusCircleIcon } from '@primer/octicons-react';
import { useNavigate } from '@tanstack/react-router';
import { MouseEvent, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Schema = z.object({
    search: z
        .string()
        .min(8, 'The search UUID is 8 character lenght.')
        .max(8, 'The search UUID is 8 character lenght.'),
});

type ISchema = z.infer<typeof Schema>;

export default function ListSearchForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<ISchema>({
        resolver: zodResolver(Schema),
    });

    const onSearch = async ({ search }: ISchema) => {
        setIsLoading(true);
        try {
            await getListData(search);
        } catch {
            setIsLoading(false);
            setError('search', { message: "List doesn't exist." });
            return;
        }

        navigate({ to: Route.to, params: { listId: search } });
    };

    const onCreate = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const list = await createList({ title: 'New List' });

            navigate({
                to: Route.to,
                params: { listId: list.data.uuid },
            });
        } catch {
            setIsLoading(false);
            setError('root', { message: 'Something went wrong.' });
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSearch)} className="w-full pt-2 pb-5">
            <input
                {...register('search')}
                type="text"
                required
                placeholder="List UUID"
                className={`border-b-2 outline-none w-full p-1 ${
                    errors.search && 'border-red-600'
                }`}
            />
            <div className="w-full">
                {errors.search && (
                    <small className="text-red-600">
                        {errors.search.message}
                    </small>
                )}
            </div>

            <Row gutterWidth={10} className="mt-3">
                <Col xs={18} md={20}>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-lime-400 rounded p-2 text-white w-full h-full disabled:bg-gray-600 ${isLoading && 'cursor-not-allowed'}`}
                    >
                        Go to my list
                    </button>
                </Col>
                <Col xs={6} md={4}>
                    <button
                        type="button"
                        className="border-lime-400 border-2 text-lime-400 rounded p-2 w-full h-full disabled:border-gray-600 disabled:text-gray-600"
                        disabled={isLoading}
                        onClick={onCreate}
                    >
                        <PlusCircleIcon size={24} verticalAlign="middle" />
                    </button>
                </Col>
            </Row>
        </form>
    );
}

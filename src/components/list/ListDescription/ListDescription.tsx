import DynamicTime from '@/components/shared/RelativeTime';
import { useList, usePatchList } from '@/hooks/useTasks';
import { Route } from '@/routes/list/$listId';
import useListsStore from '@/stores/listsStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { Col, Row } from 'react-grid-system';
import { useForm } from 'react-hook-form';
import { BiEdit } from 'react-icons/bi';
import { z } from 'zod';

const Schema = z.object({
    title: z
        .string()
        .max(200, 'Your list name is too long.')
        .min(1, 'The list name is required.'),
});

type ISchema = z.infer<typeof Schema>;

export default function ListDescription() {
    const listStore = useListsStore();

    const params = Route.useParams();
    const { data } = useList(params.listId);

    const { register, handleSubmit } = useForm<ISchema>({
        mode: 'all',
        resolver: zodResolver(Schema),
    });

    const patchMutation = usePatchList(params.listId);

    const onSubmit = ({ title }: ISchema) => {
        if (title != data?.title) {
            patchMutation.mutate({
                title,
                uuid: params.listId,
            });

            listStore.updateList(params.listId, title, false);
        }
    };

    return (
        <>
            <Row className="mb-5">
                <Col xs={16}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        onBlur={handleSubmit(onSubmit)}
                        className="flex items-center text-3xl"
                    >
                        <BiEdit className="me-1 opacity-70" />
                        <input
                            {...register('title')}
                            type="text"
                            placeholder="Enter your list title"
                            defaultValue={data?.title}
                            className="bg-inherit outline-none border-b-2 border-transparent w-full focus:border-gray-400"
                        />
                    </form>
                    <small className="text-sm">({data?.uuid})</small>
                </Col>
                <Col xs={8}>
                    <p className="text-end">
                        Created at:{' '}
                        {data?.created_at && (
                            <DynamicTime date={new Date(data.created_at)} />
                        )}
                    </p>
                </Col>
            </Row>
        </>
    );
}

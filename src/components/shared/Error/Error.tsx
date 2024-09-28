import { IoMdAlert } from 'react-icons/io';

export default function Error() {
    return (
        <div className="self-center text-center text-lg mt-5 w-full text-gray-500">
            <IoMdAlert className="text-9xl inline-block" />
            <h4 className="text-5xl mb-3 font-mono">Error</h4>
            <p>Sorry, an error ocurred processing your request.</p>
        </div>
    );
}

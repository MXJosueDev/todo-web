import { IoMdWarning } from 'react-icons/io';

export default function NotFound() {
    return (
        <div className="self-center text-center text-lg mt-5 w-full text-gray-500">
            <IoMdWarning className="text-9xl inline-block" />
            <h4 className="text-5xl mb-3 font-mono">404</h4>
            <p>Sorry, the page or list you are looking for does not exist.</p>
        </div>
    );
}

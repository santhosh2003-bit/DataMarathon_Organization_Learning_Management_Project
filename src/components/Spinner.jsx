const Spinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-opacity-50 bg-white fixed top-0 left-0 right-0 bottom-0 z-50">
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
        </div>
    );
};

export default Spinner;
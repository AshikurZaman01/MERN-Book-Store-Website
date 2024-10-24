
const Skeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="skeleton h-32 w-full mb-4 rounded-md"></div>
            <div className="skeleton h-6 w-3/4 mb-2 rounded-md"></div>
            <div className="skeleton h-4 w-1/2 mb-2 rounded-md"></div>
            <div className="skeleton h-4 w-1/3 mb-4 rounded-md"></div>
            <div className="skeleton h-10 w-32 rounded-md"></div>
        </div>
    )
}

export default Skeleton
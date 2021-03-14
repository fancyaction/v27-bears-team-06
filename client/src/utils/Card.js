const Card = ({ children, color = 'bg-white' }) => (
        <div
            className={`${color} flex justify-center items-center h-screen snap-center`}
        >
            <div className="flex flex-col w-3/4 max-w-full md:max-w-md">
            {children}
            </div>
        </div>
);

export default Card;

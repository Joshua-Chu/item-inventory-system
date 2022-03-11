type ItemPillProps = {
    name: string;
};
export function ItemPill({ name }: ItemPillProps) {
    return (
        <div className="border-2 border-gray-300 py-2 px-4 rounded-lg">
            <p>Name: {name}</p>
            <p>Date: {name}</p>
        </div>
    );
}

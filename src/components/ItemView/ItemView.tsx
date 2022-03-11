import { useAppContext } from "../../store/AppProvider";

export function ItemView() {
    const { currentView, deleteItem } = useAppContext();
    return (
        <div className="border-2 border-gray-300 rounded-lg w-full p-4">
            {currentView && (
                <div className="text-left grid gap-4 relative">
                    <div className="absolute top-0 right-0">
                        <button
                            type="button"
                            className="px-4 py-2 border-2 border-gray-300 rounded-xl mr-4 hover:bg-red-300 hover:border-red-300 hover:text-white"
                            onClick={() => deleteItem(currentView.id)}
                        >
                            delete
                        </button>
                        <button
                            type="button"
                            className="px-4 py-2 border-2 border-gray-300 rounded-xl mr-4 hover:bg-green-300 hover:border-green-300 hover:text-white"
                        >
                            edit
                        </button>
                    </div>
                    <h2 className="text-3xl font-bold text-center">
                        {currentView.name}
                    </h2>
                    <div>
                        <h3 className="text-md font-bold">Description:</h3>
                        <p>{currentView.description}</p>
                    </div>

                    <div>
                        <img
                            src={
                                currentView.imageURL ? currentView.imageURL : ""
                            }
                            alt="item banner"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

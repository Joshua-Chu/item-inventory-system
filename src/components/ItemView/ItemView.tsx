import { useEffect, useState } from "react";
import { useAppContext } from "../../store/AppProvider";
import { ItemEditForm } from "../ItemEditForm";

export function ItemView() {
    const { currentView, deleteItem } = useAppContext();
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        setEdit(false);
    }, []);
    return (
        <div className="border-2 border-gray-300 rounded-lg w-full p-4">
            {currentView &&
                (edit ? (
                    <ItemEditForm item={currentView} onCancelEdit={setEdit} />
                ) : (
                    <div className="text-left grid gap-4 ">
                        <div>
                            <div className="mb-4">
                                <button
                                    type="button"
                                    className="mb-2 px-4 py-2 border-2 border-gray-300 rounded-xl mr-4 hover:bg-red-300 hover:border-red-300 hover:text-white"
                                    onClick={() => deleteItem(currentView.id)}
                                >
                                    delete
                                </button>
                                <button
                                    type="button"
                                    className="mb-2 px-4 py-2 border-2 border-gray-300 rounded-xl mr-4 hover:bg-green-300 hover:border-green-300 hover:text-white"
                                    onClick={() => setEdit(true)}
                                >
                                    edit
                                </button>
                            </div>
                            <h2 className="text-3xl font-bold text-center">
                                {currentView.name}
                            </h2>
                        </div>
                        <div>
                            <h3 className="text-md font-bold">Description:</h3>
                            <p>{currentView.description}</p>
                        </div>

                        <div>
                            <img
                                src={
                                    currentView.imageURL
                                        ? currentView.imageURL
                                        : ""
                                }
                                alt="item banner"
                            />
                        </div>
                    </div>
                ))}
        </div>
    );
}

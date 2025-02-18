import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface InventoryData {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
}

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    item: InventoryData;
    onSave: (updatedItem: InventoryData) => void;
}

const parsePrice = (price: string): number => {
    return parseFloat(price.replace(/[^0-9.-]+/g, ""));
};

const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
};

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, item, onSave }) => {
    const [editedItem, setEditedItem] = useState<InventoryData>(item);
    console.log({ item })

    useEffect(() => {
        setEditedItem(item)
    }, [item])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedItem((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const numericValue = parseFloat(value);
        if (!isNaN(numericValue)) {
            setEditedItem((prev) => ({
                ...prev,
                price: formatPrice(numericValue),
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(editedItem);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  bg-black/40 flex justify-center items-center">
            <div className="bg-gray-800 p-6 rounded-lg w-[500px] shadow-lg">
                <div className="flex justify-end w-full">
                    <X color="#cae599" size={30} className="cursor-pointer" onClick={onClose} />
                </div>
                <h2 className="text-4xl font-normal mb-2 mt-[-20px]">Edit Product</h2>
                <p className="mb-4">{editedItem.name}</p>
                <form onSubmit={handleSubmit} >

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Category</label>
                            <input
                                type="text"
                                name="category"
                                value={editedItem.category}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded-xl"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Value</label>
                            <input
                                type="text"
                                name="value"
                                value={editedItem.value}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded-xl"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={editedItem.quantity}
                                onChange={handleChange}
                                className="w-full p-2 bg-gray-700 rounded-xl"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={parsePrice(editedItem.price)}
                                onChange={handlePriceChange}
                                className="w-full p-2 bg-gray-700 rounded-xl"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-[#cae599] px-4 py-2 cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-[#cae599] text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
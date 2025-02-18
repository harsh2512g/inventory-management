import { useState } from "react";
import { EyeIcon, EyeOff, Pencil, Trash2 } from "lucide-react";
import './table.css';
import EditModal from './Modal';

interface InventoryData {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;

}

interface TableProps {
    inventoryData: InventoryData[] | null;
    onEdit: (updatedItem: InventoryData, index: number) => void;
    isUser: boolean;
    onDelete: (index: number) => void;
    disabledRows: number[];
    toggleDisableRow: (index: number) => void;
}

const Table: React.FC<TableProps> = ({ inventoryData, onEdit, isUser, onDelete, disabledRows, toggleDisableRow }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<InventoryData | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);

    const handleEditClick = (item: InventoryData, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
        setIsModalOpen(true);
    };

    const handleSave = (updatedItem: InventoryData) => {
        onEdit(updatedItem, selectedIndex);
        setIsModalOpen(false);
    };

    const handleDeleteClick = (index: number) => {
        onDelete(index);
    };

    console.log({ selectedItem })
    return (
        <div className="overflow-x-auto mt-5">
            <table className="w-full bg-gray-900 text-white rounded-xl">
                <thead>
                    <tr className="text-left border-b border-gray-700">
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Name</span>
                        </th>
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Category</span>
                        </th>
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Value</span>
                        </th>
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Quantity</span>
                        </th>
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Price</span>
                        </th>
                        <th className="px-4 py-4 text-xs text-[#cae599]">
                            <span className="bg-black p-2 rounded-xl">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData?.map((item: InventoryData, index: number) => {
                        const isDisabled = disabledRows.includes(index);
                        return (
                            <tr key={index} className={`hover:bg-gray-700 border-b border-gray-700 ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                                }`}>
                                <td className="px-4 py-4 field">{item.name}</td>
                                <td className="px-4 py-4 field">{item.category}</td>
                                <td className="px-4 py-4 field">{item.value}</td>
                                <td className="px-4 py-4 field">{item.quantity}</td>
                                <td className="px-4 py-4 field">{item.price}</td>
                                <td className="px-4 py-4 flex gap-2">
                                    <button
                                        className={`${!isUser ? "text-green-700" : "text-gray-700"} text-sm cursor-pointer`}
                                        onClick={() => !isUser && handleEditClick(item, index)}
                                    >
                                        <Pencil size={18} />
                                    </button>
                                    <button className={`${!isUser ? "text-purple-700" : "text-gray-700"} text-sm cursor-pointer`} onClick={() => !isUser && toggleDisableRow(index)}>
                                        {isDisabled ? <EyeOff size={18} /> : <EyeIcon size={18} />}
                                    </button>
                                    <button className={`${!isUser ? "text-red-700" : "text-gray-700"} text-sm cursor-pointer`} onClick={() => !isUser && handleDeleteClick(index)}>
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

            {selectedItem && (
                <EditModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    item={selectedItem}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default Table;
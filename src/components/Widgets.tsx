import { Activity, ChartBarStacked, CircleDollarSign, ShoppingCart } from "lucide-react";

interface InventoryData {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
}

interface WidgetsProps {
    inventoryData: InventoryData[] | null;
}

const Widgets: React.FC<WidgetsProps> = ({ inventoryData }) => {
    if (!inventoryData) return null;

    // Calculate widget values
    const totalProducts = inventoryData.length;
    const totalStoreValue = inventoryData.reduce((sum, item) => sum + parseFloat(item.value.replace(/[^0-9.-]+/g, "")), 0);
    const outOfStocks = inventoryData.filter((item) => item.quantity === 0).length; 
    const numberOfCategories = new Set(inventoryData.map((item) => item.category)).size; 

    return (
        <div className="flex gap-4 w-full">
            <div className="w-full bg-[#0d4223] p-4 rounded-xl flex gap-6">
                <ShoppingCart />
                <div>
                    <p>Total Products</p>
                    <p className="text-3xl mt-2">{totalProducts}</p>
                </div>
            </div>
            <div className="w-full bg-[#0d4223] p-4 rounded-xl flex gap-6">
                <CircleDollarSign />
                <div>
                    <p>Total Store Value</p>
                    <p className="text-3xl mt-2">${totalStoreValue.toFixed(2)}</p>
                </div>
            </div>
            <div className="w-full bg-[#0d4223] p-4 rounded-xl flex gap-6">
                <Activity />
                <div>
                    <p>Out of Stocks</p>
                    <p className="text-3xl mt-2">{outOfStocks}</p>
                </div>
            </div>
            <div className="w-full bg-[#0d4223] p-4 rounded-xl flex gap-6">
                <ChartBarStacked />
                <div>
                    <p>No of Category</p>
                    <p className="text-3xl mt-2">{numberOfCategories}</p>
                </div>
            </div>
        </div>
    );
};

export default Widgets;
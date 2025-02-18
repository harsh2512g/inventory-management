import { useEffect, useState } from "react";
import Roles from "./Roles";
import Widgets from "./Widgets";
import Table from "./Table";
interface InventoryData {
    name: string;
    category: string;
    value: string;
    quantity: number;
    price: string;
}
const Home = () => {
    const [isUser, setIsUser] = useState(false);
    const [data, setData] = useState<InventoryData[] | null>(null);
    const [disabledRows, setDisabledRows] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const res = await response.json();
            setData(res);
            console.log("Fetched Data:", res);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleEdit = (updatedItem: InventoryData, index: number) => {
        setData((prevData) => {
            if (!prevData) return prevData;
            const newData = [...prevData];
            newData[index] = updatedItem;
            return newData;
        });
    };

    const handleDelete = (index: number) => {
        setData((prevData) => {
            if (!prevData) return prevData;
            const newData = [...prevData];
            newData.splice(index, 1); // Remove the item at the specified index
            return newData;
        });
        setDisabledRows((prev) => prev.filter((i) => i !== index));
    };
    const toggleDisableRow = (index: number) => {
        setDisabledRows((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    const activeData = data ? data.filter((_, index) => !disabledRows.includes(index)) : [];

    return (
        <div className="p-15">
            <div className="flex justify-end mb-5">
                <Roles isUser={isUser} setIsUser={setIsUser} />
            </div>
            <p className="text-3xl font-semibold">Inventory Stats</p>
            {loading ? (
                <div className="flex justify-center items-center mt-10">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
                </div>
            ) : (<>
                <div className="mt-5">
                    <Widgets inventoryData={activeData} />
                </div>
                <div>
                    <Table inventoryData={data} onEdit={handleEdit} isUser={isUser} onDelete={handleDelete} disabledRows={disabledRows}
                        toggleDisableRow={toggleDisableRow} />
                </div>
            </>)}
        </div>
    );
};

export default Home;
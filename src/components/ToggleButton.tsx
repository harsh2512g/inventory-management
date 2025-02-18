
import React, { useEffect, useState } from 'react';

interface ToggleButtonProps {
    onToggle: (value: boolean) => void;
    initialToggled: boolean;
    className?: string
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle, initialToggled, className }) => {
    const [isToggled, setToggled] = useState(false);

    useEffect(() => {
        setToggled(initialToggled);
    }, [initialToggled]);

    const handleToggle = () => {
        const newState = !isToggled;
        setToggled(newState);
        onToggle(newState);
    };

    return (
        <div className="flex items-center space-x-2">
            <div className={`${className ? className : ""} relative`}>
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isToggled}
                    onChange={() => { }} 
                />
                <div
                    className={`toggle-button flex items-center cursor-pointer ${isToggled ? 'text-[#cae599]' : 'text-red-500'
                        }`}
                    onClick={handleToggle}
                >
                    <div
                        className={`w-10 h-3 flex items-center  rounded-full p-1 duration-300 ${isToggled ? 'bg-[#89a15b]' : 'bg-gray-500'
                            }`}
                    >
                        <div
                            className={`toggle-switch w-4 h-4 bg-[#cae599] rounded-full shadow-md transform ${isToggled ? 'translate-x-5' : 'translate-x-0.1'
                                } transition-transform`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToggleButton;



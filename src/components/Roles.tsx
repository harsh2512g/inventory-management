import ToggleButton from "./ToggleButton";

interface ROLES {
    isUser: boolean;
    setIsUser: (role: boolean) => void;
}

const Roles = ({ isUser, setIsUser }: ROLES) => {
    const handleToggle = () => {
        setIsUser(!isUser);
    }
    return (
        <div className="flex gap-2">
            <p>admin</p>
            <ToggleButton onToggle={handleToggle} initialToggled={isUser} />
            <p>user</p>
        </div>
    );
};

export default Roles;

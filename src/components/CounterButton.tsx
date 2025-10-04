
type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    label: string;
    addClasses?: string;
}

const CounterButton = ({onClick, disabled = false, label, addClasses}:ButtonProps) => {
    return (
        <>
            <button onClick= {onClick} disabled={disabled} className={addClasses + " text-white py-2 px-4"   } >
                {label}
            </button>
        </>
    )

}

export default CounterButton;
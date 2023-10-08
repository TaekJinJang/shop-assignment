interface PropsOptions {
    options: {
        value: number;
        name: string;
    }[];
    initialValue: number;
    handleSelectBox: (value: number) => void;
}

const SelectBox = ({options, initialValue, handleSelectBox}: PropsOptions) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSelectBox(Number(event.target.value));
    };
    return (
        <select onChange={handleChange} defaultValue={initialValue}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;

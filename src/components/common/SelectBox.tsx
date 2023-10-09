/**
 * SelectBox
 *
 * @param {options, initialValue, handleSelectBox}
 * - `options`: 선택 항목들을 나타내는 객체 배열. 각 객체는 `value`와 `name` 프로퍼티를 가집니다.
 * - `initialValue`: 초기 선택 값.
 * - `handleSelectBox`: 선택 값이 변경될 때 호출되는 함수. 변경된 값을 인자로 받습니다.
 * @return <selectBox />
 */

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

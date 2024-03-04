import './filter.css'
import { useState } from 'react';

// Card component to display user profile and attributes
function Filter({ options, onSelect, placeholder }: { options: string[], onSelect: (value: string) => void, placeholder: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(placeholder);

    const handleSelect = (option: string) => {
        setSelectedOption(option === "None" ? placeholder : option);
        onSelect(option === "None" ? "*" : option);
        setIsOpen(false);
    };

    return (
        <div className="filter">
            <div className="filter-header" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {isOpen && (
                <div className="filter-list">
                    <div className="filter-item" onClick={() => handleSelect("None")}>
                        None
                    </div>
                    {options.map((option, index) => (
                        <div key={index} className="filter-item" onClick={() => handleSelect(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Filter;

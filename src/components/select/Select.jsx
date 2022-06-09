import React from 'react'

const Select = ({ option, defaultValue, value, onChange }) => {
    return (
        <div className='filter-block'>
            <select value={value} onChange={event => onChange(event.target.value)} className='filter-select'>
                <option disabled value="">{defaultValue}</option>
                {option.map(option =>
                    <option key={option.name} value={option.value}>
                        {option.name}
                    </option>)}
            </select>
        </div>
    )
}

export default Select
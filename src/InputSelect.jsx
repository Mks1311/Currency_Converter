function InputSelect({
    label,
    currency,
    options,
    setCurr,
    useCurrencyConverter
}) {
    return (
        <>
            <div className="w-full left-0">
                <form className="max-w-sm">
                    <label htmlFor={label} className="block mb-2 text-2xl font-normal text-gray-900 dark:text-black">{label}</label>
                    <select id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 font-normal "
                        value={currency}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setCurr && setCurr(e.target.value);
                            useCurrencyConverter && useCurrencyConverter(e.target.value);
                        }}

                    >
                        {options.map((curr) => (
                            <option key={curr} value={curr}>
                                {curr}
                            </option>
                        ))}
                    </select>
                </form>
            </div>

        </>

    )
}

export default InputSelect



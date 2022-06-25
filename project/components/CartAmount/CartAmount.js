import React, { useEffect, useState } from "react";

const CartAmount = ({ value, onChange }) => {
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        setAmount(value);
    }, [value]);

    return (
        <div className="flex">
            <input
                className="w-12 text-center border-2 rounded-lg"
                type="number"
                value={amount}
                onChange={(e) => onChange(e.target.value)}
            />
            <div className="flex flex-col">
                <button onClick={() => onChange(amount + 1)}>Up</button>
                <button onClick={() => onChange(Math.max(1, amount - 1))}>
                    Down
                </button>
            </div>
        </div>
    );
};

export default CartAmount;

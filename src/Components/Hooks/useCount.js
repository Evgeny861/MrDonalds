import { useState } from 'react';

export function useCount() {
    const [count, setCount] = useState(1);

    const onChange = e => (e.target.value)

    return { count, setCount, onChange }
}
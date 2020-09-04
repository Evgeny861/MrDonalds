import { useState } from 'react';

export function useCount(startCount) {
    const [count, setCount] = useState(startCount || 1);

    const onChange = e => (e.target.value)

    return { count, setCount, onChange }
}
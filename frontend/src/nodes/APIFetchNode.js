import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const APIFetchNode = ({ id }) => {
    const [url, setUrl] = useState('');
    const [method, setMethod] = useState('GET');

    return (
        <BaseNode
            id={id}
            title="API Fetch Node"
            inputs={[{ id: 'body', positionTopPercent: 50 }]}
            outputs={[{ id: 'response' }]}
            color="#0ea5e9"
        >
            <label>
                URL:
                <input
                    type="text"
                    placeholder="https://api.example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
            </label>
            <label>
                Method:
                <select value={method} onChange={(e) => setMethod(e.target.value)}>
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>
            </label>
        </BaseNode>
    );
};

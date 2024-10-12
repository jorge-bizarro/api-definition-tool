import React from "react";

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'] as const;
type HttpMethod = typeof methods[number];

const ApiDefinitionForm: React.FC = () => {

    const [method, setMethod] = React.useState<HttpMethod>('GET');
    const [url, setUrl] = React.useState<string>('');

    const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMethod(event.target.value as HttpMethod);
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    return (
        <div className="font-semibold p-4 bg-slate-800 bg-opacity-50 rounded-lg shadow-md backdrop-blur-lg backdrop-filter">
            <div className="mb-4 fade-in-up">
                <input
                    type="text"
                    placeholder="Nombre de la API"
                    className="w-full p-2 border rounded bg-indigo-950 text-violet-400 border-indigo-400 focus:outline-none focus:bg-indigo-900 focus:text-slate-300 focus:border-indigo-100"
                    required
                />
            </div>

            <div className="flex items-center space-x-4">
                <div className="relative">
                    <select
                        value={method}
                        onChange={handleMethodChange}
                        className="block appearance-none w-full bg-indigo-950 text-violet-400 border border-indigo-400 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-indigo-900 focus:text-slate-300 focus:border-indigo-100"
                    >
                        {methods.map((method) => (
                            <option key={method} value={method}>
                                {method}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M7 10l5 5 5-5H7z" />
                        </svg>
                    </div>
                </div>
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="http://localhost:3000"
                    className="flex-1 py-2 px-4 rounded bg-indigo-950 text-violet-400 border border-indigo-400 focus:outline-none focus:bg-indigo-900 focus:border-indigo-100 focus:text-slate-300"
                />
            </div>
        </div>
    )
}


export default ApiDefinitionForm

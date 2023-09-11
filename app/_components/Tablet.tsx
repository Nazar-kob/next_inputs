import React from 'react';

// I am not use flowbite-react tablet component because we can render date on server side as next js recommend
export interface IRow {
  id: number;
  cells: string[];
}

type Props = {
  headers: string[];
  body: IRow[];
};

const Tablet = ({ headers, body }: Props) => {
  return (
    <div className="relative overflow-x-auto h-full">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {row.cells.map((cell) => (
                <td key={cell} className="px-6 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablet;

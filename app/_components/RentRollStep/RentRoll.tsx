import Button from '../Custom/Button';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import Tablet, { IRow } from '../Tablet';
import NavBtn from '../Custom/NavBtn';
import BtnContinue from './BtnContinue';

const body: IRow[] = [
  { id: 1, cells: ['1', '2', '3', '4', '5', '6', '7'] },
  { id: 2, cells: ['1', '2', '3', '4', '5', '6', '7'] },
  { id: 3, cells: ['1', '2', '3', '4', '5', '6', '7'] },
  { id: 4, cells: ['1', '2', '3', '4', '5', '6', '7'] },
];

const RentRoll = () => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <div className="grid grid-cols-6 gap-2">
        <div className="col-start-1 col-end-6 text-3xl font-medium">
          Rent Roll
        </div>
        <Button
          name="Export template"
          className="col-start-7"
          color="light"
          leftIcon={<ArrowDownTrayIcon className="w-6 h-6 mr-2" />}
        ></Button>
        <Button
          name="Import file"
          className="col-start-8"
          color="light"
          leftIcon={<ArrowUpTrayIcon className="w-6 h-6 mr-2" />}
        />
      </div>
      <Tablet
        headers={[
          'Id',
          'Type',
          'Rent',
          'Width',
          'Length',
          'market Rent',
          'Status',
        ]}
        body={body}
      />
      <div className="flex justify-end gap-4">
        <NavBtn name="Back" color="light" href="/" />
        <BtnContinue />
      </div>
    </div>
  );
};

export default RentRoll;

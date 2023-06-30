import Row from './Row';
import './Table.css';
import { Pagination } from '@mui/material';

function Table({
  records,
  srchVal,
  firstRowIndex,
  lastRowIndex,
  recordsPerPage,
  handlePages,
}) {
  const filteredData = records.filter((obj) => {
    return Object.values(obj).some((val) => {
      return val.toString().toLowerCase().includes(srchVal.toLowerCase());
    });
  });

  const numberOfPages = Math.ceil(filteredData.length / recordsPerPage);

  return (
    <div className='table-container'>
      <table className='table'>
        <thead className='table__head theader'>
          <tr className='theader__row'>
            <th className='theader__item'>Company</th>
            <th className='theader__item'>Model</th>
            <th className='theader__item'>Vin</th>
            <th className='theader__item'>Color</th>
            <th className='theader__item'>Year</th>
            <th className='theader__item'>Price</th>
            <th className='theader__item'>Availability</th>
            <th className='theader__item'>Actions columns</th>
          </tr>
        </thead>

        <tbody className='table_body tbody'>
          {filteredData
            .map((car) => {
              return <Row {...car} key={car.id} />;
            })
            .slice(firstRowIndex, lastRowIndex)}
        </tbody>
      </table>
      <Pagination
        count={numberOfPages}
        onChange={handlePages}
        size='large'
        variant='outlined'
        shape='rounded'
        className='table-container__pagination'
      />
    </div>
  );
}

export default Table;

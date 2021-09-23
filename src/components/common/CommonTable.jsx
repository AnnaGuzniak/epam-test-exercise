import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderTable = styled.div`
  display: flex;
  font-weight: 700;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
  div {
    flex: 1;
  }
`;

const RowTable = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;

const TableCell = styled.div`
  flex: 1;
  padding: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Table = styled.section`
  padding: 3rem;
`;

const RowContainer = styled.div`
  overflow: auto;
  max-height: calc(100vh - 20rem);
`;

const SearchInput = styled.input`
  margin: 2rem 0rem 0 3rem;
  width: 50%;
  height: 1.5rem;
`;

const CommonTable = ({ headers, items, searchBy, onClickRow }) => {
  const [filteredItems, setFilteredItems] = useState(items);
	
  const handlerSearch = value => {
    setFilteredItems(items.filter(item => searchBy(item, value.target.value)));
  };

  return (
    <div>
      {!!searchBy && <SearchInput placeholder="Search by name" onChange={handlerSearch} />}
      <Table>
        <HeaderTable>
          <div style={{ maxWidth: '30px' }} />
          {headers.map(({ key, title, width = 'auto' }) => (
            <div key={key} style={{ maxWidth: width }}>
              {title}
            </div>
          ))}
        </HeaderTable>
        <RowContainer>
          {filteredItems.map((item, index) => (
            <RowTable key={item.key} onClick={() => onClickRow(item)}>
              <TableCell style={{ maxWidth: '30px' }} key={index}>
                {index}
              </TableCell>
              {headers.map(({ key, render, width = 'auto' }) => (
                <TableCell key={key} style={{ maxWidth: width }}>
                  {render ? render(item) : item[key]}
                </TableCell>
              ))}
            </RowTable>
          ))}
        </RowContainer>
      </Table>
    </div>
  );
};

export default CommonTable;

import styled from 'styled-components';
import React from 'react';

import { ReactComponent as SearchIcon } from './assets/search_black_24dp.svg';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.1rem;
  border-radius: 10px;
  border: 1px solid #e9e9e9;
  padding: 5px 7px;

  & svg {
    fill: #646464;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;

  &::placeholder {
    user-select: none;
  }
`;

export default function SearchInput({
  search,
  onChange,
}: {
  search: string;
  onChange: (content: string) => void;
}) {
  return (
    <Box>
      <SearchIcon />
      <Input
        type="text"
        value={search}
        placeholder="검색"
        onChange={e => onChange(e.target.value)}
      />
    </Box>
  );
}

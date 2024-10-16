"use client";

import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #f3f9d2;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(178, 178, 178, 0.2);
  width: 50%;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;
  gap: 1.2rem;
`;

const Label = styled.label`
  margin-top: 0.3rem;
`;

const Select = styled.select`
  padding: 5px;
  border: 1px solid #f3f9d2;
  border-radius: 4px;
  color: #ebd8da;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #ebd8da;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #f3f9d2;
  text-align: left;
  color: #000;
  background-color: #f3f9d2aa;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #f3f9d2;
`;

const NoRecordsMessage = styled.td`
  text-align: center;
  padding: 20px;
  color: #f3f9d2;
`;

const convertObjectToArray = (obj) => {
  return Object.values(obj);
};

export default function HistoryTable({ history, settings }) {
  const [sortOption, setSortOption] = useState("");
  const historyArray = convertObjectToArray(history);

  const sortedHistory = [...historyArray].sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.changeAt) - new Date(a.changeAt);
    } else if (sortOption === "room") {
      return a.roomId.name.localeCompare(b.roomId.name);
    }

    return 0;
  });

  return (
    <Wrapper>
      <SortContainer>
        <Label htmlFor="sortOption">Sort by: </Label>{" "}
        <Select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">No sorting</option>
          <option value="date">Sort by date</option>
          <option value="room">Sort by room</option>
        </Select>
      </SortContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Room</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Temperature</TableHeader>
            <TableHeader>Humidity</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedHistory.length > 0 ? (
            sortedHistory.map((record, index) => (
              <HistoryRow key={index} record={record} />
            ))
          ) : (
            <tr>
              <NoRecordsMessage colSpan="5">No records found</NoRecordsMessage>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
}

function HistoryRow({ record }) {
  return (
    <tr>
      <TableCell>{record.roomId.name}</TableCell>
      <TableCell>{new Date(record.changeAt).toLocaleDateString()}</TableCell>
      <TableCell>{record.temperature} &deg; C</TableCell>
      <TableCell>{record.humidity} %</TableCell>
    </tr>
  );
}

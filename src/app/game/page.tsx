"use client";

import { CustomHeader, CustomTable, StringCell } from "@/components";
import Image from "next/image";
import { useMemo, useState } from "react";
import { GameTypes, dataGame } from "./table/data";
import { CellProps } from "react-table";
import CellAction from "./table/CellAction";

export default function Page() {
  const [dataChange, setDataChange] = useState(dataGame);
  const onChange = (value: any, data: any) => {
    const id = data.column.id;
    const rowId = parseInt(data.row.id);

    setDataChange((prevData) => {
      const newDataChange = [...prevData];
      newDataChange[rowId] = {
        ...newDataChange[rowId],
        [id]: parseFloat(value),
      };
      return newDataChange;
    });
  };

  const columns = useMemo(() => {
    return [
      {
        Header: (props: any) => <CustomHeader tableProps={props} title="#" />,
        id: "no",
        Cell: (props: CellProps<GameTypes>) => (
          <StringCell text={String(props.row.index + 1)} wrap={false} />
        ),
      },
      {
        Header: (props: any) => (
          <CustomHeader tableProps={props} title="Banceng 1" />
        ),
        id: "banceng_1",
        Cell: (props: CellProps<GameTypes>) => (
          <CellAction data={props} onChange={onChange} />
        ),
        accessor: "banceng_1",
        Footer: (info: any, sx: any) => {
          const totalScores = info.rows.reduce(
            (sum: any, row: any) => sum + row.values.banceng_1,
            0
          );
          return (
            <StringCell
              text={String(Number.isNaN(totalScores) ? 0 : totalScores)}
              wrap={false}
            />
          );
        },
      },
      {
        Header: (props: any) => (
          <CustomHeader tableProps={props} title="Banceng 2" />
        ),
        id: "banceng_2",
        Cell: (props: CellProps<GameTypes>) => (
          <CellAction data={props} onChange={onChange} />
        ),
        accessor: "banceng_2",
        Footer: (info, sx) => {
          const totalScores = info.rows.reduce(
            (sum: any, row: any) => sum + row.values.banceng_2,
            0
          );
          return (
            <StringCell
              text={String(Number.isNaN(totalScores) ? 0 : totalScores)}
              wrap={false}
            />
          );
        },
      },
      {
        Header: (props: any) => (
          <CustomHeader tableProps={props} title="Banceng 3" />
        ),
        id: "banceng_3",
        Cell: (props: CellProps<GameTypes>) => (
          <CellAction data={props} onChange={onChange} />
        ),
        accessor: "banceng_3",
        Footer: (info, sx) => {
          const totalScores = info.rows.reduce(
            (sum: any, row: any) => sum + row.values.banceng_3,
            0
          );
          return (
            <StringCell
              text={String(Number.isNaN(totalScores) ? 0 : totalScores)}
              wrap={false}
            />
          );
        },
      },
      {
        Header: (props: any) => (
          <CustomHeader tableProps={props} title="Banceng 4" />
        ),
        id: "banceng_4",
        Cell: (props: CellProps<GameTypes>) => (
          <CellAction data={props} onChange={onChange} />
        ),
        accessor: "banceng_4",
        Footer: (info, sx) => {
          const totalScores = info.rows.reduce(
            (sum: any, row: any) => sum + row.values.banceng_4,
            0
          );
          return (
            <StringCell
              text={String(Number.isNaN(totalScores) ? 0 : totalScores)}
              wrap={false}
            />
          );
        },
      },
    ];
  }, []);
  const data = useMemo(() => dataChange, [dataChange]);

  return (
    <>
      <main className="game-wrapper">
        <div className="gamebox w-full md:w-6/12 p-[1rem]">
          <div className="gamebox-header px-2 py-3 flex justify-center">
            <Image
              src="/banceng-trues-logo-small-dark.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className="gamebox-table mt-2 w-full">
            <CustomTable data={data} columns={columns} withFooter />
          </div>
        </div>
      </main>
    </>
  );
}

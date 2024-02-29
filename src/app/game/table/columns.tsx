"use client";

import { CellProps, Column } from "react-table";
import { CustomHeader, StringCell } from "@/components";
import { GameTypes } from "./data";
import CellAction from "./CellAction";

const gameTableColumns: ReadonlyArray<Column<GameTypes>> = [
  {
    Header: (props) => <CustomHeader tableProps={props} title="#" />,
    id: "no",
    Cell: (props: CellProps<GameTypes>) => (
      <StringCell text={String(props.row.index + 1)} wrap={false} />
    ),
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Banceng 1" />,
    id: "banceng_1",
    Cell: (props: CellProps<GameTypes>) => <CellAction data={props} />,
    accessor: "banceng_1",
    Footer: (info, sx) => {
      const totalScores = info.rows.reduce(
        (sum, row) => sum + row.values.banceng_1,
        0
      );
      return <StringCell text={String(totalScores)} wrap={false} />;
    },
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Banceng 2" />,
    id: "banceng_2",
    Cell: (props: CellProps<GameTypes>) => (
      <StringCell
        text={String(props.row.original.banceng_2 || 0)}
        wrap={false}
      />
    ),
    accessor: "banceng_2",
    Footer: (info, sx) => {
      const totalScores = info.rows.reduce(
        (sum, row) => sum + row.values.banceng_2,
        0
      );
      return <StringCell text={String(totalScores)} wrap={false} />;
    },
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Banceng 3" />,
    id: "banceng_3",
    Cell: (props: CellProps<GameTypes>) => (
      <StringCell
        text={String(props.row.original.banceng_3 || 0)}
        wrap={false}
      />
    ),
    accessor: "banceng_3",
    Footer: (info, sx) => {
      const totalScores = info.rows.reduce(
        (sum, row) => sum + row.values.banceng_3,
        0
      );
      return <StringCell text={String(totalScores)} wrap={false} />;
    },
  },
  {
    Header: (props) => <CustomHeader tableProps={props} title="Banceng 4" />,
    id: "banceng_4",
    Cell: (props: CellProps<GameTypes>) => (
      <StringCell
        text={String(props.row.original.banceng_4 || 0)}
        wrap={false}
      />
    ),
    accessor: "banceng_4",
    Footer: (info, sx) => {
      const totalScores = info.rows.reduce(
        (sum, row) => sum + row.values.banceng_4,
        0
      );
      return <StringCell text={String(totalScores)} wrap={false} />;
    },
  },
];

export default gameTableColumns;

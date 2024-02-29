'use client'
import { FC } from 'react';
import { Column, ColumnInstance, Row, useTable } from 'react-table';
import CustomHeaderColumn from './CustomHeaderColumn';
import CustomRow from './CustomRow';

type Props = {
	columns: any;
	data: any[];
	withFooter?: boolean;
	onClick?: (data: any) => void;
};
export const CustomTable: FC<Props> = ({ columns, data, withFooter = false, onClick }) => {
	const { getTableProps, getTableBodyProps, footerGroups, headers, rows, prepareRow } = useTable({
		columns,
		data,
	});

	return (
		<table className='table' {...getTableProps()}>
			<thead>
				<tr>
					{headers.map((column: ColumnInstance<any>) => (
						<CustomHeaderColumn key={column.id} column={column} />
					))}
				</tr>
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.length > 0 ? (
					rows.map((row: Row<any>, i) => {
						prepareRow(row);
						return <CustomRow row={row} key={row.id} onClick={onClick} />;
					})
				) : (
					<tr>
						<td colSpan={headers?.length}>
							<div className='d-flex text-center w-100 align-content-center justify-content-center'>
								No matching records found
							</div>
						</td>
					</tr>
				)}
			</tbody>
			<tfoot className='bg-success text-white'> 
				{withFooter && rows.length > 0 && footerGroups.map((footerGroup, index) => (
					<tr {...footerGroup.getFooterGroupProps()} key={index}>
						{footerGroup.headers.map((column) => (
							<td {...column.getFooterProps()} key={index}>{column.render('Footer')}</td>
						))}
					</tr>
				))}
			</tfoot>
		</table>
	);
};
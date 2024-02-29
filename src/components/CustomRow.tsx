import classNames from 'classnames';
import { FC } from 'react';
import { Row } from 'react-table';

type Props = {
	row: Row<any>;
	className?: string;
	onClick?: (data?: any) => void;
};

const CustomRow: FC<Props> = ({ row, className = '', onClick }) => (
	<tr {...row.getRowProps()} className={className} onClick={onClick}>
		{row.cells.map((cell) => {
			return (
				<td
					{...cell.getCellProps()}
					className={classNames({
						'text-end min-w-100px': cell.column.id === 'actions',
						'cursor-pointer': Boolean(onClick),
					})}>
					{cell.render('Cell')}
				</td>
			);
		})}
	</tr>
);

export default CustomRow;

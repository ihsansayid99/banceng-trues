import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { HeaderProps } from 'react-table';

type Props = {
	className?: string;
	title?: string;
	tableProps: any;
};

export const CustomHeader: FC<Props> = ({ className, title, tableProps }) => {
	return (
		<th
			{...tableProps.column.getHeaderProps()}
			className={classNames(className, 'fw-normal', 'text-nowrap')}
			style={{ cursor: 'pointer' }}>
			{title}
		</th>
	);
};

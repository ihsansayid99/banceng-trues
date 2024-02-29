import classNames from 'classnames';
import { FC, useMemo } from 'react';

type Props = {
	text?: string;
	wrap?: boolean;
	showDash?: boolean;
};

export const StringCell: FC<Props> = ({ text, wrap, showDash = false }) => {
	const renderValue = useMemo(() => {
		if (text) return text;
		if (showDash) return '-';
		return '';
	}, [text]);
	return (
		<div
			className={classNames('d-flex', 'justify-content-center', 'align-items-center', 'fw-semibold', {
				'text-nowrap': !wrap,
			})}>
			{renderValue}
		</div>
	);
};


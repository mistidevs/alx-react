import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const headerStyle = {
  backgroundColor: '#deb5b545'
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr style={isHeader ? headerStyle : rowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th className={css(styles.th, styles.thAndTd)} colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th className={css(styles.th, styles.thAndTd)}>{textFirstCell}</th>
						<th className={css(styles.th, styles.thAndTd)}>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td className={css(styles.thAndTd)}>{textFirstCell}</td>
					<td className={css(styles.thAndTd)}>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

const styles = StyleSheet.create({
	th: {
    borderBottom: '1px solid #ddd',
  },
  thAndTd: {
    width: '80%',
  },
  trNthChild2: {
    ':nth-child(2)': {
      textAlign: 'left',
    },
  },
})

export default CourseListRow;

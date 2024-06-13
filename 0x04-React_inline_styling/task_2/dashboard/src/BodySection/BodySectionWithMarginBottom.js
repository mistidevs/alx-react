import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const BodySectionWithMarginBottom = ({ title, children }) => {
	return (
		<div className={css(style.bodySectionWithMargin)}>
			<BodySection title={title}>{children}</BodySection>
		</div>
	);
};

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

const style = StyleSheet.create({
	bodySectionWithMargin: {
		marginBottom: '40px'
	},
});

export default BodySectionWithMarginBottom;

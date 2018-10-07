import * as React from 'react';
const SpinnerComponent = (props) => {
		if (props.loading) {
				return (
				<div className="spinner-mask">
						<div className="sp-spinner">
							
						</div>
				</div>);
		}
		return null;
};

export {SpinnerComponent};

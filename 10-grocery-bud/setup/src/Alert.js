import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert, list }) => {
	useEffect(() => {
		let time = setTimeout(() => {
			removeAlert();
		}, 3000);
		return () => {
			clearTimeout(time);
		};
		// list se pasa como dependencia para que cada vez que cambie la lista de productos, se ejecuta otra vez este useffect y no quite la alerta repentinamente
	}, [list]);

	return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;

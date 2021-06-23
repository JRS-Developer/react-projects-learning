import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

//* Muy extenso este codigo, en verdad, se puso completo rapidamente

const getLocalStorage = () => {
	const list = localStorage.getItem('list');
	if (list) {
		return JSON.parse(localStorage.getItem('list'));
	} else {
		return [];
	}
};

function App() {
	const [name, setName] = useState('');
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editId, setEditId] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		msg: '',
		type: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!name) {
			showAlert(true, 'Please, enter value', 'danger');
		} else if (name && isEditing) {
			setList(
				list.map((item) => {
					if (item.id === editId) {
						return { ...item, title: name };
					}
					return item;
				})
			);
			showAlert(true, 'Item edited', 'success');
			setName('');
			setIsEditing(false);
			setEditId(null);
		} else {
			showAlert(true, 'Item added', 'success');
			const newItem = {
				id: new Date().getTime().toString(),
				title: name,
			};
			setList([...list, newItem]);
			setName('');
		}
	};

	const showAlert = (show = false, msg = '', type = '') => {
		setAlert({
			show,
			type,
			msg,
		});
	};

	const clearList = () => {
		setList([]);
		showAlert(true, 'Empty list', 'danger');
		localStorage.removeItem('list');
	};

	const removeItem = (itemID) => {
		const newItems = list.filter((oldItem) => oldItem.id !== itemID);
		setList(newItems);
		showAlert(true, 'item removed', 'danger');
	};

	const editItem = (id) => {
		const specificItem = list.find((item) => id === item.id);
		setIsEditing(true);
		setEditId(id);
		setName(specificItem.title);
	};

	useEffect(() => {
		localStorage.setItem('list', JSON.stringify(list));
	}, [list]);

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && (
					<Alert {...alert} removeAlert={showAlert} list={list} />
				)}
				<h3>Grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. eggs'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			{list.length > 0 && (
				<div className='grocery-container'>
					<List
						items={list}
						removeItem={removeItem}
						editItem={editItem}
					/>
					<button className='clear-btn' onClick={clearList}>
						clear items
					</button>
				</div>
			)}
		</section>
	);
}

export default App;

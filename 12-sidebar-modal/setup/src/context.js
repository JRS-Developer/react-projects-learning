import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvinder = ({ children }) => {
	const [isSidebarOpen, setIsSiderbarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSiderbarOpen(true);
	};

	const closeSidebar = () => {
		setIsSiderbarOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				isSidebarOpen,
				openModal,
				closeModal,
				openSidebar,
				closeSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvinder };

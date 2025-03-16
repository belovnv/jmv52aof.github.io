import AppRouter from './router/AppRouter'
import { useEffect, useState } from 'react'
import { RootState } from '@common/types/app'
import { DEFAULT_ROOT_STATE } from '@common/consts/app'
import { RootStateContext } from 'contexts/RootStateContext'
import { initializeMockEnvironment } from '@common/functions/telegram'
import {
	backButton,
	init,
	miniApp,	
} from '@telegram-apps/sdk-react';
import BackButton from '@components/ui/backButton/BackButton'

if (import.meta.env.DEV) 
	initializeMockEnvironment()

export default function App() {
	init();
  	if (!miniApp.isMounting && !miniApp.isMounted()) miniApp.mount()
	const [rootState, setRootState] = useState<RootState>(DEFAULT_ROOT_STATE)
	useEffect(() => {
		if (!backButton.isMounted()) backButton.mount()	
	}, [])
	return (
		<RootStateContext.Provider
			value={{
				...rootState,
				setStationFilters: filters =>
					setRootState({
						...rootState,
						stationFilters: filters,
					}),
				setStations: stations =>
					setRootState({
						...rootState,
						stations: stations,
						stationFilters: {
							...rootState.stationFilters,
							shouldUpdateStations: false,
						},
					}),
				setPosition: position => 
					setRootState({
						...rootState,
						position: position
					})
			}}
		>
			<BackButton />
			<AppRouter />
		</RootStateContext.Provider>
	)
}

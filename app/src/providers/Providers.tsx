'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryParamsProvider } from './QueryParamsProvider';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<QueryParamsProvider>{children}</QueryParamsProvider>
		</NextUIProvider>
	);
}

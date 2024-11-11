'use client';

import { NextUIProvider } from '@nextui-org/react';
import { QueryParamsProvider } from './QueryParamsProvider';
import { Suspense } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<NextUIProvider>
			<Suspense>
				<QueryParamsProvider>{children}</QueryParamsProvider>
			</Suspense>
		</NextUIProvider>
	);
}

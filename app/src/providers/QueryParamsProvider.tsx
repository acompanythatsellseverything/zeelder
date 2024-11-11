'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useSearchParams } from 'next/navigation';

interface QueryParams {
  [key: string]: string;
}

const saveQueryParamsToLocalStorage = (params: QueryParams) => {
  localStorage.setItem('queryParams', JSON.stringify(params));
};

const getQueryParamsFromLocalStorage = (): QueryParams => {
  const storedParams = localStorage.getItem('queryParams');
  return storedParams ? JSON.parse(storedParams) : {};
};

const QueryParamsContext = createContext<QueryParams | undefined>(undefined);

interface QueryParamsProviderProps {
  children: ReactNode;
}

export const QueryParamsProvider: React.FC<QueryParamsProviderProps> = ({ children }) => {
  const searchParams = useSearchParams();
  const [queryParams, setQueryParams] = useState<QueryParams>(getQueryParamsFromLocalStorage);

  // Update query parameters when the route changes
  useEffect(() => {
    const params: QueryParams = {};
    searchParams.forEach((value, key) => {
      params[key] = value;
    });

		if(Object.entries(params).length >0) {
			setQueryParams(params);
			saveQueryParamsToLocalStorage(params);
		}
  }, [searchParams]);

  return (
    <QueryParamsContext.Provider value={queryParams}>
      {children}
    </QueryParamsContext.Provider>
  );
};

// Hook to use query parameters
export const useQueryParams = (): QueryParams => {
  const context = useContext(QueryParamsContext);
  if (!context) {
    throw new Error('useQueryParams must be used within a QueryParamsProvider');
  }
  return context;
};

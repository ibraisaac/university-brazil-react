import React, { createContext, useState } from 'react';
import { University } from '../models/University';
import { UniversityContextType } from './UniversityContextType';
import { get } from '../services/UniversityService';

export const UniversityContext = createContext<UniversityContextType>(
    {
        universities: [],
    }
);

const UniversityProvider = (props: any) => { 
    const [universities] = useState<University[]>(get);

    return (
        <UniversityContext.Provider value={{ universities }}>
            {props.children}
        </UniversityContext.Provider>
    );
}

export default UniversityProvider;

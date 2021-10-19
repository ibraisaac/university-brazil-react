import React, { useContext } from 'react';
import { UniversityContext } from '../contexts/UniversityContext';
import { UniversityContextType } from '../contexts/UniversityContextType';
import UniversityListItem from './UniversityListItem';

const UniversityList = () => {
    const { universities } = useContext<UniversityContextType>(UniversityContext);

    return (
        <table className="uk-table">
            <caption>Relação</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Web Pages</th>
                        <th>Domains</th>
                        <th>State Province</th>
                    </tr>
                </thead>
            <tbody>
                {
                    universities?.map(
                        university => (<UniversityListItem key={university.name} university={university}></UniversityListItem>)
                    )
                }
            </tbody>
        </table>
    );
}

export default UniversityList;
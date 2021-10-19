import { University } from '../models/University';

interface UniversityListItemProps {
    university: University
}

const UniversityListItem = (props: UniversityListItemProps) => {
    return (
        <tr className="uk-animation-slide-bottom-medium">
        <td className="uk-width-expand">{props.university.name}</td>
        <td className="uk-width-expand">{props.university.web_pages}</td>
        <td className="uk-width-expand">{props.university.domains}</td>
        <td className="uk-width-expand">{props.university.state_province}</td>
    </tr>
    ); 
}

export default UniversityListItem;
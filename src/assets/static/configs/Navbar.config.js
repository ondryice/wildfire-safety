import { HomePage } from '../../components/HomePage/HomePage';

export const SECTIONS = [
    {   name: 'logo',
        text: 'Logo Goes Here',
        getContent: (props)=> { return null; }
    },
    {   name: 'home',
        text: 'Home',
        getContent: (props)=> { return <HomePage {...props} /> }
    }
];

export function getSection(name) {
    return SECTIONS.find((section)=> {
        return section.name === name;
    });
}
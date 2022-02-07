import { HomePage } from '../../components/HomePage/HomePage';

// to render a section's contents by name, simply use `renderContent(name)`

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

export function renderContent(name, props) {
    let sect = getSection(name);
    return getSection(name).getContent(props || {});
}
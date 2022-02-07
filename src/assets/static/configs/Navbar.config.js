import { HomePage } from '../../components/HomePage/HomePage';

// to add sections, use the format below
//   name: must be a unique string
//   text: what the navbar button will contain
//   getContent: returns the associated page component; return null if no page switch
//   [Not-Yet-Implemented] endpoint: URL endpoint to reach contents (leave undefined or explicitly define as
//     null to indicate no associated URL endpoint)
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

// to render a section's contents by name, use `renderContent(name: string, props (optional): object)`
//   where `name` must match (one of `SECTIONS`).name
//   and `props` contains *all* necessary props to be passed to the content
// if `name` is invalid, ie not present within `SECTIONS`, returns `undefined`
export function renderContent(name, props) {
    return getSection(name)?.getContent(props || {}) || undefined;
}
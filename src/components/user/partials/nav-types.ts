interface NavLink {
    label: string;
    target?: string;
    href?: string;
}

interface NestedLink extends NavLink {
    links?: NavLink[];
}

interface SubLink extends NavLink {
    links?: NavLink[];
    sublinks?: SubSubLink[];
}

interface SubSubLink extends NavLink {
    subsublinks?: NavLink[];
}

export interface NavItem {
    label: string;
    href?: string;
    links?: NestedLink[];
    sublinks?: SubLink[];
}
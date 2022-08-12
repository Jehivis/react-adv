import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

interface Route{
    path: string;
    to: string;
    Component:() => JSX.Element;
    name:string;
}

export const routes: Route[] = [
    {
        path:"/lazy1",
        to:"lazy1",
        Component: LazyPage1,
        name:"lazy-1"
    },
    {
        path:"/lazy1",
        to:"lazy1",
        Component: LazyPage2,
        name:"lazy-1"
    },
    {
        path:"/lazy1",
        to:"lazy1",
        Component: LazyPage3,
        name:"lazy-1"
    },
];
import { ReactNode } from "react";

export default function PageSection({children, link} : {children: ReactNode, link: string})
{
    return <section className="container mx-auto py-50" id={link}>
        {children}
    </section>;
}
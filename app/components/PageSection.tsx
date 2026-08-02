import { ReactNode } from "react";

export default function PageSection({children, link} : {children: ReactNode, link: string})
{
    return <section className="relative py-50 w-3/5" id={link}>
        {children}
    </section>;
}
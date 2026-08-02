import { Profile } from "../Types/Profile"

export const profile: Profile =
{
    person: {
        firstName: 'Mi-Yeon',
        lastName: 'Kim',
        initial: 'MK',
        title: 'Software Engineer',
        pronouns: 'She/Her',
    },

    links: {
        linkedin: 'miyeonkim',
        email: 'miyeonkim.dev+website@gmail.com',
        resume: '/Resume.pdf',
    },

    about: {
        short: "Software Engineer",
        detail: "I'm a Software Engineer with 10+ years of experience delivering modernization for full-stack projects, as well as desktop applications. Solving complex problems with no clear answer is my passion. While not delivering enterprise code, I enjoy reverse engineering, game modding, and game developmment.",
    },

    jobs: [
        {
            title: "Senior Full-Stack Software Engineer",
            company: "InvestCloud, Inc.",
            timeline: {
                start: "Feb. 2019",
                end: "Jun. 2025"
            },
            descriptions: [
                "Partnered with InfoSec team to remediate OWASP Top 10 and CVE risks across legacy and active codebases, reducing security exposure across client-facing and internal applications.",
                "Maintained a modular full-stack application in C#, ASP.NET Core, Angular,  Node.js, and MS SQL, supporting 500+ clients and thousands of end users per client.",
                "Developed and upgraded internal deployment and transpiler tools in WinForms, WPF, and C# with multithreading.",
                "Designed and upgraded RESTful API endpoints for transacting with a private-cloud data warehouse.",
                "Implemented ADA and AODA accessibility standards for 100% of client-facing utilities, improving compliance and usability for end users.",
                "Automated data-management workflows with scripts and CI/CD pipelines, reducing manual effort for internal teams.",
                "Mentored 5 software developers through code reviews, architecture guidance, and delivery support, strengthening team execution and technical consistency.",
                "Coordinated delivery using Agile/SCRUM ceremonies, daily standups, and retrospectives in place of project management.",
            ],
            tags: [
                "C#", 
                "ASP.NET Core", 
                "Angular", 
                "HTML", 
                "CSS", 
                "JavaScript", 
                "TypeScript", 
                "REST", 
                "SQL Server", 
                "Node.js", 
                "JSON", 
                "WinForms", 
                "WPF",
                "Python", 
                "DevOps",
            ]
        },
        {
            title: "President & Lead Software Engineer",
            company: "Busytime Studio",
            timeline: {
                start: "Jun. 2014",
                end: "Oct. 2020"
            },
            descriptions: [
                "Consulted on a full-stack rewrite of legacy a ASP.NET and SQL Server platform using MongoDB, Express, Angular, and Node.js microservices deployed to AWS.",
                "Delivered responsive storefront websites for 30+ clients using JavaScript, HTML/CSS, and Bootstrap, balancing custom requirements and repeatable delivery.",
                "Led cross-functional planning and coordination to deliver multiple client projects simultaneously while managing scope, priorities, and deadlines."
            ],
            tags: [
                "C#", 
                "ASP.NET", 
                "TypeScript", 
                "Angular", 
                "Node.js", 
                "Express.js",
                "Bootstrap",
                "HTML", 
                "CSS", 
                "JavaScript",
                "MongoDB", 
                "Project Management",
            ]
        },
        {
            title: "Full Stack .NET Developer (Contract)",
            company: "The Fulfillment Lab",
            timeline: {
                start: "Sep. 2016",
                end: "Oct. 2016"
            },
            descriptions: [
                "Led a rewrite of an internal serialization/deserialization microservice utilizing React, and Node.js as part of a system migration.",
                "Refactored internal tooling in ASP.NET MVC 5, C#, HTML/CSS/JavaScript, and MS SQL.",
                "Planned subsystem migration steps to preserve 99.9%+ uptime during code transitions and minimize service disruption."
            ],
            tags: [
                "C#", 
                "ASP.NET MVC", 
                "TypeScript", 
                "React", 
                "Node.js", 
                "Next.js",
                "HTML", 
                "CSS", 
                "JavaScript",
                "SQL Server", 
            ]
        },
        {
            title: "Lead Developer",
            company: "Online Orders Now",
            timeline: {
                start: "Sep. 2013",
                end: "Oct. 2015"
            },
            descriptions: [
                "Managed the upgrade deployment timelines for over 300 concurrent clients globally.",
                "Deployed new payment processing integrations including First Data, Sterling, and Mercury by defining SOAP endpoints and consuming RESTful APIs.",
                "Partnered with new vendors to expand POS technology support, doubling the number of supported platforms.",
                "Defined the modernization road-map for the code-base, which drove a successful redesign initiative and future platform upgrades.",
            ],
            tags: [
                "C#",
                "WinForms",
                "Windows Services",
                "REST",
                "SOAP",
                "Web Services",
                "WSDL",
                "POS",
                "Payment Processors", 
                "PCI-DSS",
                "HTML", 
                "CSS", 
                "JavaScript",
                "HCL Domino", 
            ]
        },
        {
            title: "Mobile App Developer",
            company: "Swartz Enterprises",
            timeline: {
                start: "Oct. 2011",
                end: "Feb. 2013"
            },
            descriptions: [
                "Brainstormed ideas to generate mock-ups for mobile apps.",
                "Designed and developed apps for iOS, and Android.",
                "Created and published apps for mobile storefronts utilizing cross-platform frameworks including Unity.",
            ],
            tags: [
                "C#",
                "WPF",
                "Unity3D", 
                "Photoshop",
                "Blender",
                "REST",
                "JavaScript"
            ]
        },
    ],

    projects: [
        {},
    ],
}
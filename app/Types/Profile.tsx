export type Job = {
    title: string;
    company: string;
    timeline: { start: string, end: string | "present" };
    descriptions: string[];
    tags: string[];
};

export type Profile = {
    person: {
        firstName: string;
        lastName: string;
        initial: string;
        pronouns: string;
        nouns: string[];
    };
    links: {
        linkedin: string;
        email: string;
        resume: string;
    };
    about: {
        short: string;
        detail: string;
    };
    jobs: Job[];
    projects: {}[];
};

// src/types/portfolio_data_types.ts

export type PortfolioData = {
    personal: PersonalData;
    education: EducationData;
    experiences: ExperienceData[];
    projects: ProjectData[];
    technicalSkills: TechnicalSkillsData;
};

export type PersonalData = {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    website: string;
};

export type EducationData = {
    institution: string;
    location: string;
    degree: string;
    startDate: string;
    endDate: string;
    coursework: string[];
    awards: string[];
};

export type ExperienceData = {
    title: string;
    organization: string;
    location: string;
    startDate: string;
    endDate: string;
    highlights: string[];
    links?: {
        label: string;
        url: string;
    }[];
};

export type ProjectData = {
    name: string;
    subtitle: string;
    date: string;
    technologies: string[];
    highlights: string[];
};

export type TechnicalSkillsData = {
    languages: string[];
    databasesAndStorage: string[];
    frameworks: string[];
    developerTools: string[];
    llmInference: string[];
};
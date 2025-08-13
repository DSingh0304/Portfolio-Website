import {project1 , project2 , project3} from "../assets/index"

export const projects = [
    {
        id: "project-1",
        title: "title-project-1",
        shortDesc: "short-description-project-1",
        fullDesc: "full-description-project-1",
        tech: ["tech-1" , "tech-2" ,"tech-3" ],
        tags: ["frontend" , "api"],
        repoUrl: "repoUrl-project-1",
        liveUrl: "liveUrl-project-1",
        images: {thumb: project1},
        featured: true,
        createdAt: "project-date"
    },
    {
        id: "project-2",
        title: "title-project-2",
        shortDesc: "short-description-project-2",
        fullDesc: "full-description-project-2",
        tech: ["tech-1" , "tech-2" ,"tech-3" ],
        tags: ["frontend" , "api"],
        repoUrl: "repoUrl-project-2",
        liveUrl: "liveUrl-project-2",
        images: {thumb:project2},
        featured: true,
        createdAt: "project-date"
    },
    {
        id: "project-3",
        title: "title-project-3",
        shortDesc: "short-description-project-3",
        fullDesc: "full-description-project-3",
        tech: ["tech-1" , "tech-2" ,"tech-3" ],
        tags: ["frontend" , "api"],
        repoUrl: "repoUrl-project-3",
        liveUrl: "liveUrl-project-3",
        images: {thumb:project3},
        featured: true,
        createdAt: "project-date"
    }
]

export const allTags = ["all", ...new Set(projects.flatMap(p => p.tags))];
export const allTech = [...new Set(projects.flatMap(p => p.tech))];
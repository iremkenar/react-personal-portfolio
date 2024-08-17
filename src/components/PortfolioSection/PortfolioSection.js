import React, { useState } from "react";
import ProjectCard from "./ProjectCard"
import { Box, Grid, Tabs, Tab } from "@mui/material";

const projects = [
    {
        id: '1',
        projectImage: 'img/jubilee-austen.png',
        projectCodeLink: 'https://github.com/iremkenar/Jubilee-Austen',
        projectLiveLink: 'https://iremkenar.github.io/Jubilee-Austen/',
        projectAltText: 'jubilee austen website thumbnail',
        mainTechnologyType: 'UI',
    },
    {
        id: '2',
        projectImage: 'img/unplugged.png',
        projectCodeLink: 'https://github.com/iremkenar/unplugged-2020-responsive-website',
        projectLiveLink: 'https://iremkenar.github.io/unplugged-2020-responsive-website/',
        projectAltText: 'unplugged website thumbnail',
        mainTechnologyType: 'UI',
    },
    {
        id: '3',
        projectImage: 'img/magic-8-ball.png',
        projectCodeLink: 'https://github.com/iremkenar/magic-8-ball-project',
        projectLiveLink: 'https://iremkenar.github.io/magic-8-ball-project/',
        projectAltText: 'magic 8 ball thumbnail',
        mainTechnologyType: 'JavaScript',

    },
    {
        id: '4',
        projectImage: 'img/dorothy-delong.png',
        projectCodeLink: null,
        projectLiveLink: 'https://xd.adobe.com/view/191c1984-91a1-4fb3-7321-e1cf89515628-6f2d/',
        projectAltText: 'dorothy design thumbnail',
        mainTechnologyType: 'UI',

    },
    {
        id: '5',
        projectImage: 'img/visionboard.png',
        projectCodeLink: 'https://github.com/iremkenar/Vision-Board-Project',
        projectLiveLink: 'https://iremkenar.github.io/Vision-Board-Project/',
        projectAltText: 'vision board thumbnail',
        mainTechnologyType: 'UI',

    },
    {
        id: '6',
        projectImage: 'img/lolcat-clock.png',
        projectCodeLink: 'https://github.com/iremkenar/lolcat-clock-project',
        projectLiveLink: 'https://iremkenar.github.io/lolcat-clock-project/',
        projectAltText: 'lolcat clock thumbnail',
        mainTechnologyType: 'JavaScript',

    },
    {
        id: '7',
        projectImage: 'img/us-election-map.png',
        projectCodeLink: 'https://github.com/iremkenar/election-map',
        projectLiveLink: 'https://iremkenar.github.io/election-map/',
        projectAltText: 'election map thumbnail',
        mainTechnologyType: 'JavaScript',

    },
    {
        id: '8',
        projectImage: 'img/rogue-pickings.png',
        projectCodeLink: 'https://github.com/iremkenar/206-making-rogue-pickings-responsible',
        projectLiveLink: 'https://iremkenar.github.io/Rogue-Pickings/',
        projectAltText: 'rogue picking website thumbnail',
        mainTechnologyType: 'UI',

    },
    {
        id: '9',
        projectImage: 'img/meetup-thumbnail.png',
        projectCodeLink: 'https://github.com/iremkenar/Next.js-meetup',
        projectLiveLink: 'https://next-js-meetup-1.vercel.app/',
        projectAltText: 'meetup application thumbnail',
        mainTechnologyType: 'React',

    },
    {
        id: '10',
        projectImage: 'img/tailwindcss-thumbnail.png',
        projectCodeLink: 'https://github.com/iremkenar/React-hook-form-yup-tailwindcss',
        projectLiveLink: 'https://iremkenar.github.io/React-hook-form-yup-tailwindcss/',
        projectAltText: 'tailwindcss thumbnail',
        mainTechnologyType: 'React',
    },
    {
        id: '11',
        projectImage: 'img/react-expense-tracker.png',
        projectCodeLink: 'https://github.com/iremkenar/React-Expense-Tracker',
        projectLiveLink: 'https://iremkenar.github.io/React-Expense-Tracker/',
        projectAltText: 'expense tracker thumbnail',
        mainTechnologyType: 'React',
    },
    {
        id: '12',
        projectImage: 'img/bankist-app.png',
        projectCodeLink: 'https://github.com/iremkenar/bankistApp',
        projectLiveLink: 'https://iremkenar.github.io/bankistApp/',
        projectAltText: 'bankist app thumbnail',
        mainTechnologyType: 'JavaScript',
    },
    {
        id: '13',
        projectImage: 'img/word-game.png',
        projectCodeLink: 'https://github.com/iremkenar/wordGame',
        projectLiveLink: 'https://iremkenar.github.io/wordGame/',
        projectAltText: 'word game thumbnail',
        mainTechnologyType: 'JavaScript',
    },
]


const PortfolioSection = () => {

    const [selectedTab, setSelectedTab] = useState(0);
    const tabTechnologies = ['All', 'React', 'JavaScript', 'UI'];

    const handleTabChange = (_, newValue) => {
        setSelectedTab(newValue);
    };
    const filteredProjects = selectedTab === 0 ? projects : projects.filter(project => project.mainTechnologyType === tabTechnologies[selectedTab]);

    return (
        <Box id='portfolio-section' sx={{ backgroundColor: 'rgba(255, 255, 255, 0.85)', minHeight: '500px' }}>
            <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                centered
                sx={{ marginY: '1rem' }}
            >
                {tabTechnologies.map((tab) => <Tab sx={{ fontSize: '1.25rem' }} label={tab} />)}
            </Tabs>
            <Grid
                container
                rowSpacing={1}
            >
                {filteredProjects.map((project) => {
                    return (<Grid item xs={4} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} >
                        <ProjectCard
                            key={project.id}
                            projectImage={project.projectImage}
                            projectCodeLink={project.projectCodeLink}
                            projectLiveLink={project.projectLiveLink}
                            projectAltText={project.projectAltText}
                        />
                    </Grid>
                    )
                }
                )}

            </Grid>
        </Box >
    )
}

export default PortfolioSection;
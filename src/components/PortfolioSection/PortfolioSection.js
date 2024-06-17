import React from "react";
import ProjectCard from "./ProjectCard"
import { Box, Grid } from "@mui/material";

const PortfolioSection = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
                <Grid item xs={6}>
                    <ProjectCard />
                </Grid>
            </Grid>
        </Box>
    )
}

export default PortfolioSection;
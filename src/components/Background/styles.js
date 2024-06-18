import { styled } from "@mui/system";

export const ParallaxBackground = styled("div")({
    backgroundImage: "url('../img/aletsch-arena2.png')",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
});

export const Content = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.common.white,
}));
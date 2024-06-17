import { styled } from "@mui/system";

export const ParallaxContainer = styled("div")({
    position: "relative",
    height: "100vh",
    overflow: "hidden",
});

export const ParallaxBackground = styled("div")({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    zIndex: -1,
    transform: "translateZ(0)",
});

export const Content = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.common.white,
}));

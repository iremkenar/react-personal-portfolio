import { styled } from "@mui/system";

export const Content = styled("div")(({ theme }) => ({
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.common.white,
}));
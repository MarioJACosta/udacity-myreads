import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useLocation} from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import SearchAction from "./SearchAction";

const EmptyShelf = () => {
    const location = useLocation()

    return (
        location.pathname !== '/search' &&
        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography variant="body1" component="div" align={"center"}>
                    You have no books in this shelf.
                </Typography>
            </CardContent>
            <CardActions>
                <SearchAction value={"Search"}/>
            </CardActions>
        </Card>
    )
};

export default EmptyShelf;

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import OpenSearchButton from "./OpenSearchButton";
import SearchAction from "./SearchAction";

const EmptyBooks = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{minHeight: '100vh'}}
            p={4}
        >

            <Grid item xs={3}>
                <Card sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography variant="h5" component="div" align={"center"}>
                            You have no books selected.
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            Please go search your favorite books and add them to your shelfs.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <SearchAction value={"Find your books"}/>
                    </CardActions>
                </Card>
            </Grid>
            <OpenSearchButton/>
        </Grid>
    )
};

export default EmptyBooks;

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";

const EmptySearch = ({query}) => {
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
                            Couldn't find any books for {query}
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary" align={"center"}>
                            Please try again.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};

export default EmptySearch;

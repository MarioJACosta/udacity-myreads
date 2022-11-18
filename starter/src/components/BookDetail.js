import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from "prop-types";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const BookDetail = ({book, handleClose, open}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        {
                            book.imageLinks &&
                            <Img alt={book.title} src={book.imageLinks.thumbnail}/>

                        }
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h4" component="div">
                            {book.title}
                        </Typography>
                        {
                            book.authors &&
                            <Typography variant="subtitle1">
                                {book.authors.map((author, index) => (
                                    (index ? ', ' : '') + author
                                ))}
                            </Typography>
                        }
                        <Typography variant="body2" color="text.secondary">
                            Publisher: {book.publisher}
                        </Typography>
                    </Grid>
                </Grid>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            </DialogTitle>
            <DialogContent dividers={true}>
                <DialogContentText>
                    {book.description}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
};

BookDetail.propTypes = {
    book: PropTypes.object.isRequired,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}

export default BookDetail;

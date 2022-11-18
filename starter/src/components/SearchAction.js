import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";

const SearchAction = ({value}) => {
    let navigate = useNavigate();

    const routeChange = () => {
        navigate('/search');
    };
    return (
        <Button
            sx={{marginLeft: '40%'}}
            size="small"
            onClick={routeChange}
        >
            {value}
        </Button>
    )
};

SearchAction.propTypes = {
    value: PropTypes.string.isRequired
};

export default SearchAction;

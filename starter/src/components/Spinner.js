import {TailSpin} from 'react-loader-spinner'

const Spinner = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="#2e7c31"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
};

export default Spinner;
import '../style/header.css'

function background(props) {
    const data = props;
    return (
        <img id='background' src={data} alt='background' />
        );
};
export default background
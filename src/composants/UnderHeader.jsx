import imageTree from '../ressources/IMG.png'
import '../style/underHeader.css'

function UnderHeader() {
    return (
       <div className='image-with-text'>
        <img src={imageTree} alt='tree'/>
        <p className='text-section'>Chez vous, partout et ailleurs</p>
       </div>
        );
};
export default UnderHeader
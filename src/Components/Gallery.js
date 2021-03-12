import React, 
	{ 
		useState
	} from 'react';
import styles from '../Styles/Components/Gallery.module.css';

// Reference used: https://codepen.io/DZuz14/pen/XxKLVY?editors=0110
// Basically the same but translated to using functional component with hooks

const Gallery = (props) => {
	const [index, setIndex] = useState(1);

	let images = props.images;

	if (images.length < 2) {
		return null;
	}

	const movePrev = () => {
		setIndex(index+1);
	}

	const moveNext = () => {
		setIndex(index-1);
	}

	return (
		<div className={styles.gallery}>
			<img src={images[images.length - 1]} id="lastClone" alt=""/>
			{
				images.map((image, i) => (
					<img src={image} key={i} alt=""/>
				))
			}
			<img src={images[0]} id="firstClone" alt=""/>
			<button onClick={movePrev}>Prev</button>
			<button onClick={moveNext}>Next</button>
		</div>
	);
};

export default Gallery;


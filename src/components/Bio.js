import React from 'react'
import image from '../images/kevin.jpg'
function Bio() {
    return (
			<div className='bio'>
				<div className='image'>
					<img src={image} alt='' />
				</div>
				<div className='bio_context'>
					<h1 className='bio_name'>NKUSI Kevin</h1>
					<h2>FUll-Stack Software Developer</h2>
					<h3>Tech Stack: HTML5, CSS5,JavaScript,REACTjs,Nodejs</h3>
					<p className='date'>19-August-2021</p>
				</div>
			</div>
		);
}

export default Bio

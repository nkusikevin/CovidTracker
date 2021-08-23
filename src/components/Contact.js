import React from 'react'
import '../App.css'
function Contact() {
    return (
			<div className='reachMe'>
				<h1>REACH ME</h1>
				<p>[Email]</p>
				<p className='email'>nkusikvnhart@gmail.com</p>
				<p>[Phone]</p>
				<p className='phone'>+250783462327</p>
				<p>[Profile]</p>
				<div className='port'>
					<a
						href='https://nkusikevinhart.netlify.app/'
						rel='noreferrer'
						target='_blank'>
						My Portfolio
					</a>
				</div>
			</div>
		);
}

export default Contact

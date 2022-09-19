import heroImage from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className="hero-section">
            <img className='hero-image' src={heroImage} />
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}
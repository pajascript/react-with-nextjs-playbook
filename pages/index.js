import Image from 'next/image'

import { asTheSunSpeaks, divinity, synchronicity, theUndertaking } from '../public/images/albums'
import heroBanner from '../public/images/hero-banner.png'
import soundwaves from '../public/images/soundwaves.jpg'
import styles from './HomePage.module.scss'

const HomePage = () => {
  return (
    <>
      <div className={styles.heroImage}>
        <Image src={heroBanner} layout='fill' objectFit='cover' />
      </div>
      <div className={styles.cta}>
        <span className={styles.image}>
          <Image layout='fixed' width={200} height={200} src={divinity} />
        </span>
        <span className={styles.image}>
          <Image layout='fixed' width={200} height={200} src={synchronicity} />
        </span>
        <div className={styles.ctaText}>
          <div className={styles.ctaMainText}>
            Your <em>Album</em> and <em>Artist</em> Name
          </div>
          <div className={styles.ctaSubText}>
            <div>on <em>Custom</em> Album Designs</div>
          </div>
          <button className='cta'>Shop Now</button>
        </div>
        <span className={styles.image}>
          <Image layout='fixed' width={200} height={200} src={theUndertaking} />
        </span>
        <span className={styles.image}>
          <Image layout='fixed' width={200} height={200} src={asTheSunSpeaks} />
        </span>
      </div>
      <div className={styles.soundwavesImage}>
        <Image src={soundwaves} layout='responsive' />
      </div>
    </>
  )
}

export default HomePage
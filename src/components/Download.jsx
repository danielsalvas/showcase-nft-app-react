import styles from "../styles/Global"
import assets from "../assets"

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
          <div>
            <h1 className={`${styles.h1Text} ${styles.blackText}`}> Download the Source Code</h1>
            <p className={`${styles.pText}`}>Get the full source code on Github</p>
          </div>
          <a className={styles.btnPrimary} href='https://github.com/danielsalvas/React-native-nft' target='_blank'> Source Code</a>

          <div className={`${styles.flexCenter}`}>
              <img src={assets.scene} alt="download_png" className={`${styles.fullImg}`} />
          </div>
      </div>
    </div>
  )
}

export default Download
import styles from "../styles/Home.module.css"
import Menu from "./menu"
const Header = () => {
    return <div>
        <Menu />
        <div className={styles.banner}>
              <h1>Growth MindSet Inquiry</h1>
              <div style={{fontWeight: "bold"}}>How to promote and nurture a Growth Mindset in the classroom?</div>
              <div><h3>Oluwakemi Oludapo</h3></div>
        </div>
    </div>
}

export default Header
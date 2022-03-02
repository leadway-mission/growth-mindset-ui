import Image from "next/image"
import { Container, Row, Col } from "react-bootstrap"
import styles from '../styles/Home.module.css'

const NormalizeChallenges = () => {
    return <div className={styles.subPage}>
        <Container>
            <div className={styles.header}><h3>Normalize Challenges</h3></div>
            <div>
                <p>
                    Normalizing challenges promote and nurture a growth mindset. Most of my high achiever students have a low tolerance for productive struggle. They get frustrated easily.  I realized that students are doing well in all subjects, and paying attention does not mean they have a positive mindset towards challenges. For example, one of my High achiever students started crying because she could not understand and complete a challenging task. It was shocking to me. So before any task, I remind the student that the task could challenge, and challenges are part of the learning process. After a while, I noticed that each time I told the students that the task at hand would be challenging, students were automatically set up for the challenges by enduring and staying focused and showing a positive mindset towards challenges. I used this cube task to assess students' engagement, perseverance, risk-taking, and positive mindset towards challenges. I know that the task could be frustrating and challenging speaking from experience. I experience success with nurturing GMS as students ask questions, problem-solve, take risks, and learn from each mistake to get the task done(teachers' mindset by carol). They challenge the fixed mindset that believes that whenever they struggle through things, they are dumb (towards a growth mindset in the classroom). Below is the cube and the Reflection of one of my students after completion of the activity. 
                </p>
                <p>
                    During the process of making this extremely hard cube. I got frustrated, annoyed, and felt like giving up multiple times. I tried over and over again but could not get it right. Only when I got some help from my awesome sister, ( p.s she wrote that) was I able to get it right. When I did, I did not feel as accomplished like I would normally feel, maybe because I was so annoyed or maybe because I didn't do it all by myself, I didn't feel excited. I felt like finally I'm done and I can stop thinking about it. This activity was eye-opening to me about trying a million times before getting it right. I also feel less guilty about asking for help when I need it. I would not ask to do anything again because it isn't comfortable or easy. Only because these things help my brain grow would I willingly take up another challenge like this. 
                </p>
                <p>
                    From Janet's reflections, I could see the positive attitude of perseverance, asking for help, practice until mastery, and courage to speak out. Though she wished never to try this task again, she is willing to take up challenges again to grow her brain (intelligent). So she understands the correlation between productive struggle and learning. This was the student crying for not finishing a complex task. She believed that she was dumb. I can see the growth after the explicit teaching of growth mindset, how the brain works, and normalizing challenges. This is one example that shows the growth of promoting and nurturing GMS in the classroom. From her Reflection, I realize that she now knows that intelligence and ability can grow. It is not what you are born with or without.   
                </p>

                <Row>
                    <Col md={4}><Image src='/images/pyramid.jpg' width='400' height='400' /></Col>
                    <Col md={4}><Image src='/images/pyramid1.jpg' width='400' height='400' /></Col>
                    <Col md={4}><Image src='/images/pyramid2.jpg' width='400' height='400' /></Col>
                </Row>
            </div>
        </Container>
    </div>
}

export default NormalizeChallenges
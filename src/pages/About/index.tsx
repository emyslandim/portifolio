import { Ui } from "./styles";

export default function About() {
  return (
    <Ui.Wrapper>
      <Ui.Title>
        <span>01.</span> About me
      </Ui.Title>
      <Ui.Description>
        <section>
          <p>
            Hey! My name is Emilly and I enjoy creating things to the internet.
            My interest in web development started when I was a 15 year old kid
            who was determined to make your tumblr the cutest ever editing
            custom Tumblr themes — turns out hacking together a custom reblog
            button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and <Ui.Marked>I’ve had the privilege of working at an a
            start-up, a huge corporation, and an ecommerce</Ui.Marked>. My main focus these
            days is building accessible, inclusive products and digital
            experiences at Upstatement for a variety of clients.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <Ui.SkillList>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Vue.js</li>
            <li>Angular</li>
            <li>Node.js</li>
          </Ui.SkillList>
        </section>
        <Ui.ProfilePic
          src="/images/profile.jpeg"
          alt="Profile pic"
          width={300}
          height={300}
          priority
        />
      </Ui.Description>
    </Ui.Wrapper>
  );
}

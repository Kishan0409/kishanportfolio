import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src={"./images/5.jpg"}
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>9953093718</p>

      <h4>Email</h4>
      <p>raikishan79@gmail.com</p>

      <h4>Address</h4>
      <p>Dwarka , New Delhi</p>
    </div>
  );
};

export default About;
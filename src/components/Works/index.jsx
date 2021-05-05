import "./style.css";

const About = () => {
  return (
    <div className="works">
      <h1>Projects</h1>
      <p>Title: E-commerce</p>
      <p>
        I created a template for e-commerce and we use the technology html and css
      </p>
      <br />
      <p>Title: Netflix card</p>
      <p>
        I create a  card page that is all most watch popular netflix series redirected to official netflix series.
        and we use the technology to design that page like  html,css,bootstrap and React js . In react js we create a several component
        and the data pass through props and the component render.
      </p>
      <br />
      <p>Title: Word Game</p>
      <p>
        I Created a web rearrange word game that is firstly i create a button .User can click the button to start the game
        and the rearrange word is showing in screen and then create a input field .user can write correct word in input field an then click
        on button. After click on button if the word is correct then showing a message that is (Awesome It's correct).
        technology used : Html,css and javascript .I provide the link to play the game .
        <br />
        <br />
        <a  href="https://kishan0409.github.io/game/" target="_blank">Word Game</a>
      </p>
      <br />
      <p>Title: Filter Image Gallery</p>
      <p>
        I Created a filter image portfolio gallery using the React js framework . You will see the project is this link
        <br/>
        <br/>
        <a  href="https://kishan0409.github.io/efood/" target="_blank">Image gallery</a>
      </p>
      <br/>
      <p>Title:Todo App</p>
      <p>
        Making a Todolist web app and I create a todoapp using the React js framework.firstly i create a UI design than
        i create a input field to whatever user write the input field than onChange() function is triggered 
        After that i use material ui icons Add button . User write the data in input button and  click on button  then data will show
        and useState() function is used to update the state.

      </p>
    </div>
  );
};

export default About;
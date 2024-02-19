import React, { useContext } from "react";
import ThemeContext from "../../contex/themeContext/ThemeContext";
import { TypeAnimation } from "react-type-animation";
import SkillsContext from "../../contex/skillsContext/SkillsContext";
import myImage from "../../static/myPhotos.jpg";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Home() {
  const { skills } = useContext(SkillsContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? `dark` : null}>
      <div className="bg h-screen px-12 py-4 color  ">
        {/* navBar  */}
        {/* this is comment  */}

        {/* Hero Section is here  */}
        <div className="sm:mt-6">
          {/* Sub Hero -1  section is here  */}
          <div className="center-line items-center ">
            <div className="  shadow-lg sm:w-[60%] w-[90%] flex px-2 py-1 items-center center-line    ">
              <div className="btn2 shadow-lg sm:text-xl ">Now</div>
              <div className="sm:text-2xl sm:ml-6 ">
                Now , I am Learning Python
              </div>
            </div>
          </div>
          {/* Sub hero -2  */}
          <div className="sm:mt-12 sm:text-6xl  ">
            <div className="center-line gap-4 ">
              <span>Hey I am </span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "  Anshu Pandey ",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "  full stack developer ",
                  1000,
                  "  student of computer science ",
                  1000,
                  "  continuous learner ",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </div>
            <div className="text-3xl center-line sm:mt-4">
              Full-Stack Developer | Innovative Problem Solver
            </div>
            <div className="center-line sm:mt-4 ">
              <div className="text-2xl dark:text-gray-400 text-gray-600 w-[80%]  ">
                Hi there! Anshu Pandey , a full-stack developer who loves using
                technology to solve problems. I enjoy building things that make
                life easier for people. Take a look around my portfolio to see
                <span className="center-line">what I've been working on!</span>
              </div>
            </div>
          </div>
          {/* login button  */}
          <div>
            <div>
              <div className="center-line text-2xl sm:mt-12 font-medium   ">
                Login or Register{" "}
              </div>
              <div className="center-line ">
                <a href="/auth">
                  <div className="  btn w-fit sm:mt-4 px-16 cursor-pointer  ">
                    Login/SignUp
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={theme ? "dark" : null}>
        <div className="bg color px-12 py-4  ">
          {/* My all skills is here  */}
          <div>
            <div className="center-line  ">
              <div className="btn2 text-xl w-[60%]">
                Bellow are all the skills I've mastered and am excited to
                showcase on my website{" "}
              </div>
            </div>

            <div className=" center-line sm:mt-4 ">
              <div className="max-w-[60%] flex   flex-wrap  ">
                {skills.map((skill) => (
                  <span className="btn3" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* My Photo and Social media  */}
          <div className="center-line gap-24 mt-6">
            <div className="card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              libero quis deleniti exercitationem. Corporis distinctio
              architecto expedita inventore est consequatur perspiciatis ipsam
              adipisci autem commodi labore consectetur at culpa dolor eos vero
              cum illum eius, harum reiciendis, praesentium minima sed. Sit a
              quisquam fugiat eius ratione totam velit minus iure ut ipsa
              laudantium voluptas iste magni consectetur ea temporibus ullam,
              ipsum excepturi assumenda aliquid! Eum dolores, porro sint, odio
              officia vitae magni dolorum, recusandae blanditiis accusantium
              expedita ipsam reiciendis qui iste corrupti? Atque incidunt
              quisquam impedit dolores, maxime voluptatibus? Perferendis
              accusantium maiores hic dicta rerum temporibus soluta repellendus
              possimus dolore!
            </div>
            <div className="card dark:hover:text-white  ">
              <img src={myImage} alt="" />
              <div className="sm:mt-4 flex justify-center gap-12 ">
                <Link to="https://github.com/mr-Dev-Anshu">
                  {" "}
                  <FaGithub className="sm:text-3xl hover:text-red-500 " />
                </Link>
                <Link to="https://www.linkedin.com/in/anshu-pandey-b08860258/">
                  {" "}
                  <FaLinkedinIn className="sm:text-3xl hover:text-red-500 " />
                </Link>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

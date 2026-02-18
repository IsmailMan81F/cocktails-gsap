import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.to("nav", {
      backgroundColor: "#00000050",
      duration: 2,
      ease: "power1.in",
    });
  }, []);

  return (
    <nav className="bg-transparent">
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

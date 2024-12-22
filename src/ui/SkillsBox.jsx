import {
  SiJavascript,
  SiTailwindcss,
  SiStyledcomponents,
  SiReactrouter,
  SiReactquery,
} from "react-icons/si";
import { RiReactjsLine, RiSupabaseFill } from "react-icons/ri";
import { ImHtmlFive } from "react-icons/im";

const skills = [
  { icon: ImHtmlFive, name: "Html" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: RiReactjsLine, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiStyledcomponents, name: "StyledComponents" },
  { icon: RiSupabaseFill, name: "Supabase" },
  { icon: SiReactrouter, name: "React Router" },
  { icon: SiReactquery, name: "ReactQuery" },
];

function SkillsBox() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[rgb(100,116,139)] to-[rgb(71,85,105)]">
      <div className="shadow-lg rounded-lg w-full max-w-4xl p-6">
        <div className="bg-white/90 rounded-xl p-6 shadow-xl border border-gray-500/30">
          <h2 className="text-gray-800 text-4xl mb-4 font-bold text-center">
            個人技能
          </h2>
          <ul className="text-gray-700 grid grid-cols-3 gap-4 text-center">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex flex-col items-center mb-3 hover:scale-105 transition-transform"
              >
                <skill.icon className="text-blue-500 text-4xl mb-2" />
                <span className="font-medium">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsBox;

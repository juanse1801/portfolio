import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Torrens University Australia",
      title: "Full Stack Developer",
      img: "assets/torrens-icon.jpg",
      date: "(Agust 2021 - Present)",
      desc: "Plan and develop event platforms for foreign university students using tools like Node.js, Express.js, Nest.js, React.js, Next.js",
    },
    {
      id: 2,
      name: "Coderhouse",
      title: "Backend's tutor",
      img: "assets/coder-icon.jpg",
      date: "(September 2021 - Present)",
      desc: "Help and monitoring the students process, give advice to students about node.js backend course",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Job experience</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h3>{d.date}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

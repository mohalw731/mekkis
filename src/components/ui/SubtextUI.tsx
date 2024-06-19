type TsubText = {
  title: string;
  text: string;
  classname?: string;
  icon?: JSX.Element;
};

function SubtextUI({ title, text, icon}: TsubText) {
  return (
    <div className="subtext">
      {icon}
      <div className="subtext-text">
      <h2>{title}</h2>
      <p>{text}</p>
      </div>
    </div>
  );
}

export default SubtextUI;

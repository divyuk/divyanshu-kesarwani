function IndiviualSkill({ skillName, skillImage }) {
  return (
    <div className="item">
      <div className="box">
        <img src={skillImage} alt={skillName} className="icon" />
        <h5>{skillName}</h5>
      </div>
    </div>
  );
}

export default IndiviualSkill;

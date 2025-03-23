import styles from "./Skill.module.css";

type SkillProps = {
  skillName: string;
  rating: number;
  maxRating?: number;
};

export function Skill({ skillName, rating, maxRating = 5 }: SkillProps) {
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    stars.push(i < rating ? "filled" : "empty");
  }

  return (
    <div className={`text-center px-3 py-4 ${styles.abilitiesFS}`}>
      <p className="p-0 m-0">{skillName}</p>
      {stars.map((star, index) => (
        <img
          key={index}
          src={`imgs/icons/${star}Star.png`}
          alt={`${star} star`}
          className={styles.starIcon}
        />
      ))}
    </div>
  );
}
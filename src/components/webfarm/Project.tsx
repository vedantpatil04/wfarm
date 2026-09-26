import { ArrowUpRight } from "lucide-react";

type ProjectProps = {
  index: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image?: string;
  tone?: "ink" | "sun";
};

export function Project({
  index,
  title,
  category,
  description,
  year,
  image,
  tone = "ink",
}: ProjectProps) {
  return (
    <article className="project">
      <div className="project__meta">
        <span>{index}</span>
        <span>{category}</span>
        <span>{year}</span>
      </div>
      <a href="#contact" className="project__visual" aria-label={`Discuss a project like ${title}`}>
        {image ? (
          <img src={image} alt="" loading="lazy" width={1600} height={1200} />
        ) : (
          <div className={`spokes-art spokes-art--${tone}`} aria-hidden="true">
            <div className="spokes-art__wheel" />
            <span>36</span>
          </div>
        )}
        <span className="project__open">
          <ArrowUpRight />
        </span>
      </a>
      <div className="project__copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

type ProjectProps = {
  index: string;
  title: string;
  category: string;
  description: string;
  year?: string;
  image?: string;
  link?: string;
};

export function Project({
  index,
  title,
  category,
  description,
  year = "2026",
  image,
  link = "#contact",
}: ProjectProps) {
  const isExternal = link.startsWith("http");

  return (
    <article className="projects_card">
      <a
        href={link}
        className="projects_cardMedia"
        aria-label={`Visit ${title} - ${category}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {image ? (
          <img src={image} alt={`${title} interface`} loading="lazy" width={1200} height={675} />
        ) : (
          <div className="spokes-art spokes-art--sun" aria-hidden="true">
            <div className="spokes-art__wheel" />
            <span>36</span>
          </div>
        )}
        <div className="projects_cardBadge">
          <span>{index}</span>
          <span>{category}</span>
          <span>{year}</span>
        </div>
      </a>
      <div className="projects_caption">
        <h3 className="projects_cardTitle">{title}</h3>
        <p className="p projects_cardBlurb">{description}</p>
        <a
          href={link}
          className="projects_cardLink"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          <span>Visit {title}</span>
          <svg className="projects_cardLinkArrow" viewBox="0 0 26 27" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.2338 12.28L14.7538 20.8V0.239998H11.3538V20.76L2.87375 12.28L0.59375 14.56L13.0738 27L25.5138 14.56L23.2338 12.28Z" />
          </svg>
        </a>
      </div>
    </article>
  );
}

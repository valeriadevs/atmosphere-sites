import { Link } from 'react-router-dom';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  placeholderGradient?: string;
}

export const ProjectCard = ({ slug, title, category, image, placeholderGradient }: ProjectCardProps) => {
  const hasImage = image && image.length > 0;

  return (
    <Link
      to={`/work/${slug}`}
      className="group block"
    >
      <div className="relative overflow-hidden bg-muted aspect-[16/10] mb-5 rounded-lg">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
          />
        ) : (
          <div
            className="w-full h-full transition-transform duration-700 group-hover:scale-105 rounded-lg"
            style={{ background: placeholderGradient || 'linear-gradient(135deg, #333 0%, #555 100%)' }}
          />
        )}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 rounded-lg" />
      </div>
      <p className="label-uppercase mb-2">{category}</p>
      <h3 className="heading-small group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
};

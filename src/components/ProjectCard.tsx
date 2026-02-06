import { Link } from 'react-router-dom';

interface ProjectCardProps {
  slug: string;
  title: string;
  category: string;
  image: string;
  index?: number;
}

export const ProjectCard = ({ slug, title, category, image, index = 0 }: ProjectCardProps) => {
  return (
    <Link
      to={`/work/${slug}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="relative overflow-hidden bg-muted aspect-[4/3] mb-5 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-lg"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 rounded-lg" />
      </div>
      <p className="label-uppercase mb-2">{category}</p>
      <h3 className="heading-small group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
};

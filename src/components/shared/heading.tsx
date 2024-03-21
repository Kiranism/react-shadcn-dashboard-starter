type THeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export default function Heading({
  title,
  description,
  className
}: THeadingProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold tracking-tight text-primary sm:text-3xl">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

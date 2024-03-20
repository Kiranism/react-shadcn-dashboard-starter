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
      <h2 className="text-3xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

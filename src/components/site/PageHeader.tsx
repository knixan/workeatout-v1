type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-forest px-6 pt-24 pb-12 text-center lg:pt-28">
      <h1 className="font-heading text-4xl font-semibold text-white md:text-5xl">
        {title}
      </h1>
      <p className="mt-3 text-white">{subtitle}</p>
    </section>
  );
}

import AnimatedReveal from "./AnimatedReveal";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  return (
    <AnimatedReveal delay={delay}>
      <div className="bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow">
        <div className="text-[36px] mb-4">{icon}</div>
        <h3 className="text-t5 font-bold text-grey-900 mb-2">{title}</h3>
        <p className="text-t6 text-grey-500 leading-relaxed">{description}</p>
      </div>
    </AnimatedReveal>
  );
}

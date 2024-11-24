import { integrations } from "@/constants";
import Section from "../ui/Section";
import Tag from "../ui/Tag";
import IntegrationsColumn from "../ui/IntegrationsColumn";

export default function Integrations() {
  return (
    <Section id="integrations" className="py-24 overflow-hidden">
      <div className="container px-2.5">
        <div className="grid lg:grid-cols-2 items-center justify-between w-full xl:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favorite tool, making it easy
              to plug into any worflow and collaborate across platforms.
            </p>
          </div>
          <div className="h-[400px] xl:h-[800px] grid md:grid-cols-2 md:gap-4 overflow-hidden mt-8 lg:mt-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
            <IntegrationsColumn integrations={integrations} />
            <IntegrationsColumn
              integrations={integrations.slice().reverse()}
              className="hidden md:flex"
              reverse
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

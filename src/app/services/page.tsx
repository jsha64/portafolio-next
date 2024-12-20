import{ Plans, PlanProps }from "../../components/Plans/plans"

const ServicesComponents = ({title, paragraf, span, spanTwo}: PlanProps) => {
    return (
      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 flex-1 basis-1/3 max-w-xs">
        <Plans
          title={title}
          paragraf={paragraf}
          span={span}
          spanTwo={spanTwo}
        />
      </div>
    );
};

export default function Services() {
    return (
      <div className="w-full mt-12 space-y-0 sm:mt-16 flex flex-row justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        <ServicesComponents 
          title="Basic"
          paragraf="Desarrollo de sitios web con tecnologías modernas"
          span="$15-25"
          spanTwo="/HOUR"
         />
        <ServicesComponents 
          title="Standard"
          paragraf="Desarrollo de aplicaciones móviles para Android y iOS."
          span="$45-75"
          spanTwo="/HOUR"
        />
        <ServicesComponents
          title="Premium"
          paragraf="Diseño de interfaces de usuario y experiencia de usuario."
          span="$80-120"
          spanTwo="/HOUR"
        />
      </div>
    );
}
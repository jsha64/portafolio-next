import{ Plans }from "../../components/Plans/plans"

export const ServicesComponents = () => {
    return (
      <div className="flex flex-col rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 flex-1 basis-1/3 max-w-xs">
        <Plans
          title="FREELANCER"
          paragraf="All the basics for starting a new business!"
          span="$24"
          spanTwo="/MONTH"
        />
      </div>
    );
};

export default function Services() {
    return (
      <div className="mt-12 space-y-0 sm:mt-16 flex flex-wrap justify-center gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        <ServicesComponents />
      </div>
    );
}
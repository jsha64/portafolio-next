export const ServicesComponents = () => {
    return (
      <div>
        <h1>Servicios</h1>
        <ul>
          <li>Desarrollo Frontend</li>
          <li>Desarrollo Backend</li>
          <li>DevOps</li>
        </ul>
      </div>
    );
};

export default function Services() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <ServicesComponents />
      </div>
    );
}
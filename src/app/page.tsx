import { Home } from "./home/page"
import Services from "./services/page"
 
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-items-center">
      <Home />
      <Services />
    </div>
  );
}

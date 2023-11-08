import EventOfMonth from "./components/EventOfMonth";
import EventsList from "./components/EventsList";
import EventsSummary from "./components/EventsSummary";
import Sidebar from "./components/Sidebar";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
    <main className="bg-primary-background flex flex-col items-start justify-start px-6 py-5 xl:flex-row xl:space-x-6">
      <Sidebar />
      <div className="w-full grid-cols-3 grid-rows-[12] space-y-4 sm:space-y-6 xl:grid">
        <div className="row-start-1 row-end-[10] xl:ml-6">
          <UpcomingEvents />
        </div>
        <div className="order-first col-span-2 row-start-1 row-end-[11]">
          <EventsList />
        </div>
        <div className="col-span-2 row-span-2">
          <EventsSummary />
        </div>
        <div className="row-span-3 row-start-[10] xl:ml-6">
          <EventOfMonth />
        </div>
      </div>
    </main>
  );
}

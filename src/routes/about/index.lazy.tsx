import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-[375px] mr-auto ml-auto text-center">
      Hello "/about/"!
    </div>
  );
}

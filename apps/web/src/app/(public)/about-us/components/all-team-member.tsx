import { Heading } from "./heading";
import { TeamMembers } from "./team-member";

export const AllTeamMembers = () => {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="mb-8">
        <Heading />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        </div>
      </div>
    </section>
  );
};
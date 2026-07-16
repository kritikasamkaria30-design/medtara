import TeamBanner from "../components/TeamPage/TeamBanner/TeamBanner";
import Member from "../components/TeamPage/Member/Member";
import Partner from "../components/TeamPage/partner/partner";

function Team() {
  return (
    <div className="Team-page">
        <TeamBanner />
        <Member />
        <Partner />
      </div>
  );
}

export default Team;

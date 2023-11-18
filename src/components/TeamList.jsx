import Team from "./Team";

const TeamList = ({ teams }) => {
    return (
        <div 
            className="teams-list"
        >
        {teams.map((team, index) => (
            <Team key={(team._id).toString()} team={team} />
        ))}
        </div>
    );
}
export default TeamList;
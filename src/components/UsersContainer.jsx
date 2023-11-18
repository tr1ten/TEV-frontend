import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  searchUsers,
  filterUsers,
  updatePage,
} from "../redux/actions/userActions";
import { addMember, updateTeamName,fetchTeams,BASE_URL } from "../redux/actions/teamActions";
import UsersList from "./UsersList";
import Filters from "./Filters";
import Team from "./Team";
import Pagination from "./Pagination";

const UsersContainer = ({
  users,
  fetchUsers,
  searchUsers,
  filterUsers,
  filters,
  searchTerm,
  page,
  updatePage,
  currentTeamName,
  currentTeamMembers,
  updateTeamName,
  addMember,
  fetchTeams,
  teams
}) => {
  console.log("UsersContainer", users," name ",currentTeamName,"teams ",teams);
  useEffect(() => {
    fetchUsers(filters, searchTerm, page);
  }, [fetchUsers, filters, searchTerm, page]);
  useEffect(() => {
    fetchTeams();
  },[fetchTeams]);
  const handleDrop = (e) => {
    e.preventDefault();
    const user = JSON.parse(e.dataTransfer.getData("user"));
    addMember(user);
  };

  const handleAllowDrop = (e) => {
    e.preventDefault();
  };

  const handleCreateTeam = () => {
    if(currentTeamName.length===0){
      alert("Please enter team name");
    }
    else if(currentTeamMembers.length===0){
      alert("Please add members to team");
    }
    else{
        fetch(BASE_URL,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            team_name: currentTeamName,
            members: currentTeamMembers.map(member => member.id)
          })
        }).then(res => res.json()).catch(err => console.log(err)).then(team => {
          console.log(team);
          alert(`Team ${team.team_name} created successfully`);
          fetchTeams();
        }
        );
    }
  };
  return (
    <div>
      <Filters onSearch={searchUsers} onFilter={filterUsers} />
      <div
        className="flex 
        flex-col
        md:flex-row
        
      "
      >
        <div className="f-item-2">
            <h1
              className="
              text-2xl
              text-center
              mb-4
              border-b-2
              p-2
              "
            >
              {" "}
              Users
            </h1>
          <UsersList users={users} filters={filters} />
          <hr className="mt-4"></hr>
          <Pagination
            currentPage={page}
            onPageChange={updatePage}
            totalPages={30}
          />
        </div>
        <div className="f-item flex flex-col">
          <div className=" border-2 border-black f-item flex flex-col">
            <h1
              className="
              text-2xl
              text-center
              border-b-2
              p-2
              "
            >
              {" "}
              Current Team:
              <input
                required
                value={currentTeamName}
                placeholder="Team Name"
                className="inline border-2 border-black"
                onChange={(e) => updateTeamName(e.target.value)}
              />
              <button className="btn" onClick={handleCreateTeam}>Submit Team</button>
            </h1>
            <div
              className="
              flex
              flex-col
              justify-center
              items-center
              h-full
              flex-grow
              min-w-0
              "
              onDrop={handleDrop}
              onDragOver={handleAllowDrop}
            >
              {currentTeamMembers.length === 0 ? (
                <h1 className=" text-center text-gray-500 opacity-40">
                  Drag & Drop User
                </h1>
              ) : (
                <UsersList noImage={true} users={currentTeamMembers} />
              )}
            </div>

          </div>
          <div className=" border-2 border-black f-item">
            <h1
              className="
              text-2xl
              text-center
              mb-4
              border-b-2
              p-2
              "
            >
              {" "}
              All Teams
            </h1>
            <div>
              {teams.length===0 ? 
                <h1 className=" text-center text-gray-500 opacity-40">
                  No Teams
                </h1>
                :
               teams.map(team =><Team key={team._id} team={team}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  let currentTeamMembers = state.team.currentTeamMembers;
  // find user id
  return {
    users: state.users.users,
    filters: state.users.filters,
    searchTerm: state.users.searchTerm,
    page: state.users.page,
    currentTeamName: state.team.currentTeamName,
    currentTeamMembers,
    teams: state.team.teams
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  searchUsers,
  filterUsers,
  updatePage,
  addMember,
  updateTeamName,
  fetchTeams,
})(UsersContainer);

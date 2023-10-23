import { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";


const Team = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-16 mb-2 dark:text-white">Our Sales Team</h1>
            <hr className="w-1/2 border-t-4 border-red-300 mb-10 mx-auto"></hr>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 mx-10">
                {
                    teams.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;
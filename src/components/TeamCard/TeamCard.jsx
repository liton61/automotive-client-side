/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const TeamCard = ({ team }) => {
    const { id, name, designation, img } = team;
    return (
        <div>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md h-96 rounded-xl bg-clip-border mb-5 md:w-80 lg:w-72 mx-auto">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border">
                    <img className="h-56 w-full" src={img} alt="profile-picture" />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h4>
                    <p className="block font-sans text-base antialiased font-medium leading-relaxed text-red-400 bg-clip-text">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
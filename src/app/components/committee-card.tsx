export interface CommitteeCardProperties
{
    image: string;
    name: string;
    role: string;
    roleDescription: string;
};

export const CommitteeCard = (properties: CommitteeCardProperties) =>
{
    return (
        <div className="bg-brand-primary-450/50 outline outline-white/50">
            <div className="bg-black w-full aspect-square">
                <img src={properties.image}></img>
            </div>
            <div className="p-3">
                <div className="text-lg">{properties.name}</div>
                <div className="text-md">{properties.role}</div>
                <div className="text-md mt-3">{properties.roleDescription}</div>
            </div>
        </div>
    );
};
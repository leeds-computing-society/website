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
        <div className={`bg-brand-primary-450/50 border-white/50
        border-t
        border-l
        max-[48rem]:odd:border-r
        max-[48rem]:border-l-0
        min-[64rem]:max-[128rem]:nth-[7]:border-r
        min-[64rem]:max-[128rem]:nth-[7]:border-b
        min-[64rem]:max-[128rem]:nth-[8]:border-l-0
        min-[64rem]:max-[128rem]:nth-[8]:border-b
        min-[64rem]:max-[128rem]:nth-[9]:border-b
        min-[64rem]:max-[128rem]:nth-[10]:border-r
        min-[64rem]:max-[128rem]:nth-[10]:border-t-0
        min-[128rem]:nth-[5]:border-b
        min-[128rem]:nth-[6]:border-b
        min-[128rem]:nth-[6]:border-r
        min-[128rem]:nth-[7]:border-l-0
        min-[128rem]:nth-[7]:border-b
        min-[128rem]:nth-[8]:border-b
        min-[128rem]:nth-[9]:border-t-0
        min-[128rem]:nth-[10]:border-t-0
        min-[128rem]:nth-[10]:border-r
      `}>
            <div className="bg-brand-primary-400/50 w-full aspect-square border-b border-dashed border-white/50">
                <img alt="Committee Member Image" src={properties.image}></img>
            </div>
            <div className="p-3">
                <div className="text-lg">{properties.name}</div>
                <div className="text-md">{properties.role}</div>
                <div className="text-md mt-3">{properties.roleDescription}</div>
            </div>
        </div>
    );
};
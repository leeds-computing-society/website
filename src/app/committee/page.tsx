import { CommitteeCard } from "@/app/components/committee-card";
import committee from "@/app/static/committee.json";

export default function Page()
{
    return (
        <div className="flex flex-row justify-center grow text-white">
            <h1 className="hidden">Committee</h1>
            <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">
                    Meet the committee
                </div>
                <div className="py-6 px-6 min-[96rem]:px-48 text-md">
                    Our committee work to ensure the society runs smoothly and that we have a range of events for everyone to enjoy. Please feel free to get in touch with any of us if you have any questions or suggestions.
                </div>
                <div className="flex flex-row mb-12">
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                    {
                        committee.length === 0 ?
                            <div className="grow text-md p-6 border border-white/50">
                                Uh oh.. did someone delete the DB.
                            </div>
                            :
                            <div className="grow grid max-[64rem]:grid-cols-2 max-[128rem]:grid-cols-3 grid-cols-4 border-b min-[48rem]:border-r border-white/50">
                                {committee.map((member) => <CommitteeCard key={member.name} {...member}></CommitteeCard>)}
                            </div>
                    }
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                </div>
            </div>
        </div>
    );
};
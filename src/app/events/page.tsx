import { EventCard, EventCardProperties, EventCardPropertiesInitial, EventCardPropertiesWhenKnown } from "@/app/components/event-card";
import events from "@/app/static/events.json";

export default function Page()
{
    let eventsWhenUnknown: EventCardProperties[] = events.filter((event) => event.when === undefined).map((event) =>
    {
        return {
            ...event,
            when: undefined,
            end: undefined
        };
    });
    let eventsWhenKnown: EventCardPropertiesInitial[] = events.filter((event) => event.when !== undefined);

    let eventsParsed: EventCardPropertiesWhenKnown[] = eventsWhenKnown.map((event) =>
    {
        return {
            ...event,
            when: new Date(event.when),
            end: event.end !== undefined ? new Date(event.end) : undefined,
        };
    });
    eventsParsed.sort((x, y) => x.when.getTime() - y.when.getTime());

    let now = new Date();
    let upcomingEvents = [...eventsParsed.filter((event) => event.when.getTime() > now.getTime()), ...eventsWhenUnknown];
    let previousEvents = eventsParsed.filter((event) => event.when.getTime() <= now.getTime());
    previousEvents.sort((x, y) => y.when.getTime() - x.when.getTime());

    return (
        <div className="flex flex-row justify-center grow text-white">
            <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
                <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">
                    Upcoming Events
                </div>
                <div className="flex flex-row my-12">
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                    {
                        upcomingEvents.length === 0 ?
                            <div className="grow text-md p-6 border border-white/50">
                                No upcoming events, check again later.
                            </div>
                            :
                            <div className="grow flex flex-col border-b border-white/50">
                                {upcomingEvents.map((event, index) => <EventCard key={index} {...event}></EventCard>)}
                            </div>
                    }
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                </div>
                <div className="py-3 px-6 min-[96rem]:px-48 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">
                    Previous Events
                </div>
                <div className="flex flex-row my-12">
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                    {
                        previousEvents.length === 0 ?
                            <div className="grow text-md p-6 border border-white/50">
                                Uh oh.. did someone delete the DB.
                            </div>
                            :
                            <div className="grow flex flex-col border-b border-white/50">
                                {previousEvents.map((event, index) => <EventCard key={index} {...event}></EventCard>)}
                            </div>
                    }
                    <div className="shrink-0 min-[48rem]:w-6 min-[96rem]:w-48 border-t border-b border-dashed border-white/50"></div>
                </div>
            </div>
        </div>
    );
};
interface Properties
{
    href: string;
    text: string;
    icon: React.ReactNode;
};

export const FooterLink = (properties: Properties) =>
{
    return (
        <div className="flex flex-row gap-2 items-center">
            {properties.icon}
            <a className="text-sm underline underline-offset-2" href={properties.href}>{properties.text}</a>
        </div>
    );
};
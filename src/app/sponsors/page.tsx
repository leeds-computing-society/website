import { JaneStreetLogo } from "@/app/components/sponsors/jane-street-logo";
import { TPPLogo } from "@/app/components/sponsors/tpp-logo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-row justify-center grow text-white">
      <div className="flex flex-col mx-6 min-[64rem]:mx-12 min-[80rem]:mx-48 grow max-w-[96rem] border-l border-r border-dashed border-white/50">
        <div className="py-3 px-6 min-[96rem]:px-48 mt-12 text-3xl border-t border-b border-white/50 bg-brand-primary-450/50">
          Our Sponsors
        </div>
        <div className="py-6 px-6 min-[96rem]:px-48 text-md">
          <div>
            We work with a range of sponsors to provide our members with
            opportunities to network, develop their skills, and connect with
            industry. If you are interested in sponsoring us, please get in
            touch via{" "}
            <a
              href="mailto:committee@luucompsoc.co.uk?subject=Sponsorship%20Interest%20-%20%5BYOUR%20NAME%20HERE%5D"
              className="text-link underline"
            >
              committee@luucompsoc.co.uk
            </a>
            .
          </div>
        </div>
        <div className="flex flex-row items-center min-[48rem]:px-6 min-[96rem]:px-48 border-t border-b border-white/50 bg-brand-primary-450/50">
          <div className="w-full py-6 px-6 min-[48rem]:border-l min-[48rem]:border-r border-dashed border-white/50 bg-[#272F64]">
            <TPPLogo className="fill-white h-12"></TPPLogo>
          </div>
        </div>
        <div className="py-6 px-6 min-[96rem]:px-48 text-md">
          <p>
            <Link href="https://tpp-careers.com" className="link link-shown">
              TPP
            </Link>{" "}
            is a world-leader in Digital Health. From apps enabling patients to
            manage their own care to comprehensive hospital solutions, TPP
            delivers technology that connects everyone involved in healthcare
            delivery. For over twenty years, we have been applying the most
            advanced technology to provide a safe and secure environment to
            deliver care. Our aim is to improve access to healthcare data,
            making sure it is available whenever and wherever it is needed. We
            want to help people make the best use of that data, to empower
            clinicians and citizens, and to create the healthcare systems of the
            future.
          </p>
          <p className="mt-3">
            TPP has been consistently recognised as an outstanding graduate
            employer. Since 2017, we have consistently featured in The Job
            Crowds’ “Top Company for Graduates to Work For”, and were the
            overall winners for 2026/2027 in addition to awards for 'Best
            Salary', 'Benefits', 'Responsibility’, ‘Management' and ‘Career
            Progression’. We have also been consistently named in the Times Top
            100 Graduate Employers list.
          </p>
          <p className="mt-3">
            To read what it’s like to work at TPP and to see our full list of
            benefits, visit{" "}
            <Link href="https://tpp-careers.com" className="link link-shown">
              www.tpp-careers.com
            </Link>{" "}
          </p>
        </div>
        <div className="flex flex-row items-center min-[48rem]:px-6 min-[96rem]:px-48  border-t border-b border-white/50 bg-brand-primary-450/50">
          <div className="w-full py-6 px-6 min-[48rem]:border-l min-[48rem]:border-r border-dashed border-white/50 bg-[#0B419E]">
            <JaneStreetLogo className="fill-white h-12"></JaneStreetLogo>
          </div>
        </div>
        <div className="py-6 px-6 min-[96rem]:px-48 mb-12 text-md border-b border-white/50">
          <p>
            <Link
              href="https://www.janestreet.com/campus"
              className="link link-shown"
            >
              Jane Street
            </Link>{" "}
            is a global trading firm with offices in New York, London, Hong
            Kong, Singapore, and Amsterdam. Our approach is rooted in technology
            and rigorous quantitative analysis, but our success is driven by our
            people.We are always recruiting top candidates, and we invest
            heavily in teaching and training. Our summer internships give you a
            real sense of working at Jane Street full-time. No finance
            experience needed. We look for a passion for critical thinking and
            creative problem-solving - people like you!
          </p>
        </div>
      </div>
    </div>
  );
}

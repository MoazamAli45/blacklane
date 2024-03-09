import Wrapper from "../shared/Wrapper";
import longDistance from "../../assets/LongDistance/long-distance.webp";
import map from "../../assets/LongDistance/map.webp";
const points = [
  {
    heading: "Save time:",
    content:
      "Door-to-door rides mean no waiting in lines or switching between modes of transportation.",
  },
  {
    heading: "Set the schedule:",
    content:
      " You choose the pickup time, plus you can cancel up until 1 hour before your ride.",
  },
  {
    heading: "Enjoy peace of mind:",
    content:
      " Travel in comfort in a premium vehicle, and rest assured every ride is carbon offset.",
  },
  {
    heading: "Fixed fares:",
    content:
      "Fixed fares: The price for your route is the same no matter where within the city limits your ride starts/finishes.",
  },
  {
    heading: "Competitive rates:",
    content:
      " Taxes and tolls are included, you pay per car instead of per seat, and the only luggage limit is trunk space.",
  },
  {
    heading: "Reliable pickups:",
    content:
      " With long distance car service you don’t have to worry about strikes, short-staffing, or crowds.",
  },
  {
    heading: "Work en route:",
    content:
      " On a business trip? Work comfortably from the back seat, with Wi-Fi available for most locations.",
  },
];
const LongDistance = () => {
  return (
    <Wrapper styles={"px-4"}>
      <section className=" py-8 flex flex-col space-y-12">
        <div className="flex gap-8 flex-col custom-md:flex-row">
          <img
            src={longDistance}
            alt="long distance"
            className="custom-md:w-1/2"
          />
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Long distance car service, the better way between cities{" "}
            </h2>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              Say goodbye to the stress of mass transit, and hello to the
              comfort and simplicity of chauffeured rides with our City to City
              private transportation service.
            </p>
            <ul className="flex flex-col gap-3 list-disc px-4">
              {points.map(({ heading, content }, index) => (
                <li
                  className=" text-[#181A1F] font-normal leading-[28px]"
                  key={index}
                >
                  {" "}
                  <span className="font-medium">{heading}</span> {content}
                </li>
              ))}{" "}
            </ul>
          </div>
        </div>
        <div className="flex gap-8 flex-col custom-md:flex-row ">
          <img src={map} alt="Map" className="custom-md:w-1/2" />
          <div className="flex flex-col gap-4">
            <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Global reach
            </h2>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              With over 180 routes across Australia, Austria, Canada, China,
              France, Ireland, Japan, Malaysia, the Netherlands, Poland, Saudi
              Arabia, South Africa, Spain, Sweden, Taiwan, Thailand, Turkey, the
              United Arab Emirates, the United Kingdom, and the United States,
              long distance travel is easier than ever with a reliable chauffeur
              service. Plus, you can count on the same fantastic service whether
              you&apos;re going from{" "}
              <span className="underline font-semibold transition-all hover:no-underline ">
                New York to the Hamptons
              </span>
              ,
              <span className="underline font-semibold transition-all hover:no-underline ">
                London to Oxford
              </span>
              , or
              <span className="underline font-semibold transition-all hover:no-underline ">
                {" "}
                Dubai to Abu Dhabi.
              </span>
            </p>
            <p className="leading-[24px] text-[#181A1F] font-normal">
              Planning your winter vacation?
              <span className="underline font-semibold transition-all hover:no-underline ">
                Check out our new City-to-Slopes ski transfers
              </span>
              offering for all your ski season transport needs.
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default LongDistance;

import Wrapper from "../shared/Wrapper";
import faqImg from "../../assets/Faqs/faq.webp";
import Accordian, { AccordianItem } from "../ui/Accordian";
import review from "../../assets/Faqs/reviews.svg";

const Faq = () => {
  return (
    <section className="py-8">
      <Wrapper styles={"px-4"}>
        <div className="flex gap-6">
          <div className="flex flex-1 flex-col space-y-8">
            <h2 className="text-[32px] text-[#181A1F] font-semibold">
              Frequently asked questions
            </h2>
            <div>
              <Accordian className="flex flex-col space-y-4">
                <AccordianItem value="1" trigger="How do I get a quote?">
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Getting a quote is easy:
                    </p>
                    <ol className="flex flex-col space-y-4">
                      <li className="text-[#64666b] text-[14px] font-normal">
                        1.Download our{" "}
                        <a
                          className="font-semibold underline text-[
#181A1F] hover:no-underline"
                        >
                          app
                        </a>{" "}
                        or visit{" "}
                        <a
                          className="font-semibold underline text-[
#181A1F] hover:no-underline"
                        >
                          blacklane.com
                        </a>
                      </li>
                      <li className="text-[#64666b] text-[14px] font-normal">
                        2.Enter your desired dates and locations as if you are
                        booking
                      </li>
                      <li className="text-[#64666b] text-[14px] font-normal">
                        3.On the next step you will see the rates for each
                        vehicle class
                      </li>
                    </ol>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="2"
                  trigger="How long will the chauffeur wait for me?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      For a standard pickup (e.g. from a hotel or home address),
                      your chauffeur will wait for 30 minutes before leaving the
                      pickup point. The first 15 minutes are complimentary, and
                      only the remaining 15 minutes are chargeable.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Airport pickups come with 1 hour of complimentary wait
                      time before the chauffeur leaves the pickup location.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      If you know ahead of time that you may be delayed or want
                      to edit your booking, we recommend reaching out to us via
                      chat on our website or in the app.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="3"
                  trigger="Can I make stops on a City to City ride?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Our City to City rides allow for comfort breaks along the
                      route, but they do not include extra stops which deviate
                      from the direct route.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Should you wish to make extra stops, you can book these
                      trips separately or make a by-the-hour booking, where
                      instead of having a fixed destination, your chauffeur is
                      reserved for a period of time during which you can make as
                      many stops as you like. Please note, our by-the-hour
                      service includes 20 km of travel per booked hour and
                      additional distance is charged extra.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="4"
                  trigger="What is the cancellation policy and how can I cancel my ride?"
                >
                  <p className="text-[#64666b] text-[14px] font-normal">
                    You can cancel your ride free of charge up until 1 hour
                    before the scheduled pickup time. To cancel, go to the
                    booked rides section of the app or website, select the ride,
                    and select the cancel option.
                  </p>
                </AccordianItem>
                <AccordianItem
                  value="5"
                  trigger="What vehicles does Blacklane use?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Blacklane offers four vehicle classes in most locations:
                      Business Class, Electric Class, First Class, and Business
                      Van/SUV.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Each of these categories contain a selection of
                      comparable, top-of-the-line models, which you can see
                      listed in the booking process, or in our or visit{" "}
                      <a
                        className="font-semibold underline text-[
#181A1F] hover:no-underline"
                      >
                        Help Center.
                      </a>
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Please bear in mind that the images seen when booking are
                      strictly illustrative. We cannot guarantee any requests
                      for specific vehicle models or colors as the vehicle used
                      is subject to availability.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="6"
                  trigger="When will I receive the chauffeur's contact information?
"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      The chauffeur&apos;s name and telephone number will be
                      sent to the passenger one hour before pickup via email and
                      SMS. This message also contains the make, model and
                      license plate number of the vehicle. If you booked for
                      someone else, this information will be sent to the email
                      address and phone number provided in the booking process.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      One hour before a ride, guests can also now open a chat
                      with their chauffeur in our app.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="7"
                  trigger="Which payment options are available?
"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Blacklane accepts Visa, Maestro, Mastercard, and American
                      Express credit cards, and iOS users can also pay via
                      PayPal or Apple Pay using the app. Paypal and Apple Pay
                      are not currently available on the website.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      All payment methods are set up through our website or app
                      before the ride takes place, so there is no need to pay
                      for anything in cash.
                    </p>
                    <p className="text-[#64666b] text-[14px] font-normal">
                      Business accounts can request to receive monthly invoices,
                      instead of paying ride-by-ride.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="8"
                  trigger="What happens if the chauffeur is late?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      In the unlikely case that your chauffeur is late, please
                      open a chat with the chauffeur in our app. If you wish to
                      cancel the booking, you can do so via our app or website.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="9"
                  trigger="What if I do not find my chauffeur at the agreed pickup point?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      In that case, please contact them directly. You can do so
                      using the chat feature in our app, or you can contact them
                      via the telephone number that will have been sent to you
                      one hour before pickup via email and SMS. This message
                      also contains the make, model and license plate number of
                      the vehicle.
                    </p>
                  </div>
                </AccordianItem>
                <AccordianItem
                  value="10"
                  trigger="Does the chauffeur speak English?"
                >
                  <div className="flex flex-col space-y-4">
                    <p className="text-[#64666b] text-[14px] font-normal">
                      All of Blacklane&apos;s chauffeurs speak basic English as
                      well as the local language of the country the ride is
                      conducted in.
                    </p>
                  </div>
                </AccordianItem>
              </Accordian>
            </div>
          </div>
          {/*  Img */}
          <img src={faqImg} alt="faq" className="w-1/2 hidden md:block" />
        </div>
        {/*   Reviews */}
        <div className="flex flex-col items-center md:flex-row  gap-6 mt-12 mb-6 ">
          {/*  Cards for Reviews */}
          <div className="flex flex-col items-center gap-6 ">
            <img src={review} alt="review" className="w-[100px]" />
            <div className="flex flex-col gap-6 items-center">
              <h3
                className="text-[24px] text-[
#181A1F] font-semibold"
              >
                Best car service ever...
              </h3>
              <p className="text-[20px] font-norml text-[#181A1F] text-center">
                “Probably the best car service I have experienced ever. Arranged
                for an airport pick up from LHR to Cambridge and was thoroughly
                impressed with all aspects of the service.”
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 ">
            <img src={review} alt="review" className="w-[100px]" />
            <div className="flex flex-col gap-6 items-center">
              <h3
                className="text-[24px] text-[
#181A1F] font-semibold"
              >
                {" "}
                {"Dubai <> Abu Dhabi"}
              </h3>
              <p className="text-[20px] font-normal text-[#181A1F] text-center">
                “Amazing service levels. Prompt, courteous, clean and reliable.
                Went from Dubai to Abu Dhabi and back. [The car] was perfect -
                smooth as silk.”
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 ">
            <img src={review} alt="review" className="w-[100px]" />
            <div className="flex flex-col gap-6 items-center">
              <h3
                className="text-[24px] text-[
#181A1F] font-semibold"
              >
                Icing on the cake
              </h3>
              <p className="text-[20px] font-normal text-[#181A1F] text-center">
                “On the day of pick up the driver was on time and waiting at my
                doorstep. I used them again to pick us up from JFK to take us
                back home and got the same experience. They get a 5 star rating
                for me!”
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faq;

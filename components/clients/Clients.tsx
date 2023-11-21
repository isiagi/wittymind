import Image from "next/image";
import Marquee from "react-fast-marquee";

function Clients() {
  return (
    <Marquee className="bg-[url('/assets/back.jpg')] bg-center bg-cover flex justify-between">
      <div>
        <Image src="/assets/logo.jpg" alt="" width={100} height={100} />
      </div>
      <div className="mx-20">
        <Image src="/assets/topmover.png" alt="" width={200} height={200} />
      </div>
      <div>
        <Image src="/assets/uriel.jpg" alt="" width={200} height={200} />
      </div>
    </Marquee>
  );
}

export default Clients;

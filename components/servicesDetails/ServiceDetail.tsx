import Image from "next/image";
import React from "react";

interface PageDetails {
  id: any;
}

function ServiceDetail({ id }: PageDetails) {
  return (
    <>
      {((): any => {
        switch (id) {
          case "Web":
            return (
              <ServiceDetailComponent
                title={"Web Development"}
                img={"/assets/web.jpg"}
                content={
                  "Embark on a digital journey with our comprehensive web development services tailored to suit your business needs. Our approach to web development goes beyond just creating a visually appealing site. We delve deep into understanding your brand, audience, and objectives to craft a digital experience that not only captivates but converts. From front-end design to back-end architecture, our team merges cutting-edge technology with creative flair, ensuring your website stands out in todays competitive landscape. We specialize in responsive design, intuitive interfaces, and scalable solutions that adapt seamlessly to evolving market demands. Whether its an e-commerce platform, a corporate website, or a dynamic web application, count on us to turn your vision into a compelling online presence."
                }
              />
            );
          case "Mobile":
            return (
              <ServiceDetailComponent
                title={"Mobile Development"}
                img={"/assets/mobile.jpg"}
                content="Enter the dynamic world of mobile technology with confidence, as our mobile development services pave the way for your app's success. We understand that mobile apps are more than just lines of code; they're experiences that connect users with your brand. Our team meticulously crafts mobile applications that resonate with your audience, blending stunning visuals with intuitive functionality. Whether iOS, Android, or cross-platform, we ensure your app boasts a user-friendly interface, seamless navigation, and robust performance. From ideation to deployment and maintenance, we stand by you, transforming your concepts into polished, feature-rich mobile experiences that elevate your business."
              />
            );
          case "Cloud":
            return (
              <ServiceDetailComponent
                title={"Cloud Development"}
                img={"/assets/cloud.jpg"}
                content="Enter the era of cloud-native applications where scalability, resilience, and agility define success. Our proficiency in developing cloud-native apps ensures that your digital footprint remains at the forefront of innovation. Leveraging cloud infrastructure, we design and deploy applications that harness the full potential of cloud technology. Our focus is on creating applications that are not just hosted in the cloud but optimized for it, offering benefits such as scalability, cost-efficiency, and seamless integration. From initial architecture planning to ongoing optimization, we guarantee that your cloud-native app is equipped to handle any challenge, adapting effortlessly to the evolving demands of your business landscape."
              />
            );
          case "Custom":
            return (
              <ServiceDetailComponent
                title={"Custom Development"}
                img={"/assets/home.jpg"}
                content="Experience the transformative power of bespoke software solutions crafted specifically for your business. Our custom software development services are the cornerstone of operational efficiency and innovation. We partner with you to comprehend your unique challenges, allowing us to engineer tailored solutions that streamline workflows, automate processes, and drive growth. Our team harnesses the latest technologies and methodologies to architect scalable, secure, and user-centric software applications. Whether it's CRM systems, enterprise solutions, or niche software, we are dedicated to delivering robust, future-ready solutions that align perfectly with your business objectives, empowering you to stay ahead in a competitive landscape."
              />
            );

          default:
            return (
              <ServiceDetailComponent
                title={"Web Development"}
                img={"/assets/web.jpg"}
                content={
                  "Embark on a digital journey with our comprehensive web development services tailored to suit your business needs. Our approach to web development goes beyond just creating a visually appealing site. We delve deep into understanding your brand, audience, and objectives to craft a digital experience that not only captivates but converts. From front-end design to back-end architecture, our team merges cutting-edge technology with creative flair, ensuring your website stands out in todays competitive landscape. We specialize in responsive design, intuitive interfaces, and scalable solutions that adapt seamlessly to evolving market demands. Whether its an e-commerce platform, a corporate website, or a dynamic web application, count on us to turn your vision into a compelling online presence."
                }
              />
            );
        }
      })()}
    </>
  );
}

interface DetailsComponent {
  title: string;
  img: string;
  content: string;
}

function ServiceDetailComponent({ title, img, content }: DetailsComponent) {
  return (
    <div className="flex-1">
      <div>
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />
      </div>
      <h2 className="text-3xl font-medium text-[#205487] py-5">{title}</h2>
      <p className="text-slate-600 leading-7">{content}</p>
    </div>
  );
}

export default ServiceDetail;

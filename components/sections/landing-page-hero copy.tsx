import Button from "../common/button";
import Image from "../common/image";
import OptimizedImage from "../common/optimized-image";

const LandingPageHero = ({ data }) => {
  const video_url = data.videoBackground?.video_url?.url
    ? data.videoBackground.video_url.url.replace(
        "bholdus.s3.ap-southeast-1.amazonaws.com",
        "cdn.bholdus.com"
      )
    : null;

  const background =
    data?.videoBackground?.enable && video_url ? (
      <div className="bg-hero-video">
        <video
          className="lazy"
          preload={"yes"}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
        >
          <source src={video_url} type="video/mp4" />
        </video>
      </div>
    ) : (
      <div className="bg-hero-image">
        <Image img={data.imageBackground} lazy={false} />
      </div>
    );

  return (
    <section className="relative z-2 min-h-screen flex-col flex">
      {background}
      <div id="hero" className="container">
        <div className="hero-logo">
          <OptimizedImage
            img={data.image}
            data-aos="fade"
            width={150}
            height={150}
          />
        </div>

        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h1 className="hero-title">{data.title}</h1>

          <p className="hero-description">{data.description}</p>

          {/* Buttons row */}
          <div className="hero-button">
            {data.actions.map((button: any) => (
              <Button
                className="mr-2 mb-2"
                isLink
                key={button.id}
                buttonType={button.type}
                button={button}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageHero;
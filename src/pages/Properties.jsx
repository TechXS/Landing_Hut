// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";


function Properties() {
  // Active on select a tab
  // function active(e) {
  //   let act = document.querySelectorAll(".active");
  //   act[0].classList.remove("active");
  //   e.target.classList.add("active");
  // }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

    <div className="properties">
      <Container >
        <AnimationTitles
          className="title mx-auto"
          title="Discover more properties - HF"
        />
        <p className="gray-50 mb-5">
        Discover a seamless way to transition from your current home to your next dream abode while landlords effortlessly market their vacant properties. Our platform ensures smoother moves, better occupancy rates, and a hassle-free experience for everyone involved. Say goodbye to the stress of moving and hello to a world where your next perfect home is just a click away. Join our community and experience the ultimate convenience in home transitions today!
        </p>
        {/* Start tabs */}
        {/* <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                All
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className="ms-0 bg-white-100 border-0 active"
                onClick={active}
              >
                Cottage
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                Chalet
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                Manor
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                Penthouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                Farmhouse
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button className="ms-0 bg-white-100 border-0" onClick={active}>
                Duplex
              </Button>
            </SwiperSlide>
          </Swiper>
        </div> */}
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-white-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">
                    Cascade Apartments
                  </h5>
                  <p className="gray-90">@TECHX nest_quest agency</p>
                  <div  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                      <div className="gray-90">Current Price</div>
                      <h6 className="">$17.01</h6> 
                 
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide> 
            <SwiperSlide>
              {" "}
              <Card className="bg-white-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/house_big.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Denkell Apartments</h5>
                  <p className="gray-90">@TECHX nest_quest agency</p>
                  <div  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                      <div className="gray-90">Current Price</div>
                      <h6 className="">$17.01</h6> 
                 
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-white-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Sky_ville Apartments</h5>
                  <p className="gray-90">@TECHX nest_quest agency</p>
                  <div  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                      <div className="gray-90">Current Price</div>
                      <h6 className="">$17.01</h6> 
                 
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-white-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Four_seas Apartments</h5>
                  <p className="gray-90">@TECHX nest_quest agency</p>
                  <div  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                      <div className="gray-90">Current Price</div>
                      <h6 className="">$17.01</h6> 
                 
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-white-100 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                  <h5 className="mt-2 fw-normal">Spruce Apartments</h5>
                  <p className="gray-90">@TECHX nest_quest agency</p>
                  <div  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}>
                      <div className="gray-90">Current Price</div>
                      <h6 className="">$17.01</h6> 
                 
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    {/* link to HF */}
        <a          
            href={process.env.REACT_APP_HF_SIGNUP} >
          <Button variant="primary ms-0">Sign Up</Button>
            </a>
    </div>
    // End properties
  );
}

export default Properties;

import React from 'react';
import { Slide } from 'react-slideshow-image';


const slideImages = [
  "http://amw.nu/projects/cms/assets/img/1517572498_1452211793735.jpg",
  "http://amw.nu/projects/cms/assets/img/1517098714_cinqueterreuntitled-.jpg",
  "http://amw.nu/projects/cms/assets/img/1517098988_r1.jpg",
  "http://amw.nu/projects/cms/assets/img/1517098790_alps.jpg",
  "http://amw.nu/projects/cms/assets/img/1517100408_1516798387_lunar_clock.jpg",
  "http://amw.nu/projects/cms/assets/img/1517138837_african_farming.jpg",
  "http://amw.nu/projects/cms/assets/img/1517100541_snowboard6A.jpg",
  "http://amw.nu/projects/cms/assets/img/1517096239_roatan_h.jpg",
  "http://amw.nu/projects/cms/assets/img/1517096898_IMG_8862.jpg",
  "http://amw.nu/projects/cms/assets/img/1517096946_3_days_in_dehli.jpg",
  "http://amw.nu/projects/cms/assets/img/1517098467_1516297917_100dogs.jpg",
  "http://amw.nu/projects/cms/assets/img/1517231173_HONDURAS.jpg",
  "http://amw.nu/projects/cms/assets/img/1517256577_1516903349_NW_DLY_ds1702001-467-uluru-ayers-rock-climbing-ban-UK_____uk_mux__1.jpg",
  "http://amw.nu/projects/cms/assets/img/1517256622_1516897438_hikera_on_ ayers_rock.jpg",
  "http://amw.nu/projects/cms/assets/img/1517265616_2014_03_copenhand.jpg",
  "http://amw.nu/projects/cms/assets/img/1517265637_cph2.jpg",
  "http://amw.nu/projects/cms/assets/img/1517265690_kbhn.jpg",
  "http://amw.nu/projects/cms/assets/img/1517270442_ny05.jpg",
  "http://amw.nu/projects/cms/assets/img/1517270502_27002182646_8908466ee2_o-3e0644946833.jpg",
  "http://amw.nu/projects/cms/assets/img/1517271941_kite5.jpg",
  "http://amw.nu/projects/cms/assets/img/1517271988_kite4.jpg",
  "http://amw.nu/projects/cms/assets/img/1517570908_1452211793735 (1).jpg",
  "http://amw.nu/projects/cms/assets/img/1517098559_download (1).jpg",
  "http://amw.nu/projects/cms/assets/img/1517572636_2.jpg"
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

const Slideshow = () => {

 /* var len = slideImages.length;*/
 
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
        </div>
      </div>
    </Slide>
  )
}

export default Slideshow;